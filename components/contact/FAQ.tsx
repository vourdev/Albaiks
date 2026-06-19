"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Bagaimana cara memesan produk Albaiks?",
    a: "Sangat mudah. Pilih produk di halaman katalog, tentukan varian dan jumlah, lalu klik tombol Pesan via WhatsApp. Pesan otomatis terkirim ke admin kami dan tinggal Anda konfirmasi alamat pengiriman.",
  },
  {
    q: "Apakah produk Albaiks bersertifikat BPOM dan Halal?",
    a: "Ya. Seluruh produk Albaiks tersertifikasi BPOM, Halal MUI, dan diolah dengan standar higienis. Nomor registrasi tertera pada kemasan setiap produk.",
  },
  {
    q: "Berapa lama waktu pengiriman?",
    a: "Untuk wilayah Jabodetabek 1–2 hari kerja. Untuk luar Jabodetabek 2–5 hari kerja, tergantung ekspedisi (JNE, J&T, atau SiCepat) yang Anda pilih.",
  },
  {
    q: "Apa metode pembayaran yang tersedia?",
    a: "Kami menerima transfer bank (BCA, Mandiri, BRI, BNI), e-wallet (GoPay, OVO, DANA, ShopeePay), serta QRIS. Detail pembayaran akan dikirim oleh admin saat konfirmasi pesanan.",
  },
  {
    q: "Apakah ada minimum pembelian?",
    a: "Tidak ada minimum pembelian. Anda bisa memesan 1 botol/saset untuk mencoba terlebih dahulu.",
  },
  {
    q: "Bagaimana cara penyimpanan produk yang baik?",
    a: "Simpan pada suhu ruang, hindari paparan sinar matahari langsung, dan tutup rapat setelah digunakan. Untuk VCO yang membeku saat suhu dingin — itu normal dan akan kembali cair pada suhu normal.",
  },
  {
    q: "Apakah bisa untuk reseller?",
    a: "Tentu. Kami membuka kerjasama reseller dengan harga khusus. Silakan hubungi WhatsApp kami untuk informasi paket reseller lebih lanjut.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQS.map((item, i) => {
        const expanded = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              "rounded-[8px] border bg-white transition-colors overflow-hidden",
              expanded ? "border-brand-primary" : "border-brand-border",
            )}
          >
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : i)}
              className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
            >
              <span className="font-medium text-brand-text leading-snug">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 flex-shrink-0 text-brand-primary transition-transform",
                  expanded && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-brand-text-secondary leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
