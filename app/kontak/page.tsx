import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { FAQ } from "@/components/contact/FAQ";
import { generateWhatsAppCSURL } from "@/lib/whatsapp";
import { SITE, SERVICE_HOURS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Kontak & FAQ",
  description:
    "Hubungi tim Albaiks via WhatsApp atau email. Temukan jawaban atas pertanyaan umum di FAQ.",
  alternates: { canonical: "/kontak" },
};

export default function KontakPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-cream via-brand-bg to-brand-secondary/15 border-b border-brand-border">
        <Container className="py-20 sm:py-24 max-w-3xl text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-3">
            Hubungi Kami
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-primary font-light leading-tight">
            Kami siap membantu Anda
          </h1>
          <p className="mt-5 text-lg text-brand-text-secondary leading-relaxed">
            Punya pertanyaan tentang produk, pesanan, atau ingin menjadi reseller?
            Tim Albaiks siap melayani lewat WhatsApp.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="whatsapp">
              <a
                href={generateWhatsAppCSURL()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat WhatsApp Sekarang
              </a>
            </Button>
          </div>
        </Container>
      </section>

      <Section className="py-14">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: WhatsAppIcon,
                label: "WhatsApp",
                value: "+62 812-3456-7890",
                hint: "Respon cepat",
              },
              {
                icon: Mail,
                label: "Email",
                value: SITE.email,
                hint: "Untuk kerjasama",
              },
              {
                icon: MapPin,
                label: "Lokasi",
                value: SITE.city,
                hint: "Produksi & gudang",
              },
              {
                icon: Clock,
                label: "Jam Layanan",
                value: SERVICE_HOURS,
                hint: "Kecuali hari libur nasional",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="flex flex-col gap-3 rounded-[8px] border border-brand-border bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-brand-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-text-muted">
                    {c.label}
                  </p>
                  <p className="font-semibold text-brand-text mt-1">{c.value}</p>
                  <p className="text-xs text-brand-text-secondary mt-1">{c.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-cream/60 border-y border-brand-border">
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Diajukan"
            description="Jawaban singkat untuk pertanyaan paling umum dari pelanggan kami."
          />
          <div className="max-w-3xl mx-auto">
            <FAQ />
            <div className="mt-10 rounded-[10px] bg-brand-primary text-white p-6 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-6 w-6 text-brand-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Tidak menemukan jawaban?</p>
                  <p className="text-sm text-white/75 mt-0.5">
                    Tanyakan langsung kepada tim kami via WhatsApp.
                  </p>
                </div>
              </div>
              <Button asChild variant="whatsapp">
                <a
                  href={generateWhatsAppCSURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Tanya Kami
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
