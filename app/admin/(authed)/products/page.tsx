import Link from "next/link";
import { Plus, Pencil, Eye } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/admin/PageHeader";
import { formatRupiah } from "@/lib/utils";

export default async function ProductsListPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  const { ok } = await searchParams;
  const products = await prisma.product.findMany({
    include: { variants: { orderBy: { position: "asc" } } },
    orderBy: [{ featured: "desc" }, { position: "asc" }, { createdAt: "asc" }],
  });

  return (
    <>
      <PageHeader
        title="Produk"
        description="Kelola katalog produk herbal yang tampil di website."
        action={
          <Button asChild size="md" variant="primary">
            <Link href="/admin/products/new">
              <Plus className="h-4 w-4" /> Tambah Produk
            </Link>
          </Button>
        }
      />

      {ok && <FlashMessage code={ok} />}

      <div className="rounded-xl border border-brand-border bg-white overflow-hidden">
        {products.length === 0 ? (
          <div className="p-10 text-center text-brand-text-secondary">
            Belum ada produk. Klik &quot;Tambah Produk&quot; untuk memulai.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-cream/50 border-b border-brand-border">
                <tr className="text-left text-xs uppercase tracking-wider text-brand-text-muted">
                  <th className="px-5 py-3 font-medium">Produk</th>
                  <th className="px-5 py-3 font-medium hidden md:table-cell">Kategori</th>
                  <th className="px-5 py-3 font-medium hidden lg:table-cell">Mulai dari</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {products.map((p) => {
                  const startingPrice =
                    p.variants.length > 0
                      ? Math.min(...p.variants.map((v) => v.price))
                      : 0;
                  return (
                    <tr key={p.id} className="hover:bg-brand-cream/30">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="hidden sm:flex h-10 w-10 rounded-md bg-brand-cream items-center justify-center text-brand-primary font-display text-lg">
                            {p.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-brand-text truncate">{p.name}</p>
                            <p className="text-xs text-brand-text-muted">
                              SKU: {p.sku}
                              {p.featured && (
                                <span className="ml-2 inline-block px-1.5 py-0.5 rounded-sm bg-brand-accent/15 text-brand-accent text-[10px] font-medium">
                                  UNGGULAN
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 hidden md:table-cell text-brand-text-secondary">
                        {p.category === "MINYAK_HERBAL" ? "Minyak Herbal" : "Serbuk & Rempah"}
                      </td>
                      <td className="px-5 py-4 hidden lg:table-cell text-brand-text">
                        {formatRupiah(startingPrice)}
                      </td>
                      <td className="px-5 py-4">
                        {p.published ? (
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
                            href={`/produk/${p.slug}`}
                            target="_blank"
                            className="inline-flex items-center justify-center h-8 w-8 rounded-md text-brand-text-secondary hover:bg-brand-cream hover:text-brand-primary"
                            aria-label="Lihat di situs"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>
                          <Link
                            href={`/admin/products/${p.id}`}
                            className="inline-flex items-center gap-1.5 h-8 px-3 rounded-md bg-brand-primary text-white text-xs font-medium hover:bg-brand-primary-light"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                            Edit
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

function FlashMessage({ code }: { code: string }) {
  const messages: Record<string, string> = {
    created: "Produk berhasil ditambahkan.",
    updated: "Produk berhasil diperbarui.",
    deleted: "Produk berhasil dihapus.",
  };
  const msg = messages[code];
  if (!msg) return null;
  return (
    <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
      ✓ {msg}
    </div>
  );
}
