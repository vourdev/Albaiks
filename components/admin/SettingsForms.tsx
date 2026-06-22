"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Save, KeyRound, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea, FormError } from "./FormField";
import { PasswordInput } from "./PasswordInput";
import {
  updateSettingsAction,
  changePasswordAction,
  type SettingsFormState,
  type PasswordFormState,
} from "@/app/admin/(authed)/settings/actions";

const initialSettings: SettingsFormState = { error: null };
const initialPwd: PasswordFormState = { error: null };

function SaveBtn({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="md" variant="primary" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
      {pending ? "Menyimpan…" : label}
    </Button>
  );
}

type SettingsValues = {
  siteName: string;
  tagline: string;
  description: string;
  email: string;
  city: string;
  serviceHours: string;
  whatsappNumber: string;
  whatsappCSNumber: string;
};

export function SiteSettingsForm({ values }: { values: SettingsValues }) {
  const [state, formAction] = useActionState(updateSettingsAction, initialSettings);
  return (
    <form action={formAction} className="space-y-7">
      <FormError message={state.error} />

      <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
        <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
          Identitas Brand
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Nama Situs" required>
            <Input name="siteName" defaultValue={values.siteName} required />
          </Field>
          <Field label="Tagline">
            <Input name="tagline" defaultValue={values.tagline} />
          </Field>
        </div>
        <Field label="Deskripsi Brand" hint="Dipakai di footer dan meta description">
          <Textarea name="description" defaultValue={values.description} rows={3} />
        </Field>
      </fieldset>

      <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
        <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
          WhatsApp
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Nomor WA Pemesanan" required hint="Format: 6281234567890 (kode negara + nomor)">
            <Input name="whatsappNumber" defaultValue={values.whatsappNumber} required placeholder="6281234567890" />
          </Field>
          <Field label="Nomor WA Customer Service" required hint="Dipakai untuk tombol Hubungi Kami">
            <Input name="whatsappCSNumber" defaultValue={values.whatsappCSNumber} required placeholder="6281234567890" />
          </Field>
        </div>
      </fieldset>

      <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
        <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
          Kontak & Lokasi
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Email">
            <Input type="email" name="email" defaultValue={values.email} />
          </Field>
          <Field label="Kota / Wilayah">
            <Input name="city" defaultValue={values.city} />
          </Field>
        </div>
        <Field label="Jam Layanan">
          <Input name="serviceHours" defaultValue={values.serviceHours} />
        </Field>
      </fieldset>

      <div className="flex justify-end pt-2">
        <SaveBtn label="Simpan Pengaturan" />
      </div>
    </form>
  );
}

export function PasswordForm() {
  const [state, formAction] = useActionState(changePasswordAction, initialPwd);
  return (
    <form action={formAction} className="space-y-5">
      <FormError message={state.error} />
      {state.success && (
        <div className="flex items-start gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-800">
          <CheckCircle2 className="h-4 w-4 mt-0.5" />
          <p>Kata sandi berhasil diubah.</p>
        </div>
      )}
      <Field label="Kata Sandi Saat Ini" required>
        <PasswordInput name="currentPassword" required autoComplete="current-password" />
      </Field>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Kata Sandi Baru" required hint="Minimal 8 karakter">
          <PasswordInput name="newPassword" required autoComplete="new-password" minLength={8} />
        </Field>
        <Field label="Konfirmasi Kata Sandi" required>
          <PasswordInput name="confirmPassword" required autoComplete="new-password" minLength={8} />
        </Field>
      </div>
      <div className="flex justify-end pt-2">
        <ChangeBtn />
      </div>
    </form>
  );
}

function ChangeBtn() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <KeyRound className="h-4 w-4" />}
      {pending ? "Memproses…" : "Ubah Kata Sandi"}
    </Button>
  );
}
