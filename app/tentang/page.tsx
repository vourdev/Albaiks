import type { Metadata } from "next";
import Link from "next/link";
import { Award, Heart, Sprout, Target, Eye, FlaskConical } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kisah Albaiks Herbal — brand herbal alami yang lahir dari kerinduan akan kemurnian. Visi, misi, dan proses produksi.",
  alternates: { canonical: "/tentang" },
};

export default function TentangPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-bg to-brand-secondary/20 border-b border-brand-border">
        <Container className="py-20 sm:py-28 lg:py-32 max-w-3xl text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-4">
            Tentang Albaiks
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-primary font-light leading-tight">
            Lahir dari kerinduan akan{" "}
            <span className="text-brand-accent">kemurnian.</span>
          </h1>
          <p className="mt-6 text-lg text-brand-text-secondary leading-relaxed">
            Albaiks adalah brand herbal alami Indonesia yang hadir untuk
            mengembalikan kebaikan alam ke meja keluarga — dalam bentuk yang murni,
            higienis, dan terpercaya.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto rounded-[12px] bg-gradient-to-br from-brand-cream to-brand-secondary/30 border border-brand-border shadow-md overflow-hidden">
                <svg viewBox="0 0 400 500" className="w-full h-full" aria-hidden>
                  <rect width="400" height="500" fill="#F4F0E8" />
                  <g transform="translate(80 120)">
                    <path d="M120 60 C 90 80, 70 110, 80 160 C 90 200, 120 200, 120 200 C 120 200, 150 200, 160 160 C 170 110, 150 80, 120 60 Z" fill="#2D6A4F" />
                    <path d="M120 70 L 120 200 M 90 130 L 120 110 M 150 130 L 120 110" stroke="#fff" strokeWidth="2" fill="none" />
                  </g>
                  <g stroke="#C9973A" strokeWidth="1.2" fill="none" opacity="0.6">
                    <path d="M40 380 Q 100 350 200 380 Q 300 410 360 380" />
                    <path d="M40 410 Q 100 380 200 410 Q 300 440 360 410" />
                  </g>
                </svg>
              </div>
            </div>

            <div>
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-3">
                Kisah Kami
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-brand-primary font-light leading-tight">
                Dari kebun ke rumah Anda
              </h2>
              <div className="mt-5 space-y-4 text-brand-text leading-relaxed">
                <p>
                  Albaiks lahir di tahun 2021 dari keprihatinan kami terhadap
                  banyaknya produk herbal di pasaran yang sudah tercampur dan
                  jauh dari kondisi alaminya. Kami percaya, kekayaan alam
                  Indonesia layak dihadirkan dalam bentuk paling murninya.
                </p>
                <p>
                  Berawal dari minyak zaitun dan VCO, kini Albaiks berkembang
                  dengan rangkaian produk herbal pilihan — semua diproses
                  dengan standar yang sama: bersih, jujur, dan penuh perhatian
                  pada detail.
                </p>
                <p>
                  Kami tidak hanya menjual produk, tapi membangun hubungan
                  personal dengan setiap pelanggan. Itulah sebabnya kami memilih
                  WhatsApp sebagai jembatan komunikasi langsung — sederhana,
                  hangat, dan manusiawi.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-cream/60 border-y border-brand-border">
        <Container>
          <SectionHeader
            eyebrow="Visi & Misi"
            title="Komitmen kami untuk Anda"
          />
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-[10px] border border-brand-border p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white mb-4">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-brand-primary font-medium mb-3">
                Visi
              </h3>
              <p className="text-brand-text leading-relaxed">
                Menjadi brand herbal Indonesia paling terpercaya yang menghadirkan
                kebaikan alam untuk kesehatan keluarga, melalui produk murni dan
                layanan personal.
              </p>
            </div>
            <div className="bg-white rounded-[10px] border border-brand-border p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white mb-4">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-brand-primary font-medium mb-3">
                Misi
              </h3>
              <ul className="space-y-2.5 text-brand-text leading-relaxed">
                <li>· Memproduksi herbal murni tanpa kompromi pada kualitas</li>
                <li>· Mendukung petani lokal sebagai mitra jangka panjang</li>
                <li>· Mengedukasi masyarakat tentang manfaat herbal alami</li>
                <li>· Menyediakan layanan personal & responsif untuk setiap pelanggan</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Proses Produksi"
            title="Setiap tetes melewati 4 tahap"
            description="Dari kebun hingga botol di tangan Anda, setiap proses dipantau dengan kontrol kualitas berlapis."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sprout,
                step: "01",
                title: "Pemilihan Bahan",
                description:
                  "Kerjasama langsung dengan petani lokal untuk bahan baku berkualitas premium.",
              },
              {
                icon: FlaskConical,
                step: "02",
                title: "Pengolahan",
                description:
                  "Cold-pressed tanpa pemanasan tinggi atau bahan kimia, menjaga nutrisi alami.",
              },
              {
                icon: Heart,
                step: "03",
                title: "Kontrol Kualitas",
                description:
                  "Setiap batch diuji kemurnian dan keamanannya sebelum dikemas.",
              },
              {
                icon: Award,
                step: "04",
                title: "Pengemasan",
                description:
                  "Kemasan kedap udara untuk menjaga kesegaran sampai di tangan Anda.",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="relative flex flex-col gap-4 rounded-[8px] bg-white border border-brand-border p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-brand-secondary/70 font-light leading-none">
                    {p.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cream text-brand-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl text-brand-primary font-medium">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-text-secondary leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-primary text-white">
        <Container className="text-center max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-light leading-tight">
            Sertifikasi & Kepercayaan
          </h2>
          <p className="mt-4 text-white/75 leading-relaxed">
            Albaiks tersertifikasi resmi sebagai jaminan kualitas dan keamanan
            untuk Anda dan keluarga.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
              BPOM Terdaftar
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
              Halal MUI
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
              POM TR
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
              ISO 22000
            </span>
          </div>
          <div className="mt-10">
            <Button asChild variant="accent" size="lg">
              <Link href="/produk">Lihat Produk Kami</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
