import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { prisma } from "@/lib/prisma";
import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Masuk Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  // First-run: no admin yet → push to setup flow.
  const adminCount = await prisma.admin.count();
  if (adminCount === 0) redirect("/admin/setup");

  const { next } = await searchParams;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-brand-cream via-brand-bg to-brand-secondary/15 px-5 py-10">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        <div className="rounded-xl border border-brand-border bg-white shadow-sm p-8">
          <div className="mb-6 text-center">
            <h1 className="font-display text-3xl text-brand-primary font-medium">
              Selamat Datang
            </h1>
            <p className="mt-1 text-sm text-brand-text-secondary">
              Masuk ke panel admin Albaiks
            </p>
          </div>
          <LoginForm next={next ?? "/admin"} />
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
