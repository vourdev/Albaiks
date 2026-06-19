import { PageHeader } from "@/components/admin/PageHeader";
import { TestimonialForm } from "@/components/admin/TestimonialForm";
import { createTestimonialAction } from "../actions";

export default function NewTestimonialPage() {
  return (
    <>
      <PageHeader
        title="Testimoni Baru"
        breadcrumb={[
          { label: "Admin", href: "/admin" },
          { label: "Testimoni", href: "/admin/testimonials" },
          { label: "Baru" },
        ]}
      />
      <TestimonialForm action={createTestimonialAction} mode="create" />
    </>
  );
}
