"use client";

import { useActionState, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import {
  Upload,
  X,
  ArrowUp,
  ArrowDown,
  Image as ImageIcon,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Pencil,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  uploadProductImagesAction,
  deleteProductImageAction,
  moveProductImageAction,
  updateProductImageAltAction,
  type UploadResult,
} from "@/app/admin/(authed)/products/[id]/image-actions";

type ImageItem = { id: string; url: string; alt: string };

const initial: UploadResult = { ok: false, uploaded: 0, error: null };

function UploadButton({ disabled }: { disabled?: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-brand-primary text-white text-sm font-medium hover:bg-brand-primary-light disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
      {pending ? "Mengunggah…" : "Unggah Gambar"}
    </button>
  );
}

export function ProductImageManager({
  productId,
  images,
}: {
  productId: string;
  images: ImageItem[];
}) {
  const uploadAction = uploadProductImagesAction.bind(null, productId);
  const [state, formAction] = useActionState(uploadAction, initial);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [editingAlt, setEditingAlt] = useState<string | null>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return setPendingFiles([]);
    setPendingFiles(Array.from(files));
  };

  // After successful upload, clear the pending list and the file input.
  if (state.ok && pendingFiles.length > 0) {
    queueMicrotask(() => {
      setPendingFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    });
  }

  return (
    <fieldset className="rounded-xl border border-brand-border bg-white p-6 space-y-5">
      <legend className="font-display text-xl text-brand-primary font-medium px-2 -ml-2">
        Galeri Foto Produk
      </legend>
      <p className="text-xs text-brand-text-secondary -mt-2">
        Unggah hingga 10 gambar sekaligus. Format: JPG, PNG, WEBP, AVIF, atau GIF. Maks 5MB per file.
        Gambar pertama akan jadi foto utama produk.
      </p>

      {/* Upload form */}
      <form ref={formRef} action={formAction} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-end">
          <label
            htmlFor="image-upload-input"
            className="flex-1 cursor-pointer flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-brand-border bg-brand-cream/30 hover:bg-brand-cream/60 hover:border-brand-primary/40 px-5 py-6 transition-colors"
          >
            <ImageIcon className="h-6 w-6 text-brand-primary-light" />
            <span className="text-sm text-brand-text-secondary">
              {pendingFiles.length > 0
                ? `${pendingFiles.length} file dipilih`
                : "Klik untuk pilih gambar"}
            </span>
            {pendingFiles.length > 0 && (
              <span className="text-xs text-brand-text-muted">
                {pendingFiles.map((f) => f.name).join(", ")}
              </span>
            )}
            <input
              ref={fileInputRef}
              id="image-upload-input"
              type="file"
              name="images"
              accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
              multiple
              onChange={(e) => handleFiles(e.target.files)}
              className="hidden"
            />
          </label>
          <UploadButton disabled={pendingFiles.length === 0} />
        </div>

        {state.error && (
          <div className="flex items-start gap-2 rounded-md border border-brand-error/30 bg-brand-error/5 px-3 py-2.5 text-sm text-brand-error">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <p>{state.error}</p>
          </div>
        )}
        {state.ok && state.uploaded > 0 && (
          <div className="flex items-start gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-800">
            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
            <p>{state.uploaded} gambar berhasil diunggah.</p>
          </div>
        )}
      </form>

      {/* Existing images */}
      {images.length === 0 ? (
        <div className="rounded-md border border-dashed border-brand-border bg-brand-cream/30 p-8 text-center">
          <ImageIcon className="h-7 w-7 text-brand-text-muted mx-auto mb-2" />
          <p className="text-sm text-brand-text-secondary">
            Belum ada gambar diunggah.
          </p>
          <p className="text-xs text-brand-text-muted mt-1">
            Tanpa gambar yang diunggah, produk akan menampilkan ilustrasi SVG fallback.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <li key={img.id} className="group relative rounded-md border border-brand-border overflow-hidden bg-white">
              <div className="relative aspect-square bg-brand-cream/40">
                <Image
                  src={img.url}
                  alt={img.alt || "Foto produk"}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                {i === 0 && (
                  <span className="absolute top-2 left-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm bg-brand-accent text-white shadow-sm">
                    Utama
                  </span>
                )}
              </div>
              <div className="p-2.5 space-y-2">
                <AltEditor
                  imageId={img.id}
                  alt={img.alt}
                  editing={editingAlt === img.id}
                  onStartEdit={() => setEditingAlt(img.id)}
                  onDone={() => setEditingAlt(null)}
                />
                <div className="flex items-center justify-between gap-1">
                  <div className="flex gap-1">
                    <ReorderButton
                      imageId={img.id}
                      direction="up"
                      disabled={i === 0}
                      label="Geser ke kiri"
                    />
                    <ReorderButton
                      imageId={img.id}
                      direction="down"
                      disabled={i === images.length - 1}
                      label="Geser ke kanan"
                    />
                  </div>
                  <DeleteButton imageId={img.id} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </fieldset>
  );
}

function AltEditor({
  imageId,
  alt,
  editing,
  onStartEdit,
  onDone,
}: {
  imageId: string;
  alt: string;
  editing: boolean;
  onStartEdit: () => void;
  onDone: () => void;
}) {
  const action = updateProductImageAltAction.bind(null, imageId);
  if (editing) {
    return (
      <form
        action={async (fd) => {
          await action(fd);
          onDone();
        }}
        className="flex items-center gap-1"
      >
        <input
          name="alt"
          defaultValue={alt}
          autoFocus
          maxLength={200}
          placeholder="Alt text"
          className="flex-1 h-7 px-2 rounded-sm border border-brand-border bg-white text-xs focus:outline-none focus:ring-1 focus:ring-brand-secondary"
        />
        <button
          type="submit"
          className="inline-flex h-7 w-7 items-center justify-center rounded-sm bg-brand-primary text-white hover:bg-brand-primary-light"
          aria-label="Simpan"
        >
          <Check className="h-3 w-3" />
        </button>
      </form>
    );
  }
  return (
    <button
      type="button"
      onClick={onStartEdit}
      className="w-full flex items-center gap-1.5 text-xs text-brand-text-muted hover:text-brand-primary text-left truncate"
    >
      <Pencil className="h-3 w-3 shrink-0" />
      <span className={cn("truncate", !alt && "italic")}>
        {alt || "Tambah alt text"}
      </span>
    </button>
  );
}

function ReorderButton({
  imageId,
  direction,
  disabled,
  label,
}: {
  imageId: string;
  direction: "up" | "down";
  disabled: boolean;
  label: string;
}) {
  const action = moveProductImageAction.bind(null, imageId, direction);
  return (
    <form action={action}>
      <button
        type="submit"
        disabled={disabled}
        aria-label={label}
        className="inline-flex h-7 w-7 items-center justify-center rounded-sm text-brand-text-secondary hover:bg-brand-cream hover:text-brand-primary disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {direction === "up" ? (
          <ArrowUp className="h-3.5 w-3.5" />
        ) : (
          <ArrowDown className="h-3.5 w-3.5" />
        )}
      </button>
    </form>
  );
}

function DeleteButton({ imageId }: { imageId: string }) {
  const action = deleteProductImageAction.bind(null, imageId);
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm("Hapus gambar ini?")) e.preventDefault();
      }}
    >
      <button
        type="submit"
        aria-label="Hapus gambar"
        className="inline-flex h-7 w-7 items-center justify-center rounded-sm text-brand-error hover:bg-brand-error/10"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
