"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export type TestimonialFormState = { error: string | null };

function deriveInitial(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
}

function readForm(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const product = String(formData.get("product") ?? "").trim();
  const quote = String(formData.get("quote") ?? "").trim();
  const rating = Math.max(1, Math.min(5, parseInt(String(formData.get("rating") ?? "5"), 10) || 5));
  const featured = formData.get("featured") === "on";
  const initial = String(formData.get("initial") ?? "").trim().toUpperCase().slice(0, 3);
  return {
    name,
    location,
    product,
    quote,
    rating,
    featured,
    initial: initial || deriveInitial(name),
  };
}

export async function createTestimonialAction(
  prevState: TestimonialFormState,
  formData: FormData,
): Promise<TestimonialFormState> {
  const data = readForm(formData);
  if (!data.name || !data.quote)
    return { error: "Nama dan kutipan wajib diisi." };

  await prisma.testimonial.create({ data });
  revalidatePath("/", "layout");
  redirect("/admin/testimonials?ok=created");
}

export async function updateTestimonialAction(
  id: string,
  prevState: TestimonialFormState,
  formData: FormData,
): Promise<TestimonialFormState> {
  const data = readForm(formData);
  if (!data.name || !data.quote)
    return { error: "Nama dan kutipan wajib diisi." };

  await prisma.testimonial.update({ where: { id }, data });
  revalidatePath("/", "layout");
  redirect(`/admin/testimonials/${id}?ok=updated`);
}

export async function deleteTestimonialAction(id: string) {
  await prisma.testimonial.delete({ where: { id } });
  revalidatePath("/", "layout");
  redirect("/admin/testimonials?ok=deleted");
}
