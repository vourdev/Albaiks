import Link from "next/link";
import {
  Package,
  Newspaper,
  MessageSquareQuote,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/auth";
import { PageHeader } from "@/components/admin/PageHeader";

export default async function AdminDashboard() {
  const [admin, productsCount, articlesCount, testimonialsCount, recentProducts, recentArticles] =
    await Promise.all([
      getCurrentAdmin(),
      prisma.product.count(),
      prisma.article.count(),
      prisma.testimonial.count(),
      prisma.product.findMany({
        orderBy: { updatedAt: "desc" },
        take: 4,
        select: {
          id: true,
          name: true,
          slug: true,
          category: true,
          published: true,
          updatedAt: true,
        },
      }),
      prisma.article.findMany({
        orderBy: { updatedAt: "desc" },
        take: 4,
        select: {
          id: true,
          title: true,
          slug: true,
          category: true,
          published: true,
          updatedAt: true,
        },
      }),
    ]);

  const stats = [
    {
      label: "Produk",
      value: productsCount,
      href: "/admin/products",
      icon: Package,
      color: "bg-emerald-50 text-emerald-700",
    },
    {
      label: "Artikel Edukasi",
      value: articlesCount,
      href: "/admin/articles",
      icon: Newspaper,
      color: "bg-amber-50 text-amber-700",
    },
    {
      label: "Testimoni",
      value: testimonialsCount,
      href: "/admin/testimonials",
      icon: MessageSquareQuote,
      color: "bg-sky-50 text-sky-700",
    },
  ];

  return (
    <>
      <PageHeader
        title={`Halo, ${admin?.name.split(" ")[0] ?? "Admin"} 👋`}
        description="Kelola konten website Albaiks Herbal dari satu panel."
      />

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="group flex items-start justify-between gap-3 p-5 rounded-xl border border-brand-border bg-white hover:border-brand-primary/40 hover:shadow-sm transition-all"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-brand-text-muted">
                {s.label}
              </p>
              <p className="font-display text-4xl text-brand-primary mt-1">{s.value}</p>
              <p className="mt-2 text-xs font-medium text-brand-primary-light inline-flex items-center gap-1">
                Kelola
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
            </div>
            <span className={`flex h-11 w-11 items-center justify-center rounded-full ${s.color}`}>
              <s.icon className="h-5 w-5" />
            </span>
          </Link>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-brand-border bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-2xl text-brand-primary font-medium">
                Produk Terbaru
              </h2>
            </div>
            <Link
              href="/admin/products/new"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-primary hover:text-brand-primary-light"
            >
              <Plus className="h-3.5 w-3.5" /> Tambah
            </Link>
          </div>
          {recentProducts.length === 0 ? (
            <p className="text-sm text-brand-text-muted py-6 text-center">
              Belum ada produk.
            </p>
          ) : (
            <ul className="divide-y divide-brand-border">
              {recentProducts.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/admin/products/${p.id}`}
                    className="flex items-center justify-between py-3 hover:bg-brand-cream/40 -mx-2 px-2 rounded-md transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-brand-text truncate">{p.name}</p>
                      <p className="text-xs text-brand-text-muted">
                        {p.category === "MINYAK_HERBAL" ? "Minyak Herbal" : "Serbuk & Rempah"}
                        {" · "}
                        {new Date(p.updatedAt).toLocaleDateString("id-ID")}
                      </p>
                    </div>
                    <StatusPill published={p.published} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl border border-brand-border bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display text-2xl text-brand-primary font-medium">
                Artikel Terbaru
              </h2>
            </div>
            <Link
              href="/admin/articles/new"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-primary hover:text-brand-primary-light"
            >
              <Plus className="h-3.5 w-3.5" /> Tambah
            </Link>
          </div>
          {recentArticles.length === 0 ? (
            <p className="text-sm text-brand-text-muted py-6 text-center">
              Belum ada artikel.
            </p>
          ) : (
            <ul className="divide-y divide-brand-border">
              {recentArticles.map((a) => (
                <li key={a.id}>
                  <Link
                    href={`/admin/articles/${a.id}`}
                    className="flex items-center justify-between py-3 hover:bg-brand-cream/40 -mx-2 px-2 rounded-md transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-brand-text truncate">{a.title}</p>
                      <p className="text-xs text-brand-text-muted">
                        {new Date(a.updatedAt).toLocaleDateString("id-ID")}
                      </p>
                    </div>
                    <StatusPill published={a.published} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

function StatusPill({ published }: { published: boolean }) {
  return published ? (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      Terbit
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-stone-100 text-stone-600">
      <span className="h-1.5 w-1.5 rounded-full bg-stone-400" />
      Draft
    </span>
  );
}
