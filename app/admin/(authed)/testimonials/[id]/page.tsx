import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/PageHeader";
import { TestimonialForm } from "@/components/admin/TestimonialForm";
import { updateTestimonialAction, deleteTestimonialAction } from "../actions";

export default async function EditTestimonialPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ ok?: string }>;
}) {
  const { id } = await params;
  const { ok } = await searchParams;
  const t = await prisma.testimonial.findUnique({ where: { id } });
  if (!t) notFound();

  const action = updateTestimonialAction.bind(null, id);
  const del = deleteTestimonialAction.bind(null, id);

  return (
    <>
      <PageHeader
        title="Edit Testimoni"
        description={t.name}
        breadcrumb={[
          { label: "Admin", href: "/admin" },
          { label: "Testimoni", href: "/admin/testimonials" },
          { label: t.name },
        ]}
      />
      {ok === "updated" && (
        <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
          ✓ Perubahan tersimpan.
        </div>
      )}
      <TestimonialForm
        mode="edit"
        action={action}
        deleteAction={del}
        values={{
          name: t.name,
          location: t.location,
          product: t.product,
          quote: t.quote,
          rating: t.rating,
          initial: t.initial,
          featured: t.featured,
        }}
      />
    </>
  );
}
