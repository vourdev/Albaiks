import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ProductIllustration } from "@/components/ui/ProductIllustration";
import { ProductCard } from "@/components/product/ProductCard";
import {
  ProductOrderPanel,
  ProductTabs,
} from "@/components/product/ProductDetailClient";
import {
  getPublishedProducts,
  getProductBySlug,
  getOtherProducts,
  startingPrice,
} from "@/lib/products";
import { getSiteSettings } from "@/lib/settings";
import { cn, formatRupiah } from "@/lib/utils";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const products = await getPublishedProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };
  const settings = await getSiteSettings();
  const price = startingPrice(product);
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/produk/${product.slug}` },
    openGraph: {
      title: `${product.name} — ${settings.siteName}`,
      description: product.shortDescription,
      type: "website",
    },
    other: {
      "product:price:amount": price.toString(),
      "product:price:currency": "IDR",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const [product, settings] = await Promise.all([
    getProductBySlug(slug),
    getSiteSettings(),
  ]);
  if (!product) notFound();
  const others = await getOtherProducts(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.sku,
    description: product.shortDescription,
    category: product.category,
    brand: { "@type": "Brand", name: settings.siteName },
    offers: product.variants.map((v) => ({
      "@type": "Offer",
      name: v.label,
      price: v.price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    })),
  };

  const knownIllustrations = ["olive", "coconut", "ginger"] as const;
  const illustrationVariant = (knownIllustrations as readonly string[]).includes(
    product.image,
  )
    ? (product.image as (typeof knownIllustrations)[number])
    : "olive";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-brand-cream/40 border-b border-brand-border">
        <Container className="py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-brand-text-secondary">
            <Link href="/" className="hover:text-brand-primary">Beranda</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/produk" className="hover:text-brand-primary">Produk</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-text font-medium truncate">{product.name}</span>
          </nav>
        </Container>
      </div>

      <Section className="py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div
                className={cn(
                  "relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br border border-brand-border",
                  product.accent,
                )}
              >
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.labels.map((l) => (
                    <Badge key={l} variant="accent" className="shadow-sm">
                      {l}
                    </Badge>
                  ))}
                </div>
                <ProductIllustration variant={illustrationVariant} />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "aspect-square rounded-md border bg-gradient-to-br",
                      product.accent,
                      i === 0 ? "border-brand-primary" : "border-brand-border opacity-70",
                    )}
                  >
                    <ProductIllustration variant={illustrationVariant} className="scale-90" />
                  </div>
                ))}
              </div>
            </div>

            <ProductOrderPanel product={product} waNumber={settings.whatsappNumber} />
          </div>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16 bg-brand-surface border-y border-brand-border">
        <Container>
          <ProductTabs product={product} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-2">
                Produk Lainnya
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-brand-primary font-medium">
                Mungkin juga Anda suka
              </h2>
            </div>
            <Link
              href="/produk"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:gap-2 transition-all"
            >
              Lihat semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.slice(0, 3).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <p className="sr-only">
            Harga mulai dari {formatRupiah(startingPrice(product))}.
          </p>
        </Container>
      </Section>
    </>
  );
}
