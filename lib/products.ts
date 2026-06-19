export type ProductVariant = {
  label: string;
  price: number;
};

export type Product = {
  slug: string;
  sku: string;
  name: string;
  category: "Minyak Herbal" | "Serbuk & Rempah";
  shortDescription: string;
  description: string;
  variants: ProductVariant[];
  benefits: string[];
  composition: string;
  usage: string[];
  labels: string[];
  featured?: boolean;
  image: string;
  accent: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "minyak-zaitun-extra-virgin",
    sku: "ALB-OLV-001",
    name: "Albaiks Extra Virgin Olive Oil",
    category: "Minyak Herbal",
    shortDescription:
      "Minyak zaitun murni cold-pressed dari buah zaitun pilihan, kaya antioksidan dan omega-9.",
    description:
      "Diperas dingin (cold-pressed) tanpa bahan kimia untuk menjaga kualitas dan aroma alami buah zaitun. Memiliki tingkat keasaman rendah (<0.5%) dan rasa lembut dengan sentuhan buah yang segar. Cocok dikonsumsi langsung, sebagai dressing, hingga perawatan kulit dan rambut.",
    variants: [
      { label: "100ml", price: 65000 },
      { label: "250ml", price: 140000 },
      { label: "500ml", price: 250000 },
    ],
    benefits: [
      "Menjaga kesehatan jantung & menurunkan kolesterol jahat",
      "Anti-inflamasi alami dari kandungan polifenol",
      "Pelembap kulit alami, ideal untuk kulit kering",
      "Mendukung pencernaan & metabolisme tubuh",
      "Sumber antioksidan untuk melawan radikal bebas",
    ],
    composition: "100% Olea europaea (Olive) Fruit Oil",
    usage: [
      "Konsumsi 1–2 sendok makan per hari, langsung atau campurkan ke makanan.",
      "Gunakan sebagai dressing salad atau finishing minyak masakan (hindari memasak dengan suhu tinggi).",
      "Oleskan tipis ke kulit sebagai pelembap alami sebelum tidur.",
    ],
    labels: ["Terlaris", "Cold-Pressed"],
    featured: true,
    image: "olive",
    accent: "from-emerald-100 via-emerald-50 to-amber-50",
  },
  {
    slug: "minyak-kelapa-vco",
    sku: "ALB-VCO-001",
    name: "Albaiks Virgin Coconut Oil (VCO)",
    category: "Minyak Herbal",
    shortDescription:
      "Minyak kelapa perawan cold-pressed tanpa pemanasan, kaya asam laurat dan MCT alami.",
    description:
      "VCO Albaiks dibuat dari santan kelapa segar pilihan melalui proses fermentasi alami tanpa pemanasan. Hasilnya minyak yang jernih, beraroma kelapa lembut, dan kaya MCT (Medium Chain Triglycerides) yang mudah diserap tubuh.",
    variants: [
      { label: "150ml", price: 45000 },
      { label: "300ml", price: 80000 },
      { label: "600ml", price: 145000 },
    ],
    benefits: [
      "Meningkatkan daya tahan tubuh dengan asam laurat alami",
      "Sumber energi cepat dari kandungan MCT",
      "Antijamur & antibakteri alami untuk kulit sensitif",
      "Perawatan rambut: kilau & mengurangi rambut bercabang",
      "Pelembap kulit dan bibir multi-fungsi",
    ],
    composition: "100% Cocos nucifera (Coconut) Oil",
    usage: [
      "Konsumsi 1–3 sendok makan per hari, langsung atau campur minuman hangat.",
      "Gunakan sebagai pengganti minyak goreng sehat (titik asap ±177°C).",
      "Sebagai masker rambut: oleskan, diamkan 30 menit, lalu keramas.",
    ],
    labels: ["VCO", "Cold-Pressed", "Multiguna"],
    featured: true,
    image: "coconut",
    accent: "from-amber-50 via-stone-50 to-emerald-50",
  },
  {
    slug: "serbuk-jahe-merah",
    sku: "ALB-JHM-001",
    name: "Albaiks Serbuk Jahe Merah",
    category: "Serbuk & Rempah",
    shortDescription:
      "Serbuk jahe merah murni tanpa campuran dari jahe merah segar pilihan, diproses higienis.",
    description:
      "Dibuat dari jahe merah segar yang dikeringkan dengan suhu rendah dan digiling halus untuk menjaga senyawa aktif gingerol dan shogaol. Tidak menggunakan gula tambahan, pengawet, atau pewarna — 100% jahe merah murni.",
    variants: [
      { label: "50g", price: 25000 },
      { label: "100g", price: 45000 },
      { label: "250g", price: 100000 },
    ],
    benefits: [
      "Menghangatkan tubuh & meredakan masuk angin",
      "Meredakan mual dan gangguan pencernaan",
      "Anti-inflamasi & pereda nyeri sendi alami",
      "Meningkatkan stamina dan vitalitas",
      "Membantu meningkatkan imunitas tubuh",
    ],
    composition: "100% Zingiber officinale var. rubrum (Red Ginger)",
    usage: [
      "Seduh ½–1 sendok teh dengan air panas 70–80°C.",
      "Tambahkan madu atau gula aren secukupnya.",
      "Konsumsi 1–2 kali sehari, terutama pagi atau malam.",
    ],
    labels: ["Produk Unggulan", "Tanpa Pengawet"],
    featured: true,
    image: "ginger",
    accent: "from-amber-100 via-orange-50 to-emerald-50",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getOtherProducts(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.slug !== slug);
}

export function startingPrice(p: Product): number {
  return Math.min(...p.variants.map((v) => v.price));
}
