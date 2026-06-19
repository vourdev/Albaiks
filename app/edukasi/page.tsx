import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Container";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Edukasi Herbal",
  description:
    "Artikel edukasi tentang manfaat herbal, tips, resep, dan gaya hidup sehat dari Albaiks.",
  alternates: { canonical: "/edukasi" },
};

export default function EdukasiPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl mb-10 lg:mb-14">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-3">
            Edukasi Herbal
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-primary font-light leading-tight">
            Pengetahuan Alam<br />untuk Keluarga
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Tips, resep, dan informasi mendalam tentang khasiat herbal — ditulis
            agar mudah dipahami dan diterapkan.
          </p>
        </div>
        <BlogIndexClient articles={ARTICLES} />
      </Container>
    </Section>
  );
}
