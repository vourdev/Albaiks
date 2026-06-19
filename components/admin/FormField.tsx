import * as React from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  hint,
  required,
  children,
  className,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-sm font-medium text-brand-text">
        {label}
        {required && <span className="text-brand-error ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-brand-text-muted">{hint}</p>}
    </div>
  );
}

const baseInput =
  "w-full rounded-md border border-brand-border bg-white px-3 py-2.5 text-sm text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent disabled:opacity-60";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn(baseInput, "h-11", className)} {...props} />;
});

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, rows = 4, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(baseInput, "resize-y leading-relaxed", className)}
      {...props}
    />
  );
});

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...props }, ref) {
  return (
    <select ref={ref} className={cn(baseInput, "h-11", className)} {...props}>
      {children}
    </select>
  );
});

export function Switch({
  name,
  label,
  defaultChecked,
  description,
}: {
  name: string;
  label: string;
  defaultChecked?: boolean;
  description?: string;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer p-3 rounded-md border border-brand-border bg-white hover:border-brand-primary/30 transition-colors">
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        value="on"
        className="mt-0.5 h-4 w-4 accent-brand-primary"
      />
      <span>
        <span className="block text-sm font-medium text-brand-text">{label}</span>
        {description && (
          <span className="block text-xs text-brand-text-secondary mt-0.5">
            {description}
          </span>
        )}
      </span>
    </label>
  );
}

export function FormError({ message }: { message?: string | null }) {
  if (!message) return null;
  return (
    <p className="text-sm text-brand-error bg-brand-error/5 border border-brand-error/30 rounded-md px-3 py-2">
      {message}
    </p>
  );
}
