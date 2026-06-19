import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}

export function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", className)}
      {...props}
    />
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-10 sm:mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-primary font-medium leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
