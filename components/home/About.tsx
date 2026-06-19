import Link from "next/link";
import { ArrowRight, Award, Heart, Sprout } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";

export function About() {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-[12px] overflow-hidden bg-gradient-to-br from-brand-cream to-brand-secondary/30 border border-brand-border shadow-md">
              <svg viewBox="0 0 400 500" className="w-full h-full" aria-hidden>
                <rect width="400" height="500" fill="#F4F0E8" />
                <path
                  d="M0 350 Q100 320 200 340 Q300 360 400 330 L400 500 L0 500 Z"
                  fill="#2D6A4F"
                  opacity="0.15"
                />
                <path
                  d="M0 380 Q100 360 200 370 Q300 380 400 360 L400 500 L0 500 Z"
                  fill="#1A3C34"
                  opacity="0.18"
                />
                <g transform="translate(80 100)">
                  <circle cx="120" cy="120" r="100" fill="#fff" opacity="0.4" />
                  <path d="M120 60 C 90 80, 70 110, 80 160 C 90 200, 120 200, 120 200 C 120 200, 150 200, 160 160 C 170 110, 150 80, 120 60 Z" fill="#2D6A4F" />
                  <path d="M120 70 L 120 200 M 90 130 L 120 110 M 150 130 L 120 110 M 100 170 L 120 150 M 140 170 L 120 150" stroke="#fff" strokeWidth="2" fill="none" />
                </g>
                <g transform="translate(40 280)">
                  <ellipse cx="40" cy="20" rx="35" ry="20" fill="#74C69D" opacity="0.5" />
                  <ellipse cx="60" cy="40" rx="40" ry="22" fill="#2D6A4F" opacity="0.4" />
                </g>
                <g transform="translate(280 290)">
                  <ellipse cx="40" cy="20" rx="32" ry="18" fill="#C9973A" opacity="0.4" />
                  <ellipse cx="55" cy="40" rx="42" ry="20" fill="#74C69D" opacity="0.5" />
                </g>
              </svg>
            </div>
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white rounded-[10px] border border-brand-border shadow-lg p-5 max-w-[220px]">
              <div className="flex items-center gap-2 mb-1.5">
                <Award className="h-4 w-4 text-brand-accent" />
                <p className="text-xs font-medium text-brand-text-muted uppercase tracking-wide">Sejak 2021</p>
              </div>
              <p className="font-display text-2xl text-brand-primary font-medium leading-tight">
                Dipercaya 2,000+ keluarga
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-3">
              Tentang Albaiks
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-primary font-light leading-tight">
              Lahir dari kepercayaan pada
              <span className="text-brand-accent"> kebaikan alam.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-brand-text-secondary leading-relaxed">
              Albaiks berawal dari kerinduan akan herbal yang murni — diolah
              dengan hati, dari bahan-bahan terbaik bumi Indonesia. Kami percaya
              bahwa kesehatan terbaik datang dari alam.
            </p>

            <ul className="mt-7 space-y-3.5">
              {[
                { icon: Sprout, text: "Bahan baku langsung dari petani lokal terpercaya" },
                { icon: Heart, text: "Diproses dengan standar higienis & cinta" },
                { icon: Award, text: "Tersertifikasi BPOM, Halal MUI, & POM TR" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-secondary/30 text-brand-primary flex-shrink-0">
                    <item.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-brand-text leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/tentang"
              className="mt-8 inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all"
            >
              Selengkapnya tentang kami
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
