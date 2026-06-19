import { Star, Quote } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

const testimonials = [
  {
    name: "Sari Wulandari",
    location: "Jakarta",
    product: "Extra Virgin Olive Oil",
    rating: 5,
    quote:
      "Sudah satu tahun rutin pakai EVOO Albaiks untuk dressing salad. Aromanya sangat segar dan terasa otentik. Kemasan rapi dan pengiriman selalu cepat.",
    initial: "SW",
  },
  {
    name: "Ahmad Hidayat",
    location: "Surabaya",
    product: "Virgin Coconut Oil",
    rating: 5,
    quote:
      "VCO-nya berkualitas, bening, dan tidak bau tengik. Cocok untuk masak dan masker rambut anak. Layanan via WA juga responsif sekali.",
    initial: "AH",
  },
  {
    name: "Nurhayati",
    location: "Yogyakarta",
    product: "Serbuk Jahe Merah",
    rating: 5,
    quote:
      "Jahe merahnya pedasnya pas, bikin badan hangat saat musim hujan. Tanpa gula tambahan jadi bisa diatur sesuai selera. Sudah repeat order 5 kali.",
    initial: "NR",
  },
];

export function Testimonials() {
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
              key={t.name}
              className="relative flex flex-col gap-4 rounded-[8px] bg-white border border-brand-border p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-5 right-5 h-7 w-7 text-brand-secondary/40" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-accent text-brand-accent"
                  />
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
