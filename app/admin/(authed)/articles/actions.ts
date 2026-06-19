"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ArticleCategory } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type ArticleFormState = { error: string | null };

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseCategory(value: FormDataEntryValue | null): ArticleCategory {
  switch (value) {
    case "TIPS_HERBAL":
      return "TIPS_HERBAL";
    case "RESEP_CARA_PAKAI":
      return "RESEP_CARA_PAKAI";
    case "GAYA_HIDUP_SEHAT":
      return "GAYA_HIDUP_SEHAT";
    default:
      return "MANFAAT_PRODUK";
  }
}

function parseContent(
  formData: FormData,
): { heading: string; body: string }[] {
  const headings = formData.getAll("sectionHeading").map((v) => String(v).trim());
  const bodies = formData.getAll("sectionBody").map((v) => String(v).trim());
  const sections: { heading: string; body: string }[] = [];
  for (let i = 0; i < headings.length; i++) {
    if (!headings[i] && !bodies[i]) continue;
    sections.push({ heading: headings[i], body: bodies[i] });
  }
  return sections;
}

function revalidateAll() {
  revalidatePath("/", "layout");
  revalidatePath("/edukasi");
}

export async function createArticleAction(
  prevState: ArticleFormState,
  formData: FormData,
): Promise<ArticleFormState> {
  const title = String(formData.get("title") ?? "").trim();
  if (!title) return { error: "Judul wajib diisi." };

  const slugInput = String(formData.get("slug") ?? "").trim();
  const slug = slugInput ? slugify(slugInput) : slugify(title);
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  if (!excerpt) return { error: "Ringkasan wajib diisi." };

  const content = parseContent(formData);
  if (content.length === 0)
    return { error: "Minimal satu section konten wajib diisi." };

  const exists = await prisma.article.findUnique({ where: { slug } });
  if (exists) return { error: "Artikel dengan slug ini sudah ada." };

  const readingTime = parseInt(
    String(formData.get("readingTime") ?? "5"),
    10,
  );

  const created = await prisma.article.create({
    data: {
      slug,
      title,
      excerpt,
      category: parseCategory(formData.get("category")),
      readingTime: Number.isNaN(readingTime) ? 5 : Math.max(1, readingTime),
      accent: String(formData.get("accent") ?? "from-emerald-100 to-amber-50"),
      published: formData.get("published") === "on",
      content,
      publishedAt: new Date(),
    },
  });

  revalidateAll();
  revalidatePath(`/edukasi/${created.slug}`);
  redirect(`/admin/articles/${created.id}?ok=created`);
}

export async function updateArticleAction(
  id: string,
  prevState: ArticleFormState,
  formData: FormData,
): Promise<ArticleFormState> {
  const existing = await prisma.article.findUnique({ where: { id } });
  if (!existing) return { error: "Artikel tidak ditemukan." };

  const title = String(formData.get("title") ?? "").trim();
  if (!title) return { error: "Judul wajib diisi." };
  const slug = slugify(String(formData.get("slug") ?? "").trim() || title);
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  if (!excerpt) return { error: "Ringkasan wajib diisi." };

  const content = parseContent(formData);
  if (content.length === 0)
    return { error: "Minimal satu section konten wajib diisi." };

  const conflict = await prisma.article.findFirst({
    where: { AND: [{ id: { not: id } }, { slug }] },
  });
  if (conflict) return { error: "Artikel lain dengan slug ini sudah ada." };

  const readingTime = parseInt(
    String(formData.get("readingTime") ?? "5"),
    10,
  );

  await prisma.article.update({
    where: { id },
    data: {
      slug,
      title,
      excerpt,
      category: parseCategory(formData.get("category")),
      readingTime: Number.isNaN(readingTime) ? 5 : Math.max(1, readingTime),
      accent: String(formData.get("accent") ?? existing.accent),
      published: formData.get("published") === "on",
      content,
    },
  });

  revalidateAll();
  revalidatePath(`/edukasi/${existing.slug}`);
  if (existing.slug !== slug) revalidatePath(`/edukasi/${slug}`);
  redirect(`/admin/articles/${id}?ok=updated`);
}

export async function deleteArticleAction(id: string) {
  const article = await prisma.article.findUnique({ where: { id } });
  if (!article) redirect("/admin/articles");
  await prisma.article.delete({ where: { id } });
  revalidateAll();
  revalidatePath(`/edukasi/${article!.slug}`);
  redirect("/admin/articles?ok=deleted");
}
