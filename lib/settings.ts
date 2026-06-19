import { prisma } from "./prisma";
import { cache } from "react";
import { type SiteSettings } from "@prisma/client";

const DEFAULT_SETTINGS: SiteSettings = {
  id: "singleton",
  siteName: "Albaiks Herbal",
  tagline: "Kebaikan Alam, Kesehatan Sejati.",
  description:
    "Produk herbal alami pilihan dari bahan terbaik untuk kesehatan keluarga Indonesia.",
  email: "halo@albaiks.id",
  city: "Jakarta, Indonesia",
  serviceHours: "Senin–Sabtu, 08.00 – 20.00 WIB",
  whatsappNumber: "6281234567890",
  whatsappCSNumber: "6281234567890",
  updatedAt: new Date(),
};

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  try {
    const settings = await prisma.siteSettings.upsert({
      where: { id: "singleton" },
      update: {},
      create: { id: "singleton" },
    });
    return settings;
  } catch {
    return DEFAULT_SETTINGS;
  }
});
