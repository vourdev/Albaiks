import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://albaiks.id"),
  title: {
    default: "Albaiks Herbal — Kebaikan Alam, Kesehatan Sejati",
    template: "%s — Albaiks Herbal",
  },
  description:
    "Produk herbal alami pilihan Albaiks: minyak zaitun extra virgin, virgin coconut oil, dan serbuk jahe merah. Pesan langsung via WhatsApp.",
  keywords: [
    "minyak zaitun",
    "VCO",
    "virgin coconut oil",
    "serbuk jahe merah",
    "herbal alami",
    "Albaiks",
  ],
  openGraph: {
    title: "Albaiks Herbal — Kebaikan Alam, Kesehatan Sejati",
    description:
      "Produk herbal alami premium. Pesan mudah via WhatsApp.",
    type: "website",
    locale: "id_ID",
    siteName: "Albaiks Herbal",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
