import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS } from "@/lib/products";

export function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 3);
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Produk Unggulan"
          title="Pilihan Terbaik untuk Anda"
          description="Tiga produk andalan Albaiks yang paling dicari, diolah secara higienis dari bahan herbal pilihan."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all"
          >
            Lihat Semua Produk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
