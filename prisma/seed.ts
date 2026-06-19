import { PrismaClient, ProductCategory, ArticleCategory } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Admin accounts are NOT seeded — they are created interactively at
  // /admin/setup on first run, or via `npm run admin:create` / `admin:reset`.
  // This keeps credentials out of source control and out of .env entirely.

  // ─── Site Settings ──────────────────────────────────────
  await prisma.siteSettings.upsert({
    where: { id: "singleton" },
    update: {},
    create: { id: "singleton" },
  });
  console.log("✓ Site settings ensured");

  // ─── Products ───────────────────────────────────────────
  const products: Array<{
    slug: string;
    sku: string;
    name: string;
    category: ProductCategory;
    shortDescription: string;
    description: string;
    composition: string;
    image: string;
    accent: string;
    featured: boolean;
    labels: string[];
    benefits: string[];
    usage: string[];
    variants: { label: string; price: number }[];
  }> = [
    {
      slug: "minyak-zaitun-extra-virgin",
      sku: "ALB-OLV-001",
      name: "Albaiks Extra Virgin Olive Oil",
      category: ProductCategory.MINYAK_HERBAL,
      shortDescription:
        "Minyak zaitun murni cold-pressed dari buah zaitun pilihan, kaya antioksidan dan omega-9.",
      description:
        "Diperas dingin (cold-pressed) tanpa bahan kimia untuk menjaga kualitas dan aroma alami buah zaitun. Memiliki tingkat keasaman rendah (<0.5%) dan rasa lembut dengan sentuhan buah yang segar. Cocok dikonsumsi langsung, sebagai dressing, hingga perawatan kulit dan rambut.",
      composition: "100% Olea europaea (Olive) Fruit Oil",
      image: "olive",
      accent: "from-emerald-100 via-emerald-50 to-amber-50",
      featured: true,
      labels: ["Terlaris", "Cold-Pressed"],
      benefits: [
        "Menjaga kesehatan jantung & menurunkan kolesterol jahat",
        "Anti-inflamasi alami dari kandungan polifenol",
        "Pelembap kulit alami, ideal untuk kulit kering",
        "Mendukung pencernaan & metabolisme tubuh",
        "Sumber antioksidan untuk melawan radikal bebas",
      ],
      usage: [
        "Konsumsi 1–2 sendok makan per hari, langsung atau campurkan ke makanan.",
        "Gunakan sebagai dressing salad atau finishing minyak masakan (hindari memasak dengan suhu tinggi).",
        "Oleskan tipis ke kulit sebagai pelembap alami sebelum tidur.",
      ],
      variants: [
        { label: "100ml", price: 65000 },
        { label: "250ml", price: 140000 },
        { label: "500ml", price: 250000 },
      ],
    },
    {
      slug: "minyak-kelapa-vco",
      sku: "ALB-VCO-001",
      name: "Albaiks Virgin Coconut Oil (VCO)",
      category: ProductCategory.MINYAK_HERBAL,
      shortDescription:
        "Minyak kelapa perawan cold-pressed tanpa pemanasan, kaya asam laurat dan MCT alami.",
      description:
        "VCO Albaiks dibuat dari santan kelapa segar pilihan melalui proses fermentasi alami tanpa pemanasan. Hasilnya minyak yang jernih, beraroma kelapa lembut, dan kaya MCT (Medium Chain Triglycerides) yang mudah diserap tubuh.",
      composition: "100% Cocos nucifera (Coconut) Oil",
      image: "coconut",
      accent: "from-amber-50 via-stone-50 to-emerald-50",
      featured: true,
      labels: ["VCO", "Cold-Pressed", "Multiguna"],
      benefits: [
        "Meningkatkan daya tahan tubuh dengan asam laurat alami",
        "Sumber energi cepat dari kandungan MCT",
        "Antijamur & antibakteri alami untuk kulit sensitif",
        "Perawatan rambut: kilau & mengurangi rambut bercabang",
        "Pelembap kulit dan bibir multi-fungsi",
      ],
      usage: [
        "Konsumsi 1–3 sendok makan per hari, langsung atau campur minuman hangat.",
        "Gunakan sebagai pengganti minyak goreng sehat (titik asap ±177°C).",
        "Sebagai masker rambut: oleskan, diamkan 30 menit, lalu keramas.",
      ],
      variants: [
        { label: "150ml", price: 45000 },
        { label: "300ml", price: 80000 },
        { label: "600ml", price: 145000 },
      ],
    },
    {
      slug: "serbuk-jahe-merah",
      sku: "ALB-JHM-001",
      name: "Albaiks Serbuk Jahe Merah",
      category: ProductCategory.SERBUK_REMPAH,
      shortDescription:
        "Serbuk jahe merah murni tanpa campuran dari jahe merah segar pilihan, diproses higienis.",
      description:
        "Dibuat dari jahe merah segar yang dikeringkan dengan suhu rendah dan digiling halus untuk menjaga senyawa aktif gingerol dan shogaol. Tidak menggunakan gula tambahan, pengawet, atau pewarna — 100% jahe merah murni.",
      composition: "100% Zingiber officinale var. rubrum (Red Ginger)",
      image: "ginger",
      accent: "from-amber-100 via-orange-50 to-emerald-50",
      featured: true,
      labels: ["Produk Unggulan", "Tanpa Pengawet"],
      benefits: [
        "Menghangatkan tubuh & meredakan masuk angin",
        "Meredakan mual dan gangguan pencernaan",
        "Anti-inflamasi & pereda nyeri sendi alami",
        "Meningkatkan stamina dan vitalitas",
        "Membantu meningkatkan imunitas tubuh",
      ],
      usage: [
        "Seduh ½–1 sendok teh dengan air panas 70–80°C.",
        "Tambahkan madu atau gula aren secukupnya.",
        "Konsumsi 1–2 kali sehari, terutama pagi atau malam.",
      ],
      variants: [
        { label: "50g", price: 25000 },
        { label: "100g", price: 45000 },
        { label: "250g", price: 100000 },
      ],
    },
  ];

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const existing = await prisma.product.findUnique({ where: { slug: p.slug } });
    if (existing) {
      console.log(`· skip product ${p.slug} (already exists)`);
      continue;
    }
    await prisma.product.create({
      data: {
        slug: p.slug,
        sku: p.sku,
        name: p.name,
        category: p.category,
        shortDescription: p.shortDescription,
        description: p.description,
        composition: p.composition,
        image: p.image,
        accent: p.accent,
        featured: p.featured,
        labels: p.labels,
        benefits: p.benefits,
        usage: p.usage,
        position: i,
        variants: {
          create: p.variants.map((v, j) => ({
            label: v.label,
            price: v.price,
            position: j,
          })),
        },
      },
    });
    console.log(`✓ Product seeded: ${p.name}`);
  }

  // ─── Articles ───────────────────────────────────────────
  const articles: Array<{
    slug: string;
    title: string;
    excerpt: string;
    category: ArticleCategory;
    readingTime: number;
    publishedAt: Date;
    accent: string;
    content: { heading: string; body: string }[];
  }> = [
    {
      slug: "manfaat-extra-virgin-olive-oil-bagi-jantung",
      title: "Manfaat Extra Virgin Olive Oil bagi Kesehatan Jantung",
      excerpt:
        "Mengapa minyak zaitun kelas extra virgin dipercaya pakar nutrisi sebagai sahabat jantung. Pelajari kandungan, dosis, dan cara konsumsi yang tepat.",
      category: ArticleCategory.MANFAAT_PRODUK,
      readingTime: 6,
      publishedAt: new Date("2026-05-12"),
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
      category: ArticleCategory.TIPS_HERBAL,
      readingTime: 5,
      publishedAt: new Date("2026-04-28"),
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
      category: ArticleCategory.RESEP_CARA_PAKAI,
      readingTime: 4,
      publishedAt: new Date("2026-04-15"),
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

  for (const a of articles) {
    const existing = await prisma.article.findUnique({ where: { slug: a.slug } });
    if (existing) {
      console.log(`· skip article ${a.slug} (already exists)`);
      continue;
    }
    await prisma.article.create({ data: a });
    console.log(`✓ Article seeded: ${a.title}`);
  }

  // ─── Testimonials ───────────────────────────────────────
  const testimonials = [
    {
      name: "Sari Wulandari",
      location: "Jakarta",
      product: "Extra Virgin Olive Oil",
      rating: 5,
      quote:
        "Sudah satu tahun rutin pakai EVOO Albaiks untuk dressing salad. Aromanya sangat segar dan terasa otentik. Kemasan rapi dan pengiriman selalu cepat.",
      initial: "SW",
      position: 0,
    },
    {
      name: "Ahmad Hidayat",
      location: "Surabaya",
      product: "Virgin Coconut Oil",
      rating: 5,
      quote:
        "VCO-nya berkualitas, bening, dan tidak bau tengik. Cocok untuk masak dan masker rambut anak. Layanan via WA juga responsif sekali.",
      initial: "AH",
      position: 1,
    },
    {
      name: "Nurhayati",
      location: "Yogyakarta",
      product: "Serbuk Jahe Merah",
      rating: 5,
      quote:
        "Jahe merahnya pedasnya pas, bikin badan hangat saat musim hujan. Tanpa gula tambahan jadi bisa diatur sesuai selera. Sudah repeat order 5 kali.",
      initial: "NR",
      position: 2,
    },
  ];

  const tCount = await prisma.testimonial.count();
  if (tCount === 0) {
    await prisma.testimonial.createMany({ data: testimonials });
    console.log(`✓ ${testimonials.length} testimonials seeded`);
  } else {
    console.log("· skip testimonials (already populated)");
  }

  console.log("\n🌿 Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
