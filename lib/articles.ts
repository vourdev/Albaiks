export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Manfaat Produk"
    | "Tips Herbal"
    | "Resep & Cara Pakai"
    | "Gaya Hidup Sehat";
  readingTime: number;
  publishedAt: string;
  accent: string;
  content: { heading: string; body: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "manfaat-extra-virgin-olive-oil-bagi-jantung",
    title: "Manfaat Extra Virgin Olive Oil bagi Kesehatan Jantung",
    excerpt:
      "Mengapa minyak zaitun kelas extra virgin dipercaya pakar nutrisi sebagai sahabat jantung. Pelajari kandungan, dosis, dan cara konsumsi yang tepat.",
    category: "Manfaat Produk",
    readingTime: 6,
    publishedAt: "2026-05-12",
    accent: "from-emerald-100 to-amber-50",
    content: [
      {
        heading: "Polifenol — Antioksidan Pelindung Jantung",
        body: "EVOO mengandung polifenol seperti oleuropein dan hydroxytyrosol yang berperan menurunkan oksidasi LDL (kolesterol jahat). Oksidasi LDL adalah pemicu awal aterosklerosis — penyumbatan pembuluh darah yang memicu serangan jantung.",
      },
      {
        heading: "Asam Lemak Tak Jenuh Tunggal (MUFA)",
        body: "Sekitar 73% lemak dalam EVOO adalah asam oleat (MUFA) yang membantu menurunkan tekanan darah dan meningkatkan kolesterol baik (HDL).",
      },
      {
        heading: "Dosis Harian yang Disarankan",
        body: "Studi PREDIMED menunjukkan konsumsi 2–4 sendok makan EVOO per hari berhubungan dengan penurunan risiko penyakit jantung hingga 30%. Tambahkan ke salad, sup, atau finishing masakan.",
      },
    ],
  },
  {
    slug: "perbedaan-vco-dan-minyak-kelapa-biasa",
    title: "Perbedaan VCO dan Minyak Kelapa Biasa — Mana Lebih Baik?",
    excerpt:
      "Tidak semua minyak kelapa diciptakan setara. Pahami perbedaan proses produksi, kandungan, dan kegunaan VCO dibanding minyak kelapa biasa.",
    category: "Tips Herbal",
    readingTime: 5,
    publishedAt: "2026-04-28",
    accent: "from-amber-100 to-emerald-50",
    content: [
      {
        heading: "Proses Produksi",
        body: "VCO dibuat dari santan kelapa segar tanpa pemanasan tinggi sehingga kandungan nutrisinya tetap utuh. Minyak kelapa biasa diekstraksi dengan pemanasan tinggi, sering melalui kopra (kelapa kering).",
      },
      {
        heading: "Kandungan MCT (Medium Chain Triglycerides)",
        body: "VCO kaya MCT — terutama asam laurat yang berfungsi antimikroba dan sumber energi cepat. Minyak kelapa biasa juga mengandung MCT namun sebagian sudah berubah strukturnya karena panas.",
      },
      {
        heading: "Penggunaan Sehari-hari",
        body: "VCO ideal untuk dikonsumsi langsung, sebagai pelembap, atau memasak suhu rendah-sedang. Minyak kelapa biasa lebih cocok untuk menggoreng karena titik asap yang lebih tinggi.",
      },
    ],
  },
  {
    slug: "ramuan-jahe-merah-tradisional-meredakan-masuk-angin",
    title: "5 Ramuan Jahe Merah Tradisional untuk Meredakan Masuk Angin",
    excerpt:
      "Resep wedang jahe merah klasik dan variannya yang ampuh menghangatkan tubuh saat musim hujan. Mudah dibuat di rumah dalam 10 menit.",
    category: "Resep & Cara Pakai",
    readingTime: 4,
    publishedAt: "2026-04-15",
    accent: "from-amber-100 to-orange-50",
    content: [
      {
        heading: "Wedang Jahe Merah Madu",
        body: "Seduh 1 sdt serbuk jahe merah dengan 200ml air panas (80°C). Diamkan 2 menit, tambahkan 1 sdt madu dan irisan jeruk nipis. Minum hangat selagi badan terasa pegal.",
      },
      {
        heading: "Jahe Merah Susu Almond",
        body: "Campur 1 sdt serbuk jahe merah ke 200ml susu almond hangat. Tambahkan kayu manis sedikit. Nikmat sebelum tidur untuk pemulihan stamina.",
      },
      {
        heading: "Wedang Bandrek Rempah",
        body: "Kombinasikan jahe merah dengan kayu manis, cengkeh, dan gula aren. Rebus 5 menit. Cocok dinikmati hangat bersama keluarga saat musim hujan.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
