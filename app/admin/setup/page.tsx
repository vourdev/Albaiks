import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { prisma } from "@/lib/prisma";
import { SetupForm } from "./SetupForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Setup Awal",
  robots: { index: false, follow: false },
};

export default async function AdminSetupPage() {
  const count = await prisma.admin.count();
  if (count > 0) redirect("/admin/login");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-cream via-brand-bg to-brand-secondary/15 px-5 py-10">
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <div className="rounded-xl border border-brand-border bg-white shadow-sm p-8">
          <div className="mb-6 text-center">
            <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-2">
              Setup Awal
            </span>
            <h1 className="font-display text-3xl text-brand-primary font-medium">
              Buat Akun Admin Pertama
            </h1>
            <p className="mt-1.5 text-sm text-brand-text-secondary">
              Belum ada admin terdaftar di sistem. Buat akun pertama untuk
              mulai mengelola website Albaiks.
            </p>
          </div>
          <SetupForm />
        </div>
        <p className="mt-6 text-center text-xs text-brand-text-muted">
          <Link href="/" className="hover:text-brand-primary">
            ← Kembali ke situs
          </Link>
        </p>
      </div>
    </div>
  );
}
