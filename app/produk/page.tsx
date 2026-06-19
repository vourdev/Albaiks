import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { CatalogClient } from "@/components/product/CatalogClient";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Katalog Produk Herbal",
  description:
    "Jelajahi katalog lengkap produk herbal Albaiks — minyak zaitun extra virgin, VCO, dan serbuk jahe merah pilihan.",
  alternates: { canonical: "/produk" },
};

export default function ProdukPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl mb-10 lg:mb-14">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-3">
            Katalog Produk
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-primary font-light leading-tight">
            Pilihan Herbal Murni dari Albaiks
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Setiap produk diolah dengan standar kualitas yang sama: bahan
            terbaik, proses higienis, dan kemurnian terjaga sampai ke tangan Anda.
          </p>
        </div>
        <CatalogClient products={PRODUCTS} />
      </Container>
    </Section>
  );
}
