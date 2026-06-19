"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, FormError } from "@/components/admin/FormField";
import { setupAdminAction, type SetupFormState } from "./actions";

const initial: SetupFormState = { error: null };

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" variant="primary" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
      {pending ? "Membuat akun…" : "Buat Akun Admin"}
    </Button>
  );
}

export function SetupForm() {
  const [state, formAction] = useActionState(setupAdminAction, initial);
  return (
    <form action={formAction} className="flex flex-col gap-4">
      <FormError message={state.error} />
      <Field label="Nama Admin" required>
        <Input
          name="name"
          autoComplete="name"
          autoFocus
          placeholder="Admin Albaiks"
          required
        />
      </Field>
      <Field label="Email" required>
        <Input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="admin@albaiks.id"
          required
        />
      </Field>
      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="Kata Sandi" required hint="Minimal 8 karakter">
          <Input
            type="password"
            name="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </Field>
        <Field label="Konfirmasi" required>
          <Input
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </Field>
      </div>
      <div className="mt-2 flex items-start gap-2 rounded-md border border-brand-secondary/30 bg-brand-cream/60 px-3 py-2.5 text-xs text-brand-text-secondary">
        <AlertCircle className="h-4 w-4 mt-0.5 text-brand-primary-light shrink-0" />
        <p>
          Kata sandi disimpan sebagai <strong>bcrypt hash</strong> di database.
          Kami tidak pernah menyimpan kata sandi asli dan tidak dapat
          mengembalikannya. Simpan dengan baik.
        </p>
      </div>
      <Submit />
    </form>
  );
}
