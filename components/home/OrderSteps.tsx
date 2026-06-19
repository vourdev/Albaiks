import { PackageSearch, ListChecks, MessageSquareText, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { generateWhatsAppCSURL } from "@/lib/whatsapp";

const steps = [
  {
    n: "01",
    icon: PackageSearch,
    title: "Pilih Produk",
    description: "Jelajahi katalog dan temukan produk herbal yang paling sesuai dengan kebutuhan Anda.",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Tentukan Jumlah",
    description: "Pilih varian dan tentukan jumlah pesanan. Tanpa keranjang, tanpa form panjang.",
  },
  {
    n: "03",
    icon: MessageSquareText,
    title: "Pesan via WhatsApp",
    description: "Klik tombol pesan, pesanan otomatis terkirim ke WhatsApp kami untuk diproses langsung.",
  },
];

export function OrderSteps({ waNumber }: { waNumber: string }) {
  return (
    <Section className="relative overflow-hidden bg-brand-primary text-white">
      <svg
        className="absolute -top-20 -right-20 w-[400px] h-[400px] opacity-10"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden
      >
        <circle cx="200" cy="200" r="180" stroke="#74C69D" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" stroke="#74C69D" strokeWidth="1" />
        <circle cx="200" cy="200" r="60" stroke="#74C69D" strokeWidth="1" />
      </svg>

      <Container className="relative">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-secondary mb-3">
            Cara Pemesanan
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight">
            Tiga langkah mudah,<br />pesanan langsung diproses.
          </h2>
          <p className="mt-4 text-base text-white/75 leading-relaxed">
            Belanja herbal kini sederhana. Tanpa proses checkout berbelit, langsung
            komunikasi personal lewat WhatsApp seperti pesan di toko kenalan.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative flex flex-col gap-4 rounded-[10px] border border-white/15 bg-white/[0.04] backdrop-blur p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-brand-secondary/80 font-light leading-none">
                  {s.n}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-secondary/20 text-brand-secondary">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl text-white font-medium">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {s.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-secondary/60" />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" variant="whatsapp">
            <a
              href={generateWhatsAppCSURL(waNumber)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Mulai Pesan Sekarang
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
