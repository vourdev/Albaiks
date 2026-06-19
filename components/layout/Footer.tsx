import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { type SiteSettings } from "@prisma/client";

const productLinks = [
  { href: "/produk/minyak-zaitun-extra-virgin", label: "Minyak Zaitun" },
  { href: "/produk/minyak-kelapa-vco", label: "Minyak Kelapa (VCO)" },
  { href: "/produk/serbuk-jahe-merah", label: "Serbuk Jahe Merah" },
  { href: "/produk", label: "Semua Produk" },
];

const companyLinks = [
  { href: "/tentang", label: "Tentang Albaiks" },
  { href: "/edukasi", label: "Edukasi Herbal" },
  { href: "/kontak", label: "Kontak & FAQ" },
];

const legalLinks = [
  { href: "/kebijakan-privasi", label: "Kebijakan Privasi" },
  { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
];

function formatPhone(wa: string) {
  // wa is like 6281234567890 → +62 812-3456-7890
  if (!wa) return "";
  const country = wa.startsWith("62") ? "+62" : "+";
  const rest = wa.startsWith("62") ? wa.slice(2) : wa;
  const chunks = rest.match(/(\d{3,4})(\d{3,4})(\d{3,4})/);
  return chunks ? `${country} ${chunks[1]}-${chunks[2]}-${chunks[3]}` : `${country} ${rest}`;
}

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="bg-brand-primary text-white mt-auto">
      <Container className="py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Logo tone="light" className="text-white" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              {settings.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="Instagram Albaiks" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-accent transition-colors">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook Albaiks" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-accent transition-colors">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="TikTok Albaiks" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-accent transition-colors">
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-brand-secondary font-semibold mb-4">
              Produk
            </h4>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-brand-secondary font-semibold mb-4">
              Perusahaan
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-brand-secondary font-semibold mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <WhatsAppIcon className="h-4 w-4 mt-0.5 shrink-0 text-brand-secondary" />
                <span>{formatPhone(settings.whatsappCSNumber)}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-secondary" />
                <span>{settings.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-secondary" />
                <span>{settings.city}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-brand-secondary" />
                <span>{settings.serviceHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {settings.siteName}. Seluruh hak cipta dilindungi.
          </p>
          <p className="flex items-center gap-3">
            <span className="inline-block px-2 py-1 rounded-sm bg-white/10 border border-white/15">
              BPOM Terdaftar
            </span>
            <span className="inline-block px-2 py-1 rounded-sm bg-white/10 border border-white/15">
              Halal MUI
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
