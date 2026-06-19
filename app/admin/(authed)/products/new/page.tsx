import { PageHeader } from "@/components/admin/PageHeader";
import { ProductForm } from "@/components/admin/ProductForm";
import { createProductAction } from "../actions";

export default function NewProductPage() {
  return (
    <>
      <PageHeader
        title="Produk Baru"
        breadcrumb={[
          { label: "Admin", href: "/admin" },
          { label: "Produk", href: "/admin/products" },
          { label: "Baru" },
        ]}
      />
      <ProductForm action={createProductAction} mode="create" />
    </>
  );
}
