import { prisma } from "./prisma";
import {
  type ArticleCategory as DbArticleCategory,
  type Article as DbArticle,
} from "@prisma/client";
import { cache } from "react";

export type ArticleCategory =
  | "Manfaat Produk"
  | "Tips Herbal"
  | "Resep & Cara Pakai"
  | "Gaya Hidup Sehat";

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  readingTime: number;
  publishedAt: string;
  accent: string;
  content: { heading: string; body: string }[];
};

export const ARTICLE_CATEGORY_LABELS: Record<DbArticleCategory, ArticleCategory> = {
  MANFAAT_PRODUK: "Manfaat Produk",
  TIPS_HERBAL: "Tips Herbal",
  RESEP_CARA_PAKAI: "Resep & Cara Pakai",
  GAYA_HIDUP_SEHAT: "Gaya Hidup Sehat",
};

export const ARTICLE_CATEGORY_VALUE_FROM_LABEL: Record<ArticleCategory, DbArticleCategory> = {
  "Manfaat Produk": "MANFAAT_PRODUK",
  "Tips Herbal": "TIPS_HERBAL",
  "Resep & Cara Pakai": "RESEP_CARA_PAKAI",
  "Gaya Hidup Sehat": "GAYA_HIDUP_SEHAT",
};

function mapArticle(a: DbArticle): Article {
  const raw = a.content;
  const content = Array.isArray(raw)
    ? (raw as { heading: string; body: string }[]).filter(
        (s) => s && typeof s.heading === "string" && typeof s.body === "string",
      )
    : [];
  return {
    id: a.id,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    category: ARTICLE_CATEGORY_LABELS[a.category],
    readingTime: a.readingTime,
    publishedAt: a.publishedAt.toISOString(),
    accent: a.accent,
    content,
  };
}

export const getPublishedArticles = cache(async (): Promise<Article[]> => {
  const rows = await prisma.article.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });
  return rows.map(mapArticle);
});

export const getArticleBySlug = cache(
  async (slug: string): Promise<Article | null> => {
    const row = await prisma.article.findUnique({ where: { slug } });
    if (!row || !row.published) return null;
    return mapArticle(row);
  },
);
