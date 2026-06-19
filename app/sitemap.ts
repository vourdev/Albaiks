import type { MetadataRoute } from "next";
import { getPublishedProducts } from "@/lib/products";
import { getPublishedArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_URL;
  const staticPaths = [
    "",
    "/produk",
    "/edukasi",
    "/tentang",
    "/kontak",
    "/kebijakan-privasi",
    "/syarat-ketentuan",
  ];

  const [products, articles] = await Promise.all([
    getPublishedProducts(),
    getPublishedArticles(),
  ]);

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...products.map((p) => ({
      url: `${base}/produk/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...articles.map((a) => ({
      url: `${base}/edukasi/${a.slug}`,
      lastModified: new Date(a.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
