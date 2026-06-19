import { Star, Quote } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { type Testimonial } from "@/lib/testimonials";

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null;
  return (
    <Section className="bg-brand-cream/60 border-y border-brand-border">
      <Container>
        <SectionHeader
          eyebrow="Cerita Pelanggan"
          title="Dipercaya keluarga Indonesia"
          description="Cerita nyata dari pelanggan setia Albaiks di berbagai kota."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="relative flex flex-col gap-4 rounded-lg bg-white border border-brand-border p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-5 right-5 h-7 w-7 text-brand-secondary/40" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <blockquote className="text-brand-text leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-brand-border flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-white font-medium text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-brand-text leading-tight">{t.name}</p>
                  <p className="text-xs text-brand-text-muted mt-0.5">
                    {t.location} · {t.product}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
