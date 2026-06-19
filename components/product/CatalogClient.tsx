"use client";

import { useState, useMemo } from "react";
import { PackageX } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { type Product, startingPrice } from "@/lib/products";
import { cn } from "@/lib/utils";

type SortKey = "newest" | "price-asc" | "price-desc";

const CATEGORIES = ["Semua", "Minyak Herbal", "Serbuk & Rempah"] as const;
type Category = (typeof CATEGORIES)[number];

export function CatalogClient({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<Category>("Semua");
  const [sort, setSort] = useState<SortKey>("newest");

  const filtered = useMemo(() => {
    const filteredByCategory =
      category === "Semua"
        ? products
        : products.filter((p) => p.category === category);
    const sorted = [...filteredByCategory];
    if (sort === "price-asc")
      sorted.sort((a, b) => startingPrice(a) - startingPrice(b));
    if (sort === "price-desc")
      sorted.sort((a, b) => startingPrice(b) - startingPrice(a));
    return sorted;
  }, [products, category, sort]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8 lg:mb-10">
        <div role="tablist" className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "px-4 h-10 rounded-full text-sm font-medium transition-colors border",
                category === c
                  ? "bg-brand-primary text-white border-brand-primary"
                  : "bg-white text-brand-text-secondary border-brand-border hover:border-brand-primary hover:text-brand-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-brand-text-secondary">
          Urutkan:
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="h-10 rounded-[6px] border border-brand-border bg-white px-3 text-sm font-medium text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-secondary"
          >
            <option value="newest">Terbaru</option>
            <option value="price-asc">Harga Terendah</option>
            <option value="price-desc">Harga Tertinggi</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-cream text-brand-primary-light mb-4">
            <PackageX className="h-7 w-7" />
          </div>
          <h3 className="font-display text-2xl text-brand-primary mb-1">
            Belum ada produk
          </h3>
          <p className="text-brand-text-secondary">
            Tidak ada produk pada kategori ini. Coba kategori lain.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
