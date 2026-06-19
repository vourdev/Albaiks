import Link from "next/link";
import { Plus, Pencil, Star } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/admin/PageHeader";

export default async function TestimonialsListPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  const { ok } = await searchParams;
  const testimonials = await prisma.testimonial.findMany({
    orderBy: [{ position: "asc" }, { createdAt: "desc" }],
  });

  return (
    <>
      <PageHeader
        title="Testimoni Pelanggan"
        description="Kumpulan ulasan nyata yang bisa ditampilkan di Beranda."
        action={
          <Button asChild size="md" variant="primary">
            <Link href="/admin/testimonials/new">
              <Plus className="h-4 w-4" /> Tambah Testimoni
            </Link>
          </Button>
        }
      />
      {ok && <Flash code={ok} />}

      {testimonials.length === 0 ? (
        <div className="rounded-xl border border-brand-border bg-white p-10 text-center text-brand-text-secondary">
          Belum ada testimoni.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Link
              key={t.id}
              href={`/admin/testimonials/${t.id}`}
              className="group flex flex-col gap-3 rounded-xl border border-brand-border bg-white p-5 hover:border-brand-primary/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-white text-sm font-medium">
                  {t.initial}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-brand-text truncate">{t.name}</p>
                  <p className="text-xs text-brand-text-muted truncate">
                    {t.location} · {t.product}
                  </p>
                </div>
                {t.featured && (
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-sm bg-brand-accent/15 text-brand-accent">
                    BERANDA
                  </span>
                )}
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-sm text-brand-text-secondary line-clamp-4 leading-relaxed">
                “{t.quote}”
              </p>
              <p className="mt-auto pt-2 text-xs font-medium text-brand-primary inline-flex items-center gap-1">
                <Pencil className="h-3 w-3" /> Edit
              </p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function Flash({ code }: { code: string }) {
  const m: Record<string, string> = {
    created: "Testimoni berhasil ditambahkan.",
    updated: "Testimoni berhasil diperbarui.",
    deleted: "Testimoni berhasil dihapus.",
  };
  if (!m[code]) return null;
  return (
    <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
      ✓ {m[code]}
    </div>
  );
}
