import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { NotFoundView } from "@/components/NotFoundView";
import { getSiteSettings } from "@/lib/settings";
import { getPublishedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description:
    "Halaman yang Anda cari tidak ditemukan. Kembali ke beranda atau jelajahi katalog herbal Albaiks.",
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  // Render the full public chrome so visitors can still navigate.
  // Settings/products are fetched defensively — if the DB is unreachable
  // we still render a usable page.
  let waNumber = "";
  let popular: Awaited<ReturnType<typeof getPublishedProducts>> = [];
  let settings: Awaited<ReturnType<typeof getSiteSettings>> | null = null;
  try {
    [settings, popular] = await Promise.all([
      getSiteSettings(),
      getPublishedProducts(),
    ]);
    waNumber = settings.whatsappCSNumber;
  } catch {
    // swallow — page still renders with empty fallbacks
  }

  return (
    <>
      {settings && <Navbar waNumber={settings.whatsappCSNumber} />}
      <main className="flex-1">
        <NotFoundView popularProducts={popular} waNumber={waNumber} />
      </main>
      {settings && <Footer settings={settings} />}
      {settings && <WhatsAppFloat waNumber={settings.whatsappCSNumber} />}
    </>
  );
}
