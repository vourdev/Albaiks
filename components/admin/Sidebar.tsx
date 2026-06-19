"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Newspaper,
  MessageSquareQuote,
  Settings,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { logoutAction } from "@/app/admin/login/actions";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/products", label: "Produk", icon: Package },
  { href: "/admin/articles", label: "Edukasi", icon: Newspaper },
  { href: "/admin/testimonials", label: "Testimoni", icon: MessageSquareQuote },
  { href: "/admin/settings", label: "Pengaturan", icon: Settings },
];

function NavItems({ pathname }: { pathname: string }) {
  return (
    <nav className="flex-1 px-4 space-y-1">
      {NAV.map((item) => {
        const active = item.exact
          ? pathname === item.href
          : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
              active
                ? "bg-brand-primary text-white"
                : "text-brand-text-secondary hover:bg-brand-cream hover:text-brand-primary",
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar({ adminName }: { adminName: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* mobile bar */}
      <header className="lg:hidden sticky top-0 z-30 bg-white border-b border-brand-border flex items-center justify-between px-4 h-14">
        <Logo />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-brand-cream text-brand-primary"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* mobile drawer */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-brand-primary/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <aside
            onClick={(e) => e.stopPropagation()}
            className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-brand-border">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-brand-cream text-brand-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="py-4 flex-1 overflow-y-auto">
              <NavItems pathname={pathname} />
            </div>
            <SidebarFooter adminName={adminName} />
          </aside>
        </div>
      )}

      {/* desktop sidebar */}
      <aside className="hidden lg:flex sticky top-0 h-screen w-64 flex-col bg-white border-r border-brand-border">
        <div className="p-5 border-b border-brand-border">
          <Logo />
          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-brand-text-muted">
            Admin Panel
          </p>
        </div>
        <div className="py-5 flex-1 overflow-y-auto">
          <NavItems pathname={pathname} />
        </div>
        <SidebarFooter adminName={adminName} />
      </aside>
    </>
  );
}

function SidebarFooter({ adminName }: { adminName: string }) {
  return (
    <div className="border-t border-brand-border p-4">
      <Link
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-brand-text-secondary hover:bg-brand-cream hover:text-brand-primary transition-colors"
      >
        <ExternalLink className="h-4 w-4" /> Lihat Situs
      </Link>
      <div className="mt-3 px-3 py-2.5 rounded-md bg-brand-cream">
        <p className="text-[11px] uppercase tracking-wider text-brand-text-muted">
          Masuk sebagai
        </p>
        <p className="text-sm font-semibold text-brand-text truncate">{adminName}</p>
      </div>
      <form action={logoutAction} className="mt-2">
        <button
          type="submit"
          className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-brand-error hover:bg-brand-error/5 transition-colors"
        >
          <LogOut className="h-4 w-4" /> Keluar
        </button>
      </form>
    </div>
  );
}
