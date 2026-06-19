import { prisma } from "./prisma";
import {
  type ProductCategory as DbProductCategory,
  type Product as DbProduct,
  type ProductVariant as DbVariant,
} from "@prisma/client";
import { cache } from "react";

export type ProductCategory = "Minyak Herbal" | "Serbuk & Rempah";

export type ProductVariant = {
  id: string;
  label: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  variants: ProductVariant[];
  benefits: string[];
  composition: string;
  usage: string[];
  labels: string[];
  featured: boolean;
  image: string;
  accent: string;
};

export const CATEGORY_LABELS: Record<DbProductCategory, ProductCategory> = {
  MINYAK_HERBAL: "Minyak Herbal",
  SERBUK_REMPAH: "Serbuk & Rempah",
};

export const CATEGORY_VALUE_FROM_LABEL: Record<ProductCategory, DbProductCategory> = {
  "Minyak Herbal": "MINYAK_HERBAL",
  "Serbuk & Rempah": "SERBUK_REMPAH",
};

function mapProduct(
  p: DbProduct & { variants: DbVariant[] },
): Product {
  return {
    id: p.id,
    slug: p.slug,
    sku: p.sku,
    name: p.name,
    category: CATEGORY_LABELS[p.category],
    shortDescription: p.shortDescription,
    description: p.description,
    composition: p.composition,
    image: p.image,
    accent: p.accent,
    featured: p.featured,
    labels: p.labels,
    benefits: p.benefits,
    usage: p.usage,
    variants: p.variants
      .sort((a, b) => a.position - b.position)
      .map((v) => ({ id: v.id, label: v.label, price: v.price })),
  };
}

export const getPublishedProducts = cache(async (): Promise<Product[]> => {
  const rows = await prisma.product.findMany({
    where: { published: true },
    include: { variants: true },
    orderBy: [{ featured: "desc" }, { position: "asc" }, { createdAt: "asc" }],
  });
  return rows.map(mapProduct);
});

export const getProductBySlug = cache(
  async (slug: string): Promise<Product | null> => {
    const row = await prisma.product.findUnique({
      where: { slug },
      include: { variants: true },
    });
    if (!row || !row.published) return null;
    return mapProduct(row);
  },
);

export const getOtherProducts = cache(
  async (excludeSlug: string): Promise<Product[]> => {
    const rows = await prisma.product.findMany({
      where: { published: true, slug: { not: excludeSlug } },
      include: { variants: true },
      orderBy: [{ featured: "desc" }, { position: "asc" }],
      take: 6,
    });
    return rows.map(mapProduct);
  },
);

export function startingPrice(p: Product): number {
  if (p.variants.length === 0) return 0;
  return Math.min(...p.variants.map((v) => v.price));
}
