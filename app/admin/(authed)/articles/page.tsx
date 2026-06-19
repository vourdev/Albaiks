import Link from "next/link";
import { Plus, Pencil, Eye } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/admin/PageHeader";

const CATEGORY_LABEL: Record<string, string> = {
  MANFAAT_PRODUK: "Manfaat Produk",
  TIPS_HERBAL: "Tips Herbal",
  RESEP_CARA_PAKAI: "Resep & Cara Pakai",
  GAYA_HIDUP_SEHAT: "Gaya Hidup Sehat",
};

export default async function ArticlesListPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  const { ok } = await searchParams;
  const articles = await prisma.article.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return (
    <>
      <PageHeader
        title="Edukasi Herbal"
        description="Kelola artikel blog edukasi yang tampil di /edukasi."
        action={
          <Button asChild size="md" variant="primary">
            <Link href="/admin/articles/new">
              <Plus className="h-4 w-4" /> Tambah Artikel
            </Link>
          </Button>
        }
      />
      {ok && <Flash code={ok} />}

      <div className="rounded-xl border border-brand-border bg-white overflow-hidden">
        {articles.length === 0 ? (
          <div className="p-10 text-center text-brand-text-secondary">
            Belum ada artikel.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-cream/50 border-b border-brand-border">
                <tr className="text-left text-xs uppercase tracking-wider text-brand-text-muted">
                  <th className="px-5 py-3 font-medium">Judul</th>
                  <th className="px-5 py-3 font-medium hidden md:table-cell">Kategori</th>
                  <th className="px-5 py-3 font-medium hidden lg:table-cell">Tanggal</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {articles.map((a) => (
                  <tr key={a.id} className="hover:bg-brand-cream/30">
                    <td className="px-5 py-4">
                      <p className="font-medium text-brand-text">{a.title}</p>
                      <p className="text-xs text-brand-text-muted line-clamp-1">{a.excerpt}</p>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell text-brand-text-secondary">
                      {CATEGORY_LABEL[a.category] ?? a.category}
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell text-brand-text-secondary">
                      {new Date(a.publishedAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-4">
                      {a.published ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Terbit
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-stone-100 text-stone-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="inline-flex items-center gap-1">
                        <Link
                          href={`/edukasi/${a.slug}`}
                          target="_blank"
                          className="inline-flex items-center justify-center h-8 w-8 rounded-md text-brand-text-secondary hover:bg-brand-cream hover:text-brand-primary"
                          aria-label="Lihat di situs"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/admin/articles/${a.id}`}
                          className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-brand-primary text-white text-xs font-medium hover:bg-brand-primary-light"
                        >
                          <Pencil className="h-3.5 w-3.5" /> Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

function Flash({ code }: { code: string }) {
  const m: Record<string, string> = {
    created: "Artikel berhasil ditambahkan.",
    updated: "Artikel berhasil diperbarui.",
    deleted: "Artikel berhasil dihapus.",
  };
  if (!m[code]) return null;
  return (
    <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
      ✓ {m[code]}
    </div>
  );
}
