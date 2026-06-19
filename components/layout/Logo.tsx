import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "primary",
}: {
  className?: string;
  tone?: "primary" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-display text-2xl font-medium leading-none",
        tone === "primary" ? "text-brand-primary" : "text-white",
        className,
      )}
      aria-label="Albaiks — Beranda"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M16 4 C 9 8, 6 14, 8 22 C 10 28, 16 28, 16 28 C 16 28, 22 28, 24 22 C 26 14, 23 8, 16 4 Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M16 10 L 16 26 M 12 16 L 16 14 M 20 16 L 16 14 M 13 21 L 16 19 M 19 21 L 16 19"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span>
        Albaiks<span className="text-brand-accent">.</span>
      </span>
    </Link>
  );
}
