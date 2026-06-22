import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/PageHeader";
import { ProductForm } from "@/components/admin/ProductForm";
import { ProductImageManager } from "@/components/admin/ProductImageManager";
import { updateProductAction, deleteProductAction } from "../actions";

export default async function EditProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ ok?: string }>;
}) {
  const { id } = await params;
  const { ok } = await searchParams;

  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      variants: { orderBy: { position: "asc" } },
      images: { orderBy: { position: "asc" } },
    },
  });
  if (!product) notFound();

  const action = updateProductAction.bind(null, id);
  const del = deleteProductAction.bind(null, id);

  return (
    <>
      <PageHeader
        title="Edit Produk"
        description={product.name}
        breadcrumb={[
          { label: "Admin", href: "/admin" },
          { label: "Produk", href: "/admin/products" },
          { label: product.name },
        ]}
      />
      {ok === "updated" && (
        <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
          ✓ Perubahan berhasil disimpan.
        </div>
      )}
      {ok === "created" && (
        <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
          ✓ Produk berhasil dibuat. Lanjutkan dengan mengunggah foto produk di bawah.
        </div>
      )}
      <ProductForm
        mode="edit"
        action={action}
        deleteAction={del}
        values={{
          id: product.id,
          slug: product.slug,
          sku: product.sku,
          name: product.name,
          category: product.category,
          shortDescription: product.shortDescription,
          description: product.description,
          composition: product.composition,
          image: product.image,
          accent: product.accent,
          featured: product.featured,
          published: product.published,
          labels: product.labels,
          benefits: product.benefits,
          usage: product.usage,
          variants: product.variants.map((v) => ({
            label: v.label,
            price: v.price,
          })),
        }}
      />
      <div className="mt-7">
        <ProductImageManager
          productId={product.id}
          images={product.images.map((i) => ({
            id: i.id,
            url: i.url,
            alt: i.alt,
          }))}
        />
      </div>
    </>
  );
}
