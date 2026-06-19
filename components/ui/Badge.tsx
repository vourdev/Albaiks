import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "success" | "outline" | "secondary";

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  const variants: Record<BadgeVariant, string> = {
    default: "bg-brand-primary text-white",
    accent: "bg-brand-accent text-white",
    success: "bg-brand-success text-white",
    secondary: "bg-brand-secondary/20 text-brand-primary",
    outline: "border border-brand-border text-brand-text-secondary bg-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] px-2.5 py-1 text-xs font-medium tracking-wide uppercase",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
