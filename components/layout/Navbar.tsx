"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/config";
import { generateWhatsAppCSURL } from "@/lib/whatsapp";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Navbar({ waNumber }: { waNumber: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-brand-bg/85 backdrop-blur-md border-b border-brand-border shadow-sm"
          : "bg-brand-bg/70 backdrop-blur-sm border-b border-transparent",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi utama">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors py-1.5",
                    active
                      ? "text-brand-primary"
                      : "text-brand-text-secondary hover:text-brand-primary",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-0.5 bg-brand-accent transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={generateWhatsAppCSURL(waNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-[6px] bg-wa text-white px-4 h-10 text-sm font-medium hover:bg-wa-hover transition-colors"
              aria-label="Hubungi via WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden lg:inline">Hubungi Kami</span>
            </a>
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-[6px] text-brand-primary hover:bg-brand-cream"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-b border-brand-border bg-brand-bg",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          className="mx-auto w-full max-w-7xl px-5 py-4 flex flex-col gap-1"
          aria-label="Navigasi mobile"
        >
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-[6px] px-3 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-brand-cream text-brand-primary"
                    : "text-brand-text-secondary hover:bg-brand-cream hover:text-brand-primary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={generateWhatsAppCSURL(waNumber)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-[6px] bg-wa text-white px-4 h-12 text-sm font-medium"
          >
            <WhatsAppIcon className="h-4 w-4" /> Hubungi via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
