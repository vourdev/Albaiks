import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { getSiteSettings } from "@/lib/settings";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  return (
    <>
      <Navbar waNumber={settings.whatsappCSNumber} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
      <WhatsAppFloat waNumber={settings.whatsappCSNumber} />
    </>
  );
}
