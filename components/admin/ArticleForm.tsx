"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Save, Trash2, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea, Select, Switch, FormError } from "./FormField";
import { type ArticleFormState } from "@/app/admin/(authed)/articles/actions";

type Values = {
  slug?: string;
  title?: string;
  excerpt?: string;
  category?:
    | "MANFAAT_PRODUK"
    | "TIPS_HERBAL"
    | "RESEP_CARA_PAKAI"
    | "GAYA_HIDUP_SEHAT";
  readingTime?: number;
  accent?: string;
  published?: boolean;
  content?: { heading: string; body: string }[];
};

const ACCENT_PRESETS = [
  "from-emerald-100 to-amber-50",
  "from-amber-100 to-emerald-50",
  "from-amber-100 to-orange-50",
  "from-rose-50 to-amber-50",
  "from-sky-50 to-emerald-50",
];

const initial: ArticleFormState = { error: null };

function SubmitButton({ mode }: { mode: "create" | "edit" }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" variant="primary" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
      {pending ? "Menyimpan…" : mode === "create" ? "Simpan Artikel" : "Perbarui Artikel"}
    </Button>
  );
}

export function ArticleForm({
  values,
  action,
  mode,
  deleteAction,
}: {
  values?: Values;
  action: (state: ArticleFormState, fd: FormData) => Promise<ArticleFormState>;
  mode: "create" | "edit";
  deleteAction?: () => Promise<void>;
}) {
  const [state, formAction] = useActionState(action, initial);
  const [sections, setSections] = useState(
    values?.content && values.content.length > 0
      ? values.content
      : [{ heading: "", body: "" }],
  );

  const add = () =>
    setSections((s) => [...s, { heading: "", body: "" }]);
  const remove = (i: number) =>
    setSections((s) => (s.length === 1 ? s : s.filter((_, idx) => idx !== i)));
  const update = (i: number, field: "heading" | "body", value: string) =>
    setSections((s) =>
      s.map((sec, idx) => (idx === i ? { ...sec, [field]: value } : sec)),
    );

  return (
    <form action={formAction} className="space-y-7">
      <FormError message={state.error} />

      <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
        <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
          Informasi Artikel
        </legend>
        <Field label="Judul" required>
          <Input name="title" defaultValue={values?.title ?? ""} required />
        </Field>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Slug URL" hint="Kosongkan untuk auto-generate">
            <Input name="slug" defaultValue={values?.slug ?? ""} />
          </Field>
          <Field label="Kategori" required>
            <Select name="category" defaultValue={values?.category ?? "MANFAAT_PRODUK"}>
              <option value="MANFAAT_PRODUK">Manfaat Produk</option>
              <option value="TIPS_HERBAL">Tips Herbal</option>
              <option value="RESEP_CARA_PAKAI">Resep & Cara Pakai</option>
              <option value="GAYA_HIDUP_SEHAT">Gaya Hidup Sehat</option>
            </Select>
          </Field>
        </div>
        <Field label="Ringkasan / Excerpt" hint="Tampil di card daftar artikel" required>
          <Textarea name="excerpt" defaultValue={values?.excerpt ?? ""} required rows={2} />
        </Field>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Estimasi Waktu Baca (menit)">
            <Input name="readingTime" type="number" min={1} max={60} defaultValue={values?.readingTime ?? 5} />
          </Field>
          <Field label="Gradien Latar Header">
            <Select name="accent" defaultValue={values?.accent ?? ACCENT_PRESETS[0]}>
              {ACCENT_PRESETS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </Select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
        <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
          Konten Artikel
        </legend>
        <p className="text-xs text-brand-text-secondary">
          Pecah artikel menjadi beberapa section. Setiap section punya judul (heading) dan isi (body).
        </p>
        <div className="space-y-4">
          {sections.map((sec, i) => (
            <div key={i} className="rounded-md border border-brand-border bg-brand-cream/30 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-brand-text-muted">
                  Section {i + 1}
                </span>
                <button
                  type="button"
                  onClick={() => remove(i)}
                  disabled={sections.length === 1}
                  className="inline-flex items-center justify-center h-7 w-7 rounded-md text-brand-error hover:bg-brand-error/10 disabled:opacity-30"
                  aria-label="Hapus section"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <Field label="Heading">
                <Input
                  name="sectionHeading"
                  value={sec.heading}
                  onChange={(e) => update(i, "heading", e.target.value)}
                  placeholder="Polifenol — Antioksidan Pelindung Jantung"
                />
              </Field>
              <Field label="Isi" className="mt-3">
                <Textarea
                  name="sectionBody"
                  value={sec.body}
                  onChange={(e) => update(i, "body", e.target.value)}
                  rows={4}
                  placeholder="Tulis isi section di sini…"
                />
              </Field>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={add}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-primary-light"
        >
          <Plus className="h-4 w-4" /> Tambah Section
        </button>
      </fieldset>

      <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
        <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
          Status
        </legend>
        <Switch
          name="published"
          label="Terbitkan"
          description="Artikel akan tampil di halaman /edukasi"
          defaultChecked={values?.published ?? true}
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
                  if (!confirm("Hapus artikel ini?")) e.preventDefault();
                }}
              >
                <Trash2 className="h-4 w-4" /> Hapus Artikel
              </button>
            </form>
          )}
        </div>
        <SubmitButton mode={mode} />
      </div>
    </form>
  );
}
