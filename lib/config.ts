export const SITE_URL = "https://albaiks.id";

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Produk" },
  { href: "/edukasi", label: "Edukasi" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
] as const;

export const ADMIN_NAV_LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/products", label: "Produk" },
  { href: "/admin/articles", label: "Edukasi" },
  { href: "/admin/testimonials", label: "Testimoni" },
  { href: "/admin/settings", label: "Pengaturan" },
] as const;
