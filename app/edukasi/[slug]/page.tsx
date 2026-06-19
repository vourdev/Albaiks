import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, ArrowLeft } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/config";
import { cn } from "@/lib/utils";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/edukasi/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const others = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-brand-cream/40 border-b border-brand-border">
        <Container className="py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-brand-text-secondary"
          >
            <Link href="/" className="hover:text-brand-primary">Beranda</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/edukasi" className="hover:text-brand-primary">Edukasi</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-text font-medium truncate">{article.title}</span>
          </nav>
        </Container>
      </div>

      <article>
        <header className={cn("bg-gradient-to-br border-b border-brand-border", article.accent)}>
          <Container className="py-14 sm:py-20 max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-5">{article.category}</Badge>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-primary font-medium leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
              {article.excerpt}
            </p>
            <div className="mt-7 flex items-center justify-center gap-4 text-sm text-brand-text-secondary">
              <time>
                {new Date(article.publishedAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.readingTime} min baca
              </span>
            </div>
          </Container>
        </header>

        <Container className="max-w-3xl py-14 sm:py-16">
          {article.content.map((section) => (
            <section key={section.heading} className="mb-10 last:mb-0">
              <h2 className="font-display text-2xl sm:text-3xl text-brand-primary font-medium mb-3">
                {section.heading}
              </h2>
              <p className="text-base sm:text-lg text-brand-text leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}

          <div className="mt-12 p-7 rounded-[10px] bg-brand-primary text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-secondary mb-2">
              Tertarik mencoba?
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-medium mb-3">
              Temukan produk herbal Albaiks
            </h3>
            <p className="text-white/80 mb-5 max-w-md">
              Mulai dari minyak zaitun extra virgin, VCO murni, hingga serbuk
              jahe merah berkualitas.
            </p>
            <Button asChild variant="accent">
              <Link href="/produk">Lihat Produk →</Link>
            </Button>
          </div>

          <Link
            href="/edukasi"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke daftar artikel
          </Link>
        </Container>
      </article>

      {others.length > 0 && (
        <Section className="bg-brand-cream/50 border-t border-brand-border">
          <Container>
            <h2 className="font-display text-3xl text-brand-primary font-medium mb-8">
              Artikel Lainnya
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
