import { Leaf, ShieldCheck, Sparkles, FlaskConical } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";

const features = [
  {
    icon: Leaf,
    title: "100% Alami",
    description:
      "Diolah dari bahan herbal pilihan tanpa campuran zat sintetis, sesuai cara alam.",
  },
  {
    icon: ShieldCheck,
    title: "Tanpa Pengawet",
    description:
      "Bebas pengawet, pewarna, dan perasa buatan — kemurnian setiap tetes terjaga.",
  },
  {
    icon: FlaskConical,
    title: "Diproses Higienis",
    description:
      "Produksi dengan standar kebersihan tinggi dan kontrol kualitas berlapis.",
  },
  {
    icon: Sparkles,
    title: "Bersertifikasi",
    description:
      "Terdaftar BPOM dan tersertifikasi Halal MUI sebagai jaminan kualitas Anda.",
  },
];

export function Features() {
  return (
    <Section className="bg-brand-cream/60 border-y border-brand-border">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-start gap-4 p-6 bg-white/60 rounded-[8px] border border-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl text-brand-primary font-medium">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm text-brand-text-secondary leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
