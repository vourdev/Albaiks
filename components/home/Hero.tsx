import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { generateWhatsAppCSURL } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* decorative bg */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-bg to-brand-secondary/15" />
        <svg
          className="absolute -top-20 -right-20 w-[420px] h-[420px] opacity-25"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden
        >
          <path
            d="M200 50 Q260 100 280 180 Q260 280 200 320 Q140 280 120 180 Q140 100 200 50 Z"
            stroke="#2D6A4F"
            strokeWidth="1.2"
          />
          <path
            d="M200 60 L200 320 M120 180 L280 180"
            stroke="#74C69D"
            strokeWidth="0.8"
          />
        </svg>
        <svg
          className="absolute -bottom-24 -left-20 w-[360px] h-[360px] opacity-20"
          viewBox="0 0 360 360"
          fill="none"
          aria-hidden
        >
          <circle cx="180" cy="180" r="160" stroke="#C9973A" strokeWidth="1" />
          <circle cx="180" cy="180" r="110" stroke="#2D6A4F" strokeWidth="1" />
          <circle cx="180" cy="180" r="60" stroke="#74C69D" strokeWidth="1" />
        </svg>
      </div>

      <Container className="py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/40 bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-brand-primary-light tracking-wide">
              <Leaf className="h-3.5 w-3.5" />
              100% Bahan Alami & Bersertifikasi
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl text-brand-primary font-light leading-[1.05] tracking-tight">
              Kebaikan Alam,
              <br />
              <span className="text-brand-primary-light">Kesehatan Sejati.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-brand-text-secondary leading-relaxed">
              Produk herbal alami pilihan Albaiks — diolah dari bahan terbaik
              tanpa pengawet, demi kesehatan keluarga Indonesia.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="primary">
                <Link href="/produk">
                  Lihat Produk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={generateWhatsAppCSURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Hubungi Kami
                </a>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              <Stat label="Tahun Pengalaman" value="5+" />
              <Stat label="Pelanggan Puas" value="2,000+" />
              <Stat label="Provinsi Terjangkau" value="20+" />
            </dl>
          </div>

          <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-white via-brand-cream to-brand-secondary/25 shadow-2xl shadow-brand-primary/10 border border-white" />
              <div className="absolute inset-4 rounded-[12px] bg-white/70 backdrop-blur border border-brand-border overflow-hidden">
                <svg
                  viewBox="0 0 320 400"
                  className="w-full h-full"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#F4F0E8" />
                      <stop offset="1" stopColor="#FAFAF7" />
                    </linearGradient>
                  </defs>
                  <rect width="320" height="400" fill="url(#g1)" />
                  {/* three bottles */}
                  <g transform="translate(40 60)">
                    <rect x="10" y="40" width="60" height="140" rx="8" fill="#fff" stroke="#2D6A4F" />
                    <rect x="22" y="20" width="36" height="22" fill="#1A3C34" />
                    <rect x="14" y="80" width="52" height="60" rx="3" fill="#FAFAF7" stroke="#74C69D" />
                    <text x="40" y="105" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#1A3C34" fontWeight="500">ALBAIKS</text>
                    <text x="40" y="120" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#2D6A4F" letterSpacing="1.5">OLIVE</text>
                  </g>
                  <g transform="translate(125 90)">
                    <rect x="0" y="30" width="70" height="160" rx="10" fill="#fff" stroke="#C9973A" />
                    <rect x="14" y="10" width="42" height="22" fill="#1A3C34" />
                    <rect x="6" y="80" width="58" height="65" rx="3" fill="#F4F0E8" stroke="#C9973A" />
                    <text x="35" y="105" textAnchor="middle" fontFamily="serif" fontSize="10" fill="#1A3C34" fontWeight="500">ALBAIKS</text>
                    <text x="35" y="120" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#C9973A" letterSpacing="2">VCO</text>
                  </g>
                  <g transform="translate(215 75)">
                    <rect x="5" y="40" width="60" height="140" rx="3" fill="#F4F0E8" stroke="#C9973A" />
                    <rect x="5" y="40" width="60" height="20" fill="#1A3C34" />
                    <rect x="11" y="75" width="48" height="55" rx="3" fill="#FAFAF7" stroke="#2D6A4F" />
                    <text x="35" y="98" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#1A3C34" fontWeight="500">ALBAIKS</text>
                    <text x="35" y="112" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#C9973A" letterSpacing="1.5">JAHE</text>
                  </g>
                  {/* leaves */}
                  <g stroke="#2D6A4F" strokeWidth="1.2" fill="none" opacity="0.7">
                    <path d="M30 300 Q60 280 80 300 M50 305 L60 295" />
                    <path d="M250 320 Q280 305 295 320 M270 322 L280 312" />
                  </g>
                </svg>
              </div>

              <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-white rounded-[10px] border border-brand-border shadow-lg px-4 py-3 flex items-center gap-3 max-w-[200px]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-secondary/30 text-brand-primary">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-brand-text-muted leading-tight">Tersertifikasi</p>
                  <p className="text-sm font-semibold text-brand-primary leading-tight">BPOM & Halal</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-[10px] border border-brand-border shadow-lg px-4 py-3 flex items-center gap-3 max-w-[200px]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-brand-text-muted leading-tight">Cold-pressed</p>
                  <p className="text-sm font-semibold text-brand-primary leading-tight">Murni 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-brand-text-muted">{label}</dt>
      <dd className="mt-1 font-display text-3xl font-medium text-brand-primary">
        {value}
      </dd>
    </div>
  );
}
