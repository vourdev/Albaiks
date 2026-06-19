"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Save, Trash2, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea, Select, Switch, FormError } from "./FormField";
import { type ProductFormState } from "@/app/admin/(authed)/products/actions";

type ProductValues = {
  id?: string;
  slug?: string;
  sku?: string;
  name?: string;
  category?: "MINYAK_HERBAL" | "SERBUK_REMPAH";
  shortDescription?: string;
  description?: string;
  composition?: string;
  image?: string;
  accent?: string;
  featured?: boolean;
  published?: boolean;
  labels?: string[];
  benefits?: string[];
  usage?: string[];
  variants?: { label: string; price: number }[];
};

const ACCENT_PRESETS = [
  "from-emerald-100 via-emerald-50 to-amber-50",
  "from-amber-50 via-stone-50 to-emerald-50",
  "from-amber-100 via-orange-50 to-emerald-50",
  "from-rose-50 via-amber-50 to-emerald-50",
  "from-sky-50 via-emerald-50 to-amber-50",
];

const initial: ProductFormState = { error: null };

function SubmitButton({ mode }: { mode: "create" | "edit" }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" variant="primary" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
      {pending ? "Menyimpan…" : mode === "create" ? "Simpan Produk" : "Perbarui Produk"}
    </Button>
  );
}

