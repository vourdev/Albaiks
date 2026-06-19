"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession, destroySession } from "@/lib/auth";

export type LoginState = { error: string | null };

export async function loginAction(
  prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  if (!email || !password) {
    return { error: "Email dan kata sandi wajib diisi." };
  }

  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) return { error: "Email atau kata sandi salah." };

  const ok = await bcrypt.compare(password, admin.passwordHash);
  if (!ok) return { error: "Email atau kata sandi salah." };

  await createSession({ sub: admin.id, email: admin.email, name: admin.name });

  redirect(next.startsWith("/admin") ? next : "/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}
