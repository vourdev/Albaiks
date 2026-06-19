import { WHATSAPP_NUMBER, WHATSAPP_CS_NUMBER } from "./config";

type OrderParams = {
  productName: string;
  variant: string;
  quantity: number;
  waNumber?: string;
};

export function generateWhatsAppOrderURL({
  productName,
  variant,
  quantity,
  waNumber = WHATSAPP_NUMBER,
}: OrderParams): string {
  const message = `Halo Albaiks! 🌿\n\nSaya ingin memesan produk berikut:\n\n📦 *Produk:* ${productName}\n📐 *Varian:* ${variant}\n🔢 *Jumlah:* ${quantity} pcs\n\nMohon informasi lebih lanjut mengenai:\n- Total harga\n- Estimasi pengiriman ke [kota saya]\n- Cara pembayaran\n\nTerima kasih!`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppInquiryURL(
  productName: string,
  waNumber: string = WHATSAPP_NUMBER,
): string {
  const message = `Halo Albaiks! 🌿\n\nSaya ingin bertanya tentang produk:\n📦 *Produk:* ${productName}\n\n[Pertanyaan saya...]`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

export function generateWhatsAppCSURL(
  message = "Halo Albaiks! 🌿 Saya ingin bertanya seputar produk dan pemesanan.",
): string {
  return `https://wa.me/${WHATSAPP_CS_NUMBER}?text=${encodeURIComponent(message)}`;
}
