"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { type Article } from "@/lib/articles";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "Semua",
  "Manfaat Produk",
  "Tips Herbal",
  "Resep & Cara Pakai",
  "Gaya Hidup Sehat",
] as const;

type Category = (typeof CATEGORIES)[number];

export function BlogIndexClient({ articles }: { articles: Article[] }) {
  const [category, setCategory] = useState<Category>("Semua");
  const filtered = useMemo(() => {
    if (category === "Semua") return articles;
    return articles.filter((a) => a.category === category);
  }, [articles, category]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8 lg:mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "px-4 h-10 rounded-full text-sm font-medium border transition-colors",
              category === c
                ? "bg-brand-primary text-white border-brand-primary"
                : "bg-white text-brand-text-secondary border-brand-border hover:border-brand-primary hover:text-brand-primary",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filtered.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
