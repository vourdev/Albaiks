import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { ARTICLES } from "@/lib/articles";
import { SITE } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPaths = [
    "",
    "/produk",
    "/edukasi",
    "/tentang",
    "/kontak",
    "/kebijakan-privasi",
    "/syarat-ketentuan",
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${base}/produk/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...ARTICLES.map((a) => ({
      url: `${base}/edukasi/${a.slug}`,
      lastModified: new Date(a.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