export function ProductForm({
  values,
  action,
  mode,
  deleteAction,
}: {
  values?: ProductValues;
  action: (state: ProductFormState, formData: FormData) => Promise<ProductFormState>;
  mode: "create" | "edit";
  deleteAction?: () => Promise<void>;
}) {
  const [state, formAction] = useActionState(action, initial);
  const [variants, setVariants] = useState(
    values?.variants && values.variants.length > 0
      ? values.variants
      : [{ label: "", price: 0 }],
  );

  const addVariant = () => setVariants((vs) => [...vs, { label: "", price: 0 }]);
  const removeVariant = (i: number) =>
    setVariants((vs) => (vs.length === 1 ? vs : vs.filter((_, idx) => idx !== i)));
  const updateVariant = (i: number, field: "label" | "price", value: string) =>
    setVariants((vs) =>
      vs.map((v, idx) =>
        idx === i
          ? field === "price"
            ? { ...v, price: parseInt(value || "0", 10) || 0 }
            : { ...v, label: value }
          : v,
      ),
    );

  return (
    <form action={formAction} className="space-y-7">
      <FormError message={state.error} />

      <Section title="Informasi Dasar">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Nama Produk" required>
            <Input name="name" defaultValue={values?.name ?? ""} required placeholder="Albaiks Extra Virgin Olive Oil" />
          </Field>
          <Field label="SKU" required>
            <Input name="sku" defaultValue={values?.sku ?? ""} required placeholder="ALB-OLV-001" />
          </Field>
          <Field label="Slug URL" hint="Kosongkan untuk auto-generate dari nama">
            <Input name="slug" defaultValue={values?.slug ?? ""} placeholder="minyak-zaitun-extra-virgin" />
          </Field>
          <Field label="Kategori" required>
            <Select name="category" defaultValue={values?.category ?? "MINYAK_HERBAL"}>
              <option value="MINYAK_HERBAL">Minyak Herbal</option>
              <option value="SERBUK_REMPAH">Serbuk & Rempah</option>
            </Select>
          </Field>
        </div>

        <Field label="Deskripsi Singkat" hint="Akan tampil di card katalog dan detail produk (2-3 kalimat)" required>
          <Textarea name="shortDescription" defaultValue={values?.shortDescription ?? ""} required rows={2} />
        </Field>

        <Field label="Deskripsi Lengkap" hint="Konten tab Deskripsi di halaman produk">
          <Textarea name="description" defaultValue={values?.description ?? ""} rows={5} />
        </Field>
      </Section>

      <Section title="Varian & Harga">
        <div className="space-y-3">
          {variants.map((v, i) => (
            <div key={i} className="flex items-end gap-3">
              <Field label={i === 0 ? "Label varian" : ""} className="flex-1">
                <Input
                  name="variantLabel"
                  value={v.label}
                  onChange={(e) => updateVariant(i, "label", e.target.value)}
                  placeholder="100ml / 250g / dll."
                  required
                />
              </Field>
              <Field label={i === 0 ? "Harga (IDR)" : ""} className="w-40">
                <Input
                  name="variantPrice"
                  type="number"
                  min={0}
                  value={v.price || ""}
                  onChange={(e) => updateVariant(i, "price", e.target.value)}
                  placeholder="65000"
                  required
                />
              </Field>
              <button
                type="button"
                onClick={() => removeVariant(i)}
                disabled={variants.length === 1}
                className="h-11 w-11 inline-flex items-center justify-center rounded-md text-brand-error hover:bg-brand-error/10 disabled:opacity-30 disabled:hover:bg-transparent"
                aria-label="Hapus varian"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addVariant}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-primary-light"
        >
          <Plus className="h-4 w-4" /> Tambah Varian
        </button>
      </Section>

      <Section title="Konten Detail">
        <Field
          label="Manfaat"
          hint="Satu manfaat per baris. Akan tampil di tab Manfaat."
        >
          <Textarea
            name="benefits"
            defaultValue={(values?.benefits ?? []).join("\n")}
            rows={5}
            placeholder={"Menjaga kesehatan jantung\nAnti-inflamasi alami\n..."}
          />
        </Field>
        <Field label="Komposisi & Bahan">
          <Input
            name="composition"
            defaultValue={values?.composition ?? ""}
            placeholder="100% Olea europaea (Olive) Fruit Oil"
          />
        </Field>
        <Field label="Cara Pakai" hint="Satu langkah per baris">
          <Textarea
            name="usage"
            defaultValue={(values?.usage ?? []).join("\n")}
            rows={4}
            placeholder={"Konsumsi 1–2 sdm/hari\nGunakan sebagai dressing\n..."}
          />
        </Field>
        <Field
          label="Label / Badge"
          hint="Tampil di card produk. Satu label per baris (cth: Terlaris, Cold-Pressed)"
        >
          <Textarea
            name="labels"
            defaultValue={(values?.labels ?? []).join("\n")}
            rows={2}
            placeholder={"Terlaris\nCold-Pressed"}
          />
        </Field>
      </Section>

      <Section title="Tampilan">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Ilustrasi Produk" hint="Pilih ilustrasi SVG built-in">
            <Select name="image" defaultValue={values?.image ?? "olive"}>
              <option value="olive">Olive (botol minyak zaitun)</option>
              <option value="coconut">Coconut (botol VCO)</option>
              <option value="ginger">Ginger (kemasan serbuk)</option>
            </Select>
          </Field>
          <Field label="Gradien Latar" hint="Kelas Tailwind for background">
            <Select name="accent" defaultValue={values?.accent ?? ACCENT_PRESETS[0]}>
              {ACCENT_PRESETS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      </Section>

      <Section title="Status Publikasi">
        <div className="grid sm:grid-cols-2 gap-3">
          <Switch
            name="published"
            label="Terbitkan"
            description="Tampilkan produk ini di katalog publik."
            defaultChecked={values?.published ?? true}
          />
          <Switch
            name="featured"
            label="Produk Unggulan"
            description="Tampilkan di Beranda di section Produk Unggulan."
            defaultChecked={values?.featured ?? false}
          />
        </div>
      </Section>

      <div className="flex items-center justify-between pt-4 border-t border-brand-border">
        <div>
          {deleteAction && (
            <form action={deleteAction}>
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-error hover:underline"
                onClick={(e) => {
                  if (!confirm("Hapus produk ini? Tindakan ini tidak dapat dibatalkan.")) {
                    e.preventDefault();
                  }
                }}
              >
                <Trash2 className="h-4 w-4" />
                Hapus Produk
              </button>
            </form>
          )}
        </div>
        <SubmitButton mode={mode} />
      </div>
    </form>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
      <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
        {title}
      </legend>
      {children}
    </fieldset>
  );
}
