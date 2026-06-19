/**
 * Admin CLI — interactive utility for managing admin accounts directly from
 * the terminal. Credentials are read from stdin (hidden input for passwords)
 * and never written to disk or env vars.
 *
 * Usage:
 *   npm run admin:create   → create a new admin (or first one)
 *   npm run admin:reset    → reset an existing admin's password
 *   npm run admin:list     → list registered admins (emails only)
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import readline from "node:readline";
import { Writable } from "node:stream";

const prisma = new PrismaClient();

function prompt(question: string, { mask = false }: { mask?: boolean } = {}) {
  return new Promise<string>((resolve) => {
    const mutableStdout = new Writable({
      write(chunk, encoding, cb) {
        if (!mask || (mutableStdout as unknown as { muted: boolean }).muted === false) {
          process.stdout.write(chunk, encoding);
        }
        cb();
      },
    });
    (mutableStdout as unknown as { muted: boolean }).muted = false;

    const rl = readline.createInterface({
      input: process.stdin,
      output: mutableStdout,
      terminal: true,
    });

    rl.question(question, (answer) => {
      if (mask) process.stdout.write("\n");
      rl.close();
      resolve(answer.trim());
    });

    if (mask) (mutableStdout as unknown as { muted: boolean }).muted = true;
  });
}

async function readPassword(label = "Kata sandi"): Promise<string> {
  while (true) {
    const pw = await prompt(`${label}: `, { mask: true });
    if (pw.length < 8) {
      console.log("  ✗ Minimal 8 karakter. Coba lagi.");
      continue;
    }
    const confirm = await prompt("Konfirmasi: ", { mask: true });
    if (pw !== confirm) {
      console.log("  ✗ Konfirmasi tidak cocok. Coba lagi.");
      continue;
    }
    return pw;
  }
}

async function createAdmin() {
  const count = await prisma.admin.count();
  console.log(
    count === 0
      ? "🌿 Belum ada admin. Mari buat admin pertama.\n"
      : `Sudah ada ${count} admin. Membuat akun baru.\n`,
  );

  const name = await prompt("Nama: ");
  const email = (await prompt("Email: ")).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.error("✗ Email tidak valid.");
    process.exit(1);
  }

  const dupe = await prisma.admin.findUnique({ where: { email } });
  if (dupe) {
    console.error(`✗ Email "${email}" sudah dipakai. Gunakan admin:reset jika ingin reset password.`);
    process.exit(1);
  }

  const password = await readPassword();
  const passwordHash = await bcrypt.hash(password, 12);
  const admin = await prisma.admin.create({
    data: { name, email, passwordHash },
  });
  console.log(`\n✓ Admin dibuat: ${admin.email} (${admin.id})`);
}

async function resetPassword() {
  const admins = await prisma.admin.findMany({
    select: { id: true, name: true, email: true },
    orderBy: { createdAt: "asc" },
  });
  if (admins.length === 0) {
    console.error("✗ Belum ada admin. Jalankan `npm run admin:create` dulu.");
    process.exit(1);
  }
  console.log("Admin terdaftar:");
  admins.forEach((a, i) => console.log(`  ${i + 1}. ${a.email} (${a.name})`));

  const email = (await prompt("\nEmail admin yang akan direset: ")).toLowerCase();
  const target = admins.find((a) => a.email === email);
  if (!target) {
    console.error(`✗ Tidak ada admin dengan email "${email}".`);
    process.exit(1);
  }
  const password = await readPassword("Kata sandi baru");
  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.admin.update({
    where: { id: target.id },
    data: { passwordHash },
  });
  console.log(`\n✓ Kata sandi untuk ${target.email} berhasil direset.`);
}

async function listAdmins() {
  const admins = await prisma.admin.findMany({
    select: { id: true, name: true, email: true, createdAt: true },
    orderBy: { createdAt: "asc" },
  });
  if (admins.length === 0) {
    console.log("Belum ada admin terdaftar.");
    return;
  }
  console.log(`${admins.length} admin terdaftar:\n`);
  for (const a of admins) {
    console.log(
      `  · ${a.email}  (${a.name})  — dibuat ${a.createdAt.toLocaleDateString("id-ID")}`,
    );
  }
}

async function main() {
  const cmd = process.argv[2];
  switch (cmd) {
    case "create":
      await createAdmin();
      break;
    case "reset":
      await resetPassword();
      break;
    case "list":
      await listAdmins();
      break;
    default:
      console.error(
        "Gunakan: npm run admin:create | admin:reset | admin:list",
      );
      process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
