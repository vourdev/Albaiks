"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, Loader2, LogIn } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PasswordInput } from "@/components/admin/PasswordInput";
import { loginAction, type LoginState } from "./actions";

const initial: LoginState = { error: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" variant="primary" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />}
      {pending ? "Memproses…" : "Masuk"}
    </Button>
  );
}

export function LoginForm({ next }: { next: string }) {
  const [state, formAction] = useActionState(loginAction, initial);
  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="next" value={next} />
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          autoFocus
          placeholder="admin@albaiks.id"
          className="w-full h-11 rounded-md border border-brand-border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-secondary"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="password" className="block text-sm font-medium text-brand-text">
            Kata Sandi
          </label>
          <span
            className="text-xs text-brand-text-muted"
            title="Reset via terminal: npm run admin:reset"
          >
            Lupa? Reset via terminal
          </span>
        </div>
        <PasswordInput
          id="password"
          name="password"
          required
          autoComplete="current-password"
          placeholder="••••••••"
        />
      </div>
      {state.error && (
        <div className="flex items-start gap-2 rounded-md border border-brand-error/30 bg-brand-error/5 px-3 py-2.5 text-sm text-brand-error">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <p>{state.error}</p>
        </div>
      )}
      <SubmitButton />
    </form>
  );
}
