import Link from "next/link";
import {
  ArrowRight,
  Home,
  Package,
  Newspaper,
  Mail,
} from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { generateWhatsAppCSURL } from "@/lib/whatsapp";
import { type Product } from "@/lib/products";

const QUICK_LINKS = [
  {
    href: "/",
    label: "Beranda",
    description: "Mulai dari halaman utama",
    icon: Home,
  },
  {
    href: "/produk",
    label: "Katalog Produk",
    description: "Semua produk herbal kami",
    icon: Package,
  },
  {
    href: "/edukasi",
    label: "Edukasi Herbal",
    description: "Artikel & tips kesehatan",
    icon: Newspaper,
  },
  {
    href: "/kontak",
    label: "Kontak",
    description: "Hubungi tim Albaiks",
    icon: Mail,
  },
];

export function NotFoundView({
  popularProducts = [],
  waNumber,
}: {
  popularProducts?: Product[];
  waNumber?: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-cream via-brand-bg to-brand-secondary/15" />

        {/* botanical accents */}
        <svg
          className="absolute -top-10 -right-10 w-[420px] h-[420px] opacity-20 hidden sm:block"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden
        >
          <path
            d="M200 60 C 150 90, 110 140, 130 220 C 150 290, 200 300, 200 300 C 200 300, 250 290, 270 220 C 290 140, 250 90, 200 60 Z"
            stroke="#2D6A4F"
            strokeWidth="1.2"
          />
          <path
            d="M200 70 L200 290 M140 180 L200 150 M260 180 L200 150 M160 240 L200 210 M240 240 L200 210"
            stroke="#74C69D"
            strokeWidth="0.9"
          />
        </svg>
        <svg
          className="absolute -bottom-16 -left-16 w-[360px] h-[360px] opacity-20 hidden sm:block"
          viewBox="0 0 360 360"
          fill="none"
          aria-hidden
        >
          <circle cx="180" cy="180" r="160" stroke="#C9973A" strokeWidth="1" />
          <circle cx="180" cy="180" r="110" stroke="#2D6A4F" strokeWidth="1" />
          <circle cx="180" cy="180" r="60" stroke="#74C69D" strokeWidth="1" />
        </svg>

        <Container className="py-20 sm:py-28 lg:py-32 text-center relative">
          {/* large 404 mark */}
          <div className="relative inline-block">
            <span
              className="font-display text-[140px] sm:text-[180px] lg:text-[220px] leading-none text-brand-primary/10 font-light tracking-tighter select-none"
              aria-hidden
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 80 80"
                className="w-16 h-16 sm:w-20 sm:h-20 text-brand-primary-light"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M40 12 C 26 22, 18 38, 24 56 C 30 68, 40 70, 40 70 C 40 70, 50 68, 56 56 C 62 38, 54 22, 40 12 Z" />
                <path d="M40 18 L 40 68 M 26 40 L 40 34 M 54 40 L 40 34 M 30 54 L 40 48 M 50 54 L 40 48" />
              </svg>
            </div>
          </div>

          <span className="inline-block mt-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light">
            Halaman tidak ditemukan
          </span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-brand-primary font-light leading-tight max-w-2xl mx-auto">
            Sepertinya halaman ini sudah berpindah.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-text-secondary leading-relaxed max-w-xl mx-auto">
            Maaf, halaman yang Anda tuju tidak ditemukan. Mungkin URL salah atau
            halaman sudah dihapus. Mari kami antar ke tempat yang Anda cari.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="primary">
              <Link href="/">
                <Home className="h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/produk">
                Lihat Produk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            {waNumber && (
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={generateWhatsAppCSURL(waNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Hubungi Kami
                </a>
              </Button>
            )}
          </div>
        </Container>
      </section>

      <Section className="bg-brand-cream/60 border-y border-brand-border py-14 sm:py-16">
        <Container>
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-2">
              Tautan Cepat
            </span>
            <h2 className="font-display text-3xl text-brand-primary font-medium">
              Mungkin Anda mencari ini
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col gap-3 rounded-xl border border-brand-border bg-white p-5 hover:border-brand-primary/40 hover:shadow-sm transition-all"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <link.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-brand-text text-sm sm:text-base">
                    {link.label}
                  </p>
                  <p className="text-xs text-brand-text-secondary mt-0.5">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-brand-primary-light mt-auto transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {popularProducts.length > 0 && (
        <Section className="py-14 sm:py-20">
          <Container>
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-2">
                  Produk Populer
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-brand-primary font-medium">
                  Coba lihat produk kami
                </h2>
              </div>
              <Link
                href="/produk"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:gap-2 transition-all"
              >
                Semua produk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {popularProducts.slice(0, 3).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
