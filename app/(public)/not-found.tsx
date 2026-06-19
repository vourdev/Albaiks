import type { Metadata } from "next";
import { NotFoundView } from "@/components/NotFoundView";
import { getSiteSettings } from "@/lib/settings";
import { getPublishedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description:
    "Halaman yang Anda cari tidak ditemukan. Kembali ke beranda atau jelajahi katalog herbal Albaiks.",
  robots: { index: false, follow: true },
};

export default async function PublicNotFound() {
  // The (public) layout already renders Navbar/Footer/WhatsAppFloat.
  // We only need to render the inner view.
  let popular: Awaited<ReturnType<typeof getPublishedProducts>> = [];
  let waNumber = "";
  try {
    const [settings, products] = await Promise.all([
      getSiteSettings(),
      getPublishedProducts(),
    ]);
    waNumber = settings.whatsappCSNumber;
    popular = products;
  } catch {
    /* render with empty fallbacks */
  }
  return <NotFoundView popularProducts={popular} waNumber={waNumber} />;
}
