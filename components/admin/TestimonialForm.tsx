"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Save, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea, Select, Switch, FormError } from "./FormField";
import { type TestimonialFormState } from "@/app/admin/(authed)/testimonials/actions";

type Values = {
  name?: string;
  location?: string;
  product?: string;
  quote?: string;
  rating?: number;
  initial?: string;
  featured?: boolean;
};

const initial: TestimonialFormState = { error: null };

function SubmitButton({ mode }: { mode: "create" | "edit" }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" variant="primary" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
      {pending ? "Menyimpan…" : mode === "create" ? "Simpan" : "Perbarui"}
    </Button>
  );
}

export function TestimonialForm({
  values,
  action,
  mode,
  deleteAction,
}: {
  values?: Values;
  action: (state: TestimonialFormState, fd: FormData) => Promise<TestimonialFormState>;
  mode: "create" | "edit";
  deleteAction?: () => Promise<void>;
}) {
  const [state, formAction] = useActionState(action, initial);

  return (
    <form action={formAction} className="space-y-7">
      <FormError message={state.error} />

      <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
        <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
          Identitas Pelanggan
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Nama" required>
            <Input name="name" defaultValue={values?.name ?? ""} required placeholder="Sari Wulandari" />
          </Field>
          <Field label="Kota / Lokasi">
            <Input name="location" defaultValue={values?.location ?? ""} placeholder="Jakarta" />
          </Field>
          <Field label="Produk yang Diulas">
            <Input name="product" defaultValue={values?.product ?? ""} placeholder="Extra Virgin Olive Oil" />
          </Field>
          <Field label="Inisial Avatar" hint="2-3 huruf — kosongkan untuk auto">
            <Input name="initial" defaultValue={values?.initial ?? ""} maxLength={3} placeholder="SW" />
          </Field>
        </div>
      </fieldset>

      <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
        <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
          Ulasan
        </legend>
        <Field label="Rating">
          <Select name="rating" defaultValue={String(values?.rating ?? 5)}>
            <option value="5">★★★★★ (5)</option>
            <option value="4">★★★★☆ (4)</option>
            <option value="3">★★★☆☆ (3)</option>
            <option value="2">★★☆☆☆ (2)</option>
            <option value="1">★☆☆☆☆ (1)</option>
          </Select>
        </Field>
        <Field label="Kutipan Testimoni" required>
          <Textarea name="quote" defaultValue={values?.quote ?? ""} required rows={5} />
        </Field>
        <Switch
          name="featured"
          label="Tampilkan di Beranda"
          description="Testimoni akan tampil pada section Testimoni di halaman utama."
          defaultChecked={values?.featured ?? true}
        />
      </fieldset>

      <div className="flex items-center justify-between pt-4 border-t border-brand-border">
        <div>
          {deleteAction && (
            <form action={deleteAction}>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-error hover:underline"
                onClick={(e) => {
                  if (!confirm("Hapus testimoni ini?")) e.preventDefault();
                }}
              >
                <Trash2 className="h-4 w-4" /> Hapus
              </button>
            </form>
          )}
        </div>
        <SubmitButton mode={mode} />
      </div>
    </form>
  );
}
