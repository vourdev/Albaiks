"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/auth";

export type SetupFormState = { error: string | null };

export async function setupAdminAction(
  prevState: SetupFormState,
  formData: FormData,
): Promise<SetupFormState> {
  // Hard guard: setup must only run when there is no admin yet.
  const existing = await prisma.admin.count();
  if (existing > 0) {
    redirect("/admin/login");
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirmPassword") ?? "");

  if (!name) return { error: "Nama admin wajib diisi." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { error: "Email tidak valid." };
  if (password.length < 8)
    return { error: "Kata sandi minimal 8 karakter." };
  if (password !== confirm)
    return { error: "Konfirmasi kata sandi tidak cocok." };

  const passwordHash = await bcrypt.hash(password, 12);

  const admin = await prisma.admin.create({
    data: { name, email, passwordHash },
  });

  await createSession({
    sub: admin.id,
    email: admin.email,
    name: admin.name,
  });

  redirect("/admin");
}
