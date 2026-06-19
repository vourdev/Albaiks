"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ProductCategory } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type ProductFormState = { error: string | null };

function lines(input: FormDataEntryValue | null): string[] {
  if (input === null) return [];
  return String(input)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseCategory(value: FormDataEntryValue | null): ProductCategory {
  return value === "SERBUK_REMPAH" ? "SERBUK_REMPAH" : "MINYAK_HERBAL";
}

function parseVariants(formData: FormData): { label: string; price: number }[] {
  const labels = formData.getAll("variantLabel").map((v) => String(v).trim());
  const prices = formData.getAll("variantPrice").map((v) => String(v).trim());
  const variants: { label: string; price: number }[] = [];
  for (let i = 0; i < labels.length; i++) {
    if (!labels[i]) continue;
    const price = parseInt(prices[i] ?? "0", 10);
    if (Number.isNaN(price) || price < 0) continue;
    variants.push({ label: labels[i], price });
  }
  return variants;
}

function revalidateAll() {
  revalidatePath("/", "layout");
  revalidatePath("/produk");
}

export async function createProductAction(
  prevState: ProductFormState,
  formData: FormData,
): Promise<ProductFormState> {
  const name = String(formData.get("name") ?? "").trim();
  if (!name) return { error: "Nama produk wajib diisi." };

  const slugInput = String(formData.get("slug") ?? "").trim();
  const slug = slugInput ? slugify(slugInput) : slugify(name);
  const sku = String(formData.get("sku") ?? "").trim();
  if (!sku) return { error: "SKU wajib diisi." };

  const variants = parseVariants(formData);
  if (variants.length === 0) return { error: "Minimal satu varian wajib diisi." };

  const exists = await prisma.product.findFirst({
    where: { OR: [{ slug }, { sku }] },
  });
  if (exists) {
    return {
      error: `Produk dengan ${exists.slug === slug ? "slug" : "SKU"} ini sudah ada.`,
    };
  }

  const created = await prisma.product.create({
    data: {
      slug,
      sku,
      name,
      category: parseCategory(formData.get("category")),
      shortDescription: String(formData.get("shortDescription") ?? "").trim(),
      description: String(formData.get("description") ?? "").trim(),
      composition: String(formData.get("composition") ?? "").trim(),
      image: String(formData.get("image") ?? "olive").trim() || "olive",
      accent:
        String(formData.get("accent") ?? "").trim() ||
        "from-emerald-100 via-emerald-50 to-amber-50",
      featured: formData.get("featured") === "on",
      published: formData.get("published") === "on",
      labels: lines(formData.get("labels")),
      benefits: lines(formData.get("benefits")),
      usage: lines(formData.get("usage")),
      variants: {
        create: variants.map((v, i) => ({
          label: v.label,
          price: v.price,
          position: i,
        })),
      },
    },
  });

  revalidateAll();
  revalidatePath(`/produk/${created.slug}`);
  redirect(`/admin/products/${created.id}?ok=created`);
}

export async function updateProductAction(
  id: string,
  prevState: ProductFormState,
  formData: FormData,
): Promise<ProductFormState> {
  const existing = await prisma.product.findUnique({ where: { id } });
  if (!existing) return { error: "Produk tidak ditemukan." };

  const name = String(formData.get("name") ?? "").trim();
  if (!name) return { error: "Nama produk wajib diisi." };
  const slug = slugify(String(formData.get("slug") ?? "").trim() || name);
  const sku = String(formData.get("sku") ?? "").trim();
  if (!sku) return { error: "SKU wajib diisi." };

  const variants = parseVariants(formData);
  if (variants.length === 0) return { error: "Minimal satu varian wajib diisi." };

  const conflict = await prisma.product.findFirst({
    where: {
      AND: [{ id: { not: id } }, { OR: [{ slug }, { sku }] }],
    },
  });
  if (conflict) {
    return {
      error: `Produk lain dengan ${conflict.slug === slug ? "slug" : "SKU"} ini sudah ada.`,
    };
  }

  await prisma.$transaction([
    prisma.productVariant.deleteMany({ where: { productId: id } }),
    prisma.product.update({
      where: { id },
      data: {
        slug,
        sku,
        name,
        category: parseCategory(formData.get("category")),
        shortDescription: String(formData.get("shortDescription") ?? "").trim(),
        description: String(formData.get("description") ?? "").trim(),
        composition: String(formData.get("composition") ?? "").trim(),
        image: String(formData.get("image") ?? "olive").trim() || "olive",
        accent:
          String(formData.get("accent") ?? "").trim() ||
          "from-emerald-100 via-emerald-50 to-amber-50",
        featured: formData.get("featured") === "on",
        published: formData.get("published") === "on",
        labels: lines(formData.get("labels")),
        benefits: lines(formData.get("benefits")),
        usage: lines(formData.get("usage")),
        variants: {
          create: variants.map((v, i) => ({
            label: v.label,
            price: v.price,
            position: i,
          })),
        },
      },
    }),
  ]);

  revalidateAll();
  revalidatePath(`/produk/${existing.slug}`);
  if (existing.slug !== slug) revalidatePath(`/produk/${slug}`);
  redirect(`/admin/products/${id}?ok=updated`);
}

export async function deleteProductAction(id: string) {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) redirect("/admin/products");
  await prisma.product.delete({ where: { id } });
  revalidateAll();
  revalidatePath(`/produk/${product!.slug}`);
  redirect("/admin/products?ok=deleted");
}
