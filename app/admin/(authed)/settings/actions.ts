"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";

export type SettingsFormState = { error: string | null };

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export async function updateSettingsAction(
  prevState: SettingsFormState,
  formData: FormData,
): Promise<SettingsFormState> {
  const siteName = String(formData.get("siteName") ?? "").trim();
  const tagline = String(formData.get("tagline") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const serviceHours = String(formData.get("serviceHours") ?? "").trim();
  const whatsappNumber = digitsOnly(String(formData.get("whatsappNumber") ?? ""));
  const whatsappCSNumber = digitsOnly(String(formData.get("whatsappCSNumber") ?? ""));

  if (!siteName) return { error: "Nama situs wajib diisi." };
  if (!whatsappNumber || !whatsappCSNumber)
    return { error: "Nomor WhatsApp wajib diisi (hanya angka, dengan kode negara)." };
  if (whatsappNumber.length < 10 || whatsappCSNumber.length < 10)
    return { error: "Nomor WhatsApp tampak terlalu pendek. Sertakan kode negara (62)." };

  await prisma.siteSettings.upsert({
    where: { id: "singleton" },
    create: {
      id: "singleton",
      siteName,
      tagline,
      description,
      email,
      city,
      serviceHours,
      whatsappNumber,
      whatsappCSNumber,
    },
    update: {
      siteName,
      tagline,
      description,
      email,
      city,
      serviceHours,
      whatsappNumber,
      whatsappCSNumber,
    },
  });

  revalidatePath("/", "layout");
  redirect("/admin/settings?ok=updated");
}

export type PasswordFormState = { error: string | null; success?: boolean };

export async function changePasswordAction(
  prevState: PasswordFormState,
  formData: FormData,
): Promise<PasswordFormState> {
  const admin = await getCurrentAdmin();
  if (!admin) return { error: "Sesi habis. Silakan login ulang." };

  const current = String(formData.get("currentPassword") ?? "");
  const next = String(formData.get("newPassword") ?? "");
  const confirm = String(formData.get("confirmPassword") ?? "");

  if (!current || !next) return { error: "Semua field wajib diisi." };
  if (next.length < 8)
    return { error: "Kata sandi baru minimal 8 karakter." };
  if (next !== confirm)
    return { error: "Konfirmasi kata sandi tidak cocok." };

  const ok = await bcrypt.compare(current, admin.passwordHash);
  if (!ok) return { error: "Kata sandi saat ini salah." };

  const hash = await bcrypt.hash(next, 10);
  await prisma.admin.update({
    where: { id: admin.id },
    data: { passwordHash: hash },
  });

  return { error: null, success: true };
}
