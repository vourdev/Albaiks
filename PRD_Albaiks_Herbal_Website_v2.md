# 📄 Product Requirements Document (PRD)
## Website Herbal — **Albaiks**

---

> **Dokumen:** Product Requirements Document (PRD)
> **Versi:** 2.0
> **Tanggal:** Juni 2026
> **Pemilik Produk:** Albaiks Herbal
> **Status:** Draft — Revisi v2

---

## Daftar Isi

1. [Ringkasan Eksekutif](#1-ringkasan-eksekutif)
2. [Latar Belakang & Tujuan](#2-latar-belakang--tujuan)
3. [Target Pengguna](#3-target-pengguna)
4. [Identitas Brand & Panduan Visual](#4-identitas-brand--panduan-visual)
5. [Arsitektur Informasi & Sitemap](#5-arsitektur-informasi--sitemap)
6. [Fitur & Persyaratan Fungsional](#6-fitur--persyaratan-fungsional)
7. [Alur Pemesanan via WhatsApp](#7-alur-pemesanan-via-whatsapp)
8. [Persyaratan Non-Fungsional](#8-persyaratan-non-fungsional)
9. [Desain UX/UI — Minimalist & Elegan](#9-desain-uxui--minimalist--elegan)
10. [Katalog Produk Awal](#10-katalog-produk-awal)
11. [Tech Stack & Arsitektur Teknis](#11-tech-stack--arsitektur-teknis)
12. [Keamanan & Kepatuhan](#12-keamanan--kepatuhan)
13. [Roadmap & Prioritas](#13-roadmap--prioritas)
14. [Metrik Keberhasilan (KPI)](#14-metrik-keberhasilan-kpi)
15. [Risiko & Mitigasi](#15-risiko--mitigasi)
16. [Glosarium](#16-glosarium)

---

## 1. Ringkasan Eksekutif

**Albaiks** adalah brand produk herbal alami yang menjual produk kesehatan berbasis bahan alam: minyak zaitun, minyak kelapa, dan serbuk jahe merah. Website ini dibangun sebagai platform **katalog produk & media edukasi** yang terintegrasi langsung dengan WhatsApp untuk proses pemesanan — tanpa keranjang belanja atau halaman checkout konvensional.

Filosofi desain website mengutamakan kesan **minimalist, elegan, dan premium** dengan nuansa herbal-alam yang segar dan menenangkan, mengambil inspirasi dari standar visual website wellness global seperti Herbalife. Dibangun di atas **Next.js + Tailwind CSS + shadcn/ui** untuk performa tinggi, kemudahan pengembangan, dan tampilan yang konsisten.

---

## 2. Latar Belakang & Tujuan

### 2.1 Latar Belakang

Kesadaran masyarakat terhadap produk herbal alami terus meningkat. Albaiks hadir untuk memenuhi kebutuhan tersebut namun masih bergantung pada pemasaran informal dan media sosial. Diperlukan platform digital yang profesional dan terpercaya untuk meningkatkan kredibilitas brand dan volume penjualan, dengan pendekatan pemesanan yang **personal dan cepat** melalui WhatsApp — sesuai dengan kebiasaan belanja masyarakat Indonesia.

### 2.2 Tujuan Bisnis

| No. | Tujuan | Indikator Keberhasilan |
|-----|--------|------------------------|
| 1 | Meningkatkan volume pemesanan melalui WhatsApp | Pesan masuk via WA naik 50% dalam 3 bulan |
| 2 | Membangun kredibilitas dan kepercayaan brand | Persepsi brand "premium & terpercaya" berdasarkan feedback pelanggan |
| 3 | Memperluas jangkauan pasar secara digital | Pengunjung dari minimal 10 provinsi dalam 3 bulan pertama |
| 4 | Menjadi referensi informasi herbal yang terpercaya | Durasi kunjungan rata-rata ≥ 3 menit |
| 5 | Memudahkan proses pemesanan bagi pelanggan | Konversi kunjungan → pesan WA ≥ 5% |

### 2.3 Tujuan Produk (Website)

- Menampilkan katalog produk herbal Albaiks secara profesional dan elegan
- Memberikan informasi edukatif mendalam tentang manfaat, komposisi, dan cara pakai produk
- Mengarahkan pengunjung untuk melakukan pemesanan langsung via WhatsApp
- Membangun kepercayaan melalui transparansi bahan, sertifikasi, dan testimoni nyata
- Mendukung pertumbuhan organik melalui optimasi SEO konten herbal

---

## 3. Target Pengguna

### 3.1 Segmen Utama

#### 👩 Persona 1 — Ibu Rumah Tangga Sadar Kesehatan
- **Usia:** 28–50 tahun
- **Profil:** Aktif mencari produk alami untuk kebutuhan kesehatan keluarga
- **Perilaku:** Membaca ulasan dan manfaat sebelum memutuskan beli, nyaman pesan via WA
- **Kebutuhan:** Informasi lengkap, harga transparan, layanan responsif
- **Pain Point:** Sulit memverifikasi keaslian dan kualitas produk herbal secara online

#### 👨 Persona 2 — Profesional Urban Peduli Wellness
- **Usia:** 25–40 tahun
- **Profil:** Karyawan atau wirausahawan yang mengadopsi gaya hidup sehat
- **Perilaku:** Browsing cepat dari HP, terbiasa pesan via WA atau chat
- **Kebutuhan:** Website cepat dimuat, info singkat-padat, akses WA satu ketukan
- **Pain Point:** Proses checkout panjang yang membuang waktu

#### 👴 Persona 3 — Pengguna Herbal Tradisional
- **Usia:** 45–65 tahun
- **Profil:** Terbiasa dengan produk herbal tradisional, mencari alternatif alami
- **Perilaku:** Lebih nyaman berkomunikasi langsung via WhatsApp dari pada form online
- **Kebutuhan:** Informasi manfaat yang jelas, antarmuka mudah dipahami
- **Pain Point:** Tidak familier dengan proses checkout digital yang rumit

### 3.2 Segmen Sekunder

- Reseller dan dropshipper produk herbal
- Praktisi wellness dan herbal
- Penggiat gaya hidup alami / komunitas organik

---

## 4. Identitas Brand & Panduan Visual

### 4.1 Nilai Brand

| Nilai | Ekspresi Visual |
|-------|-----------------|
| **Alami** | Palet earthy-green, foto bahan alam, tekstur organik |
| **Elegan** | Whitespace luas, tipografi serif premium, layout bersih |
| **Terpercaya** | Badge sertifikasi prominent, informasi transparan, testimoni nyata |
| **Informatif** | Konten edukasi terstruktur, ikon ilustratif, data manfaat jelas |
| **Hangat & Personal** | Akses WhatsApp langsung, tone komunikasi ramah |

### 4.2 Palet Warna

Terinspirasi dari nuansa herbal alam yang sejuk dan elegan, dengan pendekatan minimalist seperti website wellness premium.

| Peran | Nama | HEX | Penggunaan |
|-------|------|-----|------------|
| **Primary** | Forest Green | `#1A3C34` | CTA utama, header, aksen brand utama |
| **Primary Light** | Sage Green | `#2D6A4F` | Hover state, subheading, border aksen |
| **Secondary** | Fresh Mint | `#74C69D` | Highlight, badge, divider dekoratif |
| **Accent** | Warm Gold | `#C9973A` | Label premium, harga, elemen spotlight |
| **Background** | Off-White Linen | `#FAFAF7` | Latar utama semua halaman |
| **Surface** | Pure White | `#FFFFFF` | Card, modal, form |
| **Surface Alt** | Cream Warm | `#F4F0E8` | Section bergantian, highlight ringan |
| **Text Primary** | Deep Charcoal | `#1C1C1C` | Heading, body text utama |
| **Text Secondary** | Warm Gray | `#6B7280` | Subtext, metadata, placeholder |
| **Text Muted** | Light Gray | `#9CA3AF` | Caption, label kecil |
| **Border** | Subtle Gray | `#E5E7EB` | Garis pemisah, border card |
| **Success** | Herbal Green | `#16A34A` | Notifikasi sukses, stok tersedia |
| **Error** | Soft Red | `#DC2626` | Pesan error, stok habis |

### 4.3 Tipografi

Kombinasi serif elegan untuk display dan sans-serif bersih untuk body — terinspirasi pendekatan tipografi website wellness premium.

| Tipe | Font Family | Berat | Ukuran | Kegunaan |
|------|-------------|-------|--------|----------|
| **Display** | Cormorant Garamond | 300–400 | 56–80px | Hero headline, tagline besar |
| **Heading H1** | Cormorant Garamond | 500 | 40–48px | Judul halaman utama |
| **Heading H2** | Cormorant Garamond | 400 | 32–36px | Judul section |
| **Heading H3** | DM Sans | 600 | 22–24px | Nama produk, sub-section |
| **Heading H4** | DM Sans | 500 | 18–20px | Label group, sub-judul |
| **Body Large** | DM Sans | 400 | 16–18px | Deskripsi produk, intro artikel |
| **Body** | DM Sans | 400 | 14–16px | Paragraf umum, konten |
| **Caption** | DM Sans | 400 | 12–13px | Label kecil, metadata, badge |
| **Button** | DM Sans | 500–600 | 14–15px | Teks tombol CTA |
| **Price** | Cormorant Garamond | 600 | 24–28px | Tampilan harga produk |

> **Sumber Font:** Google Fonts (self-hosted via `next/font` untuk performa optimal)
> - `Cormorant_Garamond` — weights: 300, 400, 500, 600
> - `DM_Sans` — weights: 400, 500, 600

### 4.4 Elemen Visual & Estetika

- **Gaya Keseluruhan:** Minimalist editorial — banyak whitespace, konten tidak berdesak-desakan
- **Ikon:** Lucide React (konsisten dengan shadcn/ui), gaya outline tipis
- **Ilustrasi Dekoratif:** Botanical line-art SVG (daun, tetes minyak, akar, tanaman herbal) — maksimal 2 warna
- **Foto Produk:** Background putih bersih atau linen cream, properti alam minimal (daun segar, rempah, permukaan kayu)
- **Foto Lifestyle:** Nuansa natural bright — outdoor, sinar alami, tone hijau-putih
- **Ratio Foto Produk:** Square (1:1) di card katalog, landscape (3:2) di hero section
- **Border Radius:** Konsisten 8px untuk card, 6px untuk button, 4px untuk badge kecil
- **Shadow:** Subtle drop shadow — `shadow-sm` untuk card default, `shadow-md` saat hover
- **Animasi:** Halus dan tidak mengganggu — fade-in scroll reveal (Framer Motion), hover scale tipis (scale 1.02), underline slide pada link navigasi

### 4.5 Referensi Visual (Herbalife.com)

Elemen yang diadaptasi dari referensi Herbalife Indonesia:
- **Navigasi sticky** dengan logo kiri, menu tengah, ikon kanan
- **Hero full-width** dengan teks overlay dan CTA button menonjol
- **Grid produk bersih** dengan card minimal dan info esensial
- **Section bergantian** antara background putih dan krem untuk ritme visual
- **Footer komprehensif** dengan kolom terstruktur

Elemen yang dikustomisasi untuk Albaiks:
- Warna brand diganti ke forest green / earthy tone (bukan orange Herbalife)
- Tipografi serif Cormorant untuk kesan lebih artisanal dan premium
- Pendekatan lebih intimate dan personal (tidak korporat)
- CTA utama menuju WhatsApp, bukan form checkout

---

## 5. Arsitektur Informasi & Sitemap

```
ALBAIKS WEBSITE (Next.js App Router)
│
├── / (Beranda)
│   ├── Hero Section
│   ├── Keunggulan Brand
│   ├── Produk Unggulan (Preview 3 produk)
│   ├── Cara Pemesanan (3 langkah visual)
│   ├── Tentang Albaiks (singkat)
│   ├── Edukasi / Blog Preview
│   └── Testimoni Pelanggan
│
├── /produk (Katalog Produk)
│   └── Grid semua produk + filter kategori
│
├── /produk/[slug] (Detail Produk) ← HALAMAN KUNCI
│   ├── Galeri Foto Produk
│   ├── Nama, Harga, Varian
│   ├── Tombol "Pesan via WhatsApp" → redirect WA
│   ├── Tab: Deskripsi | Manfaat | Komposisi | Cara Pakai
│   └── Produk Lainnya
│
├── /edukasi (Blog Herbal)
│   └── Grid artikel dengan filter kategori
│
├── /edukasi/[slug] (Detail Artikel)
│
├── /tentang (Tentang Albaiks)
│   ├── Kisah Brand
│   ├── Visi & Misi
│   ├── Proses Produksi
│   └── Sertifikasi
│
├── /kontak (Kontak & FAQ)
│   ├── FAQ Accordion
│   ├── Tombol WhatsApp CS
│   └── Info kontak & jam layanan
│
└── (Halaman Legal)
    ├── /kebijakan-privasi
    └── /syarat-ketentuan
```

**Halaman yang DIHAPUS dari v1:**
- ❌ `/keranjang` — tidak ada cart page
- ❌ `/checkout` — tidak ada halaman checkout
- ❌ `/akun` — tidak ada sistem akun pengguna (v1)
- ❌ `/lacak-pesanan` — ditangani langsung via WA

---

## 6. Fitur & Persyaratan Fungsional

### 6.1 Beranda (Home — `/`)

| ID | Fitur | Prioritas | Deskripsi |
|----|-------|-----------|-----------|
| F-01 | Hero Section | 🔴 Tinggi | Full-width visual dengan Cormorant Garamond headline, subtext DM Sans, 2 tombol CTA: "Lihat Produk" dan "Hubungi Kami" |
| F-02 | Keunggulan Brand | 🔴 Tinggi | 3 kolom ikon + judul + teks singkat: "100% Alami", "Tanpa Pengawet", "Diproses Higienis" |
| F-03 | Produk Unggulan | 🔴 Tinggi | Grid 3 produk terpilih dengan foto, nama, harga, dan tombol "Lihat Detail" |
| F-04 | Cara Pemesanan | 🔴 Tinggi | Section visual 3 langkah: 1) Pilih Produk → 2) Tentukan Jumlah → 3) Pesan via WhatsApp |
| F-05 | Tentang Singkat | 🟡 Sedang | Blok teks + foto dengan ringkasan brand story dan link ke halaman Tentang |
| F-06 | Preview Blog | 🟡 Sedang | 3 artikel terbaru dengan gambar, judul, ringkasan 2 baris, dan link baca selengkapnya |
| F-07 | Testimoni | 🔴 Tinggi | Carousel atau grid testimoni pelanggan nyata (nama, produk, rating, kutipan) |
| F-08 | CTA WhatsApp Floating | 🔴 Tinggi | Tombol WhatsApp mengambang di pojok kanan bawah seluruh halaman (ikon WA hijau) |

### 6.2 Katalog Produk (`/produk`)

| ID | Fitur | Prioritas | Deskripsi |
|----|-------|-----------|-----------|
| F-09 | Grid Produk | 🔴 Tinggi | Tampilan card produk: foto, nama, kategori, harga mulai dari, tombol "Lihat Detail" |
| F-10 | Filter Kategori | 🟡 Sedang | Tab/pill filter: Semua / Minyak Herbal / Serbuk & Rempah |
| F-11 | Sort Produk | 🟢 Rendah | Dropdown urutan: Terbaru / Harga Terendah / Harga Tertinggi / Terpopuler |
| F-12 | Empty State | 🟡 Sedang | Tampilan ilustrasi + teks saat tidak ada produk di kategori tertentu |
| F-13 | SEO Katalog | 🔴 Tinggi | Meta title, meta description, canonical URL unik per kategori |

### 6.3 Halaman Detail Produk (`/produk/[slug]`) — HALAMAN KRITIS

| ID | Fitur | Prioritas | Deskripsi |
|----|-------|-----------|-----------|
| F-14 | Galeri Foto | 🔴 Tinggi | Foto utama besar + thumbnail kecil dapat diklik; lightbox zoom untuk desktop |
| F-15 | Informasi Produk | 🔴 Tinggi | Nama produk (H1), kategori badge, harga per varian, deskripsi singkat 2–3 kalimat |
| F-16 | Pemilihan Varian | 🔴 Tinggi | Tombol pill untuk pilih ukuran/varian (misal: 100ml / 250ml / 500ml); harga otomatis berubah |
| F-17 | Pemilihan Jumlah | 🔴 Tinggi | Input stepper (+/-) dengan batas minimum 1 dan maksimum 99 |
| F-18 | **Tombol Pesan via WhatsApp** | 🔴 Tinggi | Tombol hijau besar dengan ikon WhatsApp; saat diklik, membuka WA dengan template pesan otomatis yang sudah terisi (lihat bagian 7) |
| F-19 | Tombol Tanya via WA | 🟡 Sedang | Tombol sekunder "Ada pertanyaan? Tanya kami" — membuka WA dengan template tanya produk |
| F-20 | Tab Informasi | 🔴 Tinggi | Tab navigasi: **Deskripsi** / **Manfaat** / **Komposisi & Bahan** / **Cara Penggunaan** |
| F-21 | Badge & Label | 🟡 Sedang | Badge: "Terlaris", "Baru", "Stok Terbatas" ditampilkan di atas nama produk |
| F-22 | Info Pengiriman Singkat | 🟡 Sedang | Keterangan singkat: "Pengiriman ke seluruh Indonesia via JNE / J&T / SiCepat" |
| F-23 | Share Produk | 🟢 Rendah | Ikon share ke WhatsApp / salin link |
| F-24 | Breadcrumb | 🟡 Sedang | `Beranda > Produk > [Nama Produk]` |
| F-25 | Produk Lainnya | 🟡 Sedang | Section horizontal scroll 3–4 produk lain di bawah halaman |
| F-26 | SEO Detail Produk | 🔴 Tinggi | Meta title: "[Nama Produk] — Albaiks Herbal", OG image, schema Product markup |

### 6.4 Blog / Edukasi Herbal (`/edukasi`)

| ID | Fitur | Prioritas | Deskripsi |
|----|-------|-----------|-----------|
| F-27 | Halaman Daftar Artikel | 🟡 Sedang | Grid artikel dengan gambar, kategori badge, judul, ringkasan, dan tanggal |
| F-28 | Filter Kategori Artikel | 🟡 Sedang | Manfaat Produk / Tips Herbal / Resep & Cara Pakai / Gaya Hidup Sehat |
| F-29 | Detail Artikel | 🟡 Sedang | Konten lengkap dengan gambar hero, table of contents, waktu baca estimasi |
| F-30 | CTA di Akhir Artikel | 🟡 Sedang | Section "Tertarik mencoba produk kami?" dengan link ke produk terkait |
| F-31 | SEO Artikel | 🔴 Tinggi | Schema Article, meta tags lengkap, URL slug deskriptif |

### 6.5 Halaman Lain

| ID | Halaman | Prioritas | Konten Utama |
|----|---------|-----------|--------------|
| F-32 | Tentang Albaiks | 🟡 Sedang | Brand story, foto tim/proses produksi, visi-misi, badge sertifikasi |
| F-33 | Kontak | 🟡 Sedang | FAQ accordion, tombol WhatsApp CS, info jam layanan, nomor dan email |
| F-34 | Kebijakan Privasi | 🟢 Rendah | Dokumen legal kebijakan privasi data pengguna |
| F-35 | Syarat & Ketentuan | 🟢 Rendah | Ketentuan penggunaan layanan dan pembelian |

### 6.6 Komponen Global

| ID | Komponen | Prioritas | Deskripsi |
|----|----------|-----------|-----------|
| F-36 | Header / Navbar | 🔴 Tinggi | Sticky navbar: logo kiri, menu tengah (Beranda / Produk / Edukasi / Tentang / Kontak), ikon WA di kanan; hamburger di mobile |
| F-37 | Footer | 🔴 Tinggi | Logo + tagline, kolom link (Produk, Edukasi, Perusahaan, Legal), info kontak, ikon sosmed, copyright |
| F-38 | WA Floating Button | 🔴 Tinggi | Tombol bulat hijau WhatsApp mengambang di kanan bawah semua halaman, dengan tooltip "Chat dengan Kami" |
| F-39 | SEO Global | 🔴 Tinggi | `sitemap.xml` otomatis, `robots.txt`, Open Graph default, schema Organization |

---

## 7. Alur Pemesanan via WhatsApp

> ⚠️ **Tidak ada cart page, tidak ada halaman checkout.** Semua pemesanan dilakukan langsung via WhatsApp dari halaman detail produk.

### 7.1 Alur Pengguna

```
[Halaman Katalog /produk]
        │
        ▼
[Halaman Detail Produk /produk/[slug]]
        │
        ├── Pengguna memilih VARIAN (contoh: 250ml)
        │
        ├── Pengguna mengatur JUMLAH (contoh: 2)
        │
        └── Pengguna klik "🟢 Pesan via WhatsApp"
                │
                ▼
        [WhatsApp terbuka dengan template pesan terisi otomatis]
                │
                ▼
        [Admin Albaiks menerima pesan & memproses pesanan]
```

### 7.2 Template Pesan WhatsApp Otomatis

Template yang akan di-*encode* ke URL WhatsApp (`wa.me/628XXXXXXXX?text=...`):

```
Halo Albaiks! 🌿

Saya ingin memesan produk berikut:

📦 *Produk:* Albaiks Extra Virgin Olive Oil
📐 *Varian:* 250ml
🔢 *Jumlah:* 2 botol

Mohon informasi lebih lanjut mengenai:
- Total harga
- Estimasi pengiriman ke [kota saya]
- Cara pembayaran

Terima kasih!
```

**Elemen Dinamis dalam Template:**
| Variabel | Sumber Data |
|----------|-------------|
| `[Nama Produk]` | `product.name` dari database/JSON |
| `[Varian]` | State pilihan varian pengguna |
| `[Jumlah]` | State stepper jumlah pengguna |

### 7.3 Implementasi Teknis (Next.js)

```typescript
// components/OrderButton.tsx
const generateWhatsAppURL = ({
  productName,
  variant,
  quantity,
  waNumber,
}: OrderParams): string => {
  const message = `Halo Albaiks! 🌿\n\nSaya ingin memesan produk berikut:\n\n📦 *Produk:* ${productName}\n📐 *Varian:* ${variant}\n🔢 *Jumlah:* ${quantity} pcs\n\nMohon informasi lebih lanjut mengenai:\n- Total harga\n- Estimasi pengiriman ke [kota saya]\n- Cara pembayaran\n\nTerima kasih!`;

  return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
};

// Penggunaan dalam halaman produk
<Button
  onClick={() => {
    const url = generateWhatsAppURL({
      productName: product.name,
      variant: selectedVariant,
      quantity: quantity,
      waNumber: "628XXXXXXXXXX",
    });
    window.open(url, "_blank");
  }}
  className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white"
>
  <WhatsAppIcon className="mr-2" />
  Pesan via WhatsApp
</Button>
```

### 7.4 Tombol Tanya Produk (Sekunder)

Template pesan untuk tombol "Tanya via WhatsApp":

```
Halo Albaiks! 🌿

Saya ingin bertanya tentang produk:
📦 *Produk:* Albaiks Extra Virgin Olive Oil

[Pertanyaan saya...]
```

---

## 8. Persyaratan Non-Fungsional

### 8.1 Performa

| Metrik | Target | Cara Capai |
|--------|--------|------------|
| Largest Contentful Paint (LCP) | ≤ 2.0 detik | Next.js Image optimization, lazy loading |
| First Input Delay (FID) / INP | ≤ 100ms | Minimize JavaScript bundle, React Server Components |
| Cumulative Layout Shift (CLS) | ≤ 0.1 | Dimensi gambar eksplisit, font `display: swap` |
| Google PageSpeed Mobile | ≥ 90 | SSG/ISR, CDN, image next-gen format (WebP/AVIF) |
| Google PageSpeed Desktop | ≥ 95 | Code splitting, tree shaking Tailwind |
| Time to First Byte (TTFB) | ≤ 800ms | Static Generation + CDN Edge |

### 8.2 Responsivitas & Breakpoints (Tailwind CSS)

| Breakpoint | Prefix Tailwind | Ukuran Layar | Layout |
|------------|-----------------|--------------|--------|
| Mobile | (default) | 320px – 767px | 1 kolom, hamburger menu |
| Tablet | `md:` | 768px – 1023px | 2 kolom produk, navbar penuh |
| Desktop | `lg:` | 1024px – 1279px | 3 kolom produk, layout penuh |
| Large Desktop | `xl:` | 1280px+ | Max-width container 1280px, 4 kolom produk |

### 8.3 SEO

- Semua halaman menggunakan **Next.js Metadata API** (`generateMetadata`)
- URL slug deskriptif: `/produk/minyak-zaitun-extra-virgin-250ml`
- Schema markup: `Product`, `BreadcrumbList`, `Article`, `Organization`, `FAQPage`
- `sitemap.xml` dihasilkan otomatis via `next-sitemap`
- Open Graph dan Twitter Card untuk semua halaman
- Alt text deskriptif pada semua gambar

### 8.4 Aksesibilitas (WCAG 2.1 AA)

- Kontras warna minimum 4.5:1 untuk teks body, 3:1 untuk teks besar
- Semua elemen interaktif dapat diakses via keyboard (Tab / Enter / Space)
- ARIA label pada ikon tanpa teks (tombol WA, ikon share, dll.)
- Focus indicator yang jelas dan kontras
- Ukuran tap target minimal 44×44px pada mobile

### 8.5 Kompatibilitas Browser

| Browser | Versi Minimum |
|---------|---------------|
| Chrome | 2 versi terakhir |
| Firefox | 2 versi terakhir |
| Safari (iOS & macOS) | 2 versi terakhir |
| Edge | 2 versi terakhir |
| Samsung Internet | 2 versi terakhir |

---

## 9. Desain UX/UI — Minimalist & Elegan

### 9.1 Prinsip Desain

1. **White Space is King** — Konten tidak berdesak-desakan; setiap elemen memiliki ruang napas
2. **Hierarchy yang Jelas** — Serif untuk headline impresif, sans-serif untuk konten terstruktur
3. **Satu Aksi Utama Per Halaman** — Fokus pengguna diarahkan ke satu tombol CTA kritis
4. **Konsistensi Komponen** — Semua UI dibangun dari shadcn/ui dengan tema yang dikustomisasi
5. **Nature Without Kitsch** — Nuansa herbal dihadirkan melalui palet warna dan foto, bukan dekorasi berlebihan

### 9.2 Komponen shadcn/ui yang Digunakan

| Komponen | Kegunaan dalam Albaiks |
|----------|------------------------|
| `Button` | CTA pesan WA, tombol navigasi, secondary actions |
| `Card` | Card produk, card artikel blog, card testimoni |
| `Badge` | Label kategori, label produk (Terlaris, Baru, dll.) |
| `Tabs` | Tab informasi produk (Deskripsi / Manfaat / Komposisi) |
| `Accordion` | FAQ di halaman Kontak |
| `Carousel` | Galeri foto produk, testimoni pelanggan |
| `Separator` | Divider konten antar section |
| `Sheet` | Mobile navigation drawer (hamburger menu) |
| `Skeleton` | Loading state untuk card produk dan artikel |
| `Toast` | Notifikasi aksi (misal: "Membuka WhatsApp...") |
| `NavigationMenu` | Navigasi desktop dengan dropdown |
| `Input` | Form newsletter, form kontak |
| `Select` | Sort/filter produk |
| `Breadcrumb` | Navigasi kontekstual di halaman produk |

### 9.3 Wireframe Deskripsi — Halaman Utama

#### Beranda
```
┌─────────────────────────────────────────────────────┐
│  NAVBAR: [Logo Albaiks]  Beranda Produk Edukasi   [WA Icon] │
├─────────────────────────────────────────────────────┤
│                                                     │
│  HERO FULL-WIDTH                                    │
│  ┌─────────────────────────────────────────────┐   │
│  │  [Foto lifestyle natural / produk]           │   │
│  │                                             │   │
│  │  Cormorant 64px:                            │   │
│  │  "Kebaikan Alam,                            │   │
│  │   Kesehatan Sejati."                        │   │
│  │                                             │   │
│  │  DM Sans 16px: Produk herbal alami pilihan  │   │
│  │  dari bahan terbaik untuk kesehatanmu.      │   │
│  │                                             │   │
│  │  [Lihat Produk]  [Hubungi Kami via WA]      │   │
│  └─────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────┤
│  KEUNGGULAN (bg: cream)                             │
│  [🌿 Ikon] 100% Alami    [✓ Ikon] Tanpa Pengawet   │
│  [🏥 Ikon] Diproses Higienis                        │
├─────────────────────────────────────────────────────┤
│  PRODUK UNGGULAN                                    │
│  ┌───────┐  ┌───────┐  ┌───────┐                   │
│  │ Foto  │  │ Foto  │  │ Foto  │                   │
│  │Produk1│  │Produk2│  │Produk3│                   │
│  │ Nama  │  │ Nama  │  │ Nama  │                   │
│  │ Rp... │  │ Rp... │  │ Rp... │                   │
│  │[Lihat]│  │[Lihat]│  │[Lihat]│                   │
│  └───────┘  └───────┘  └───────┘                   │
├─────────────────────────────────────────────────────┤
│  CARA PEMESANAN (bg: forest green)                  │
│  1. Pilih Produk → 2. Tentukan Jumlah → 3. Pesan WA │
├─────────────────────────────────────────────────────┤
│  TESTIMONI (carousel)                               │
├─────────────────────────────────────────────────────┤
│  PREVIEW BLOG (3 artikel)                           │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
│  Logo | Links | Sosmed | Sertifikasi | Copyright    │
└─────────────────────────────────────────────────────┘
         [🟢 Tombol WA Floating — pojok kanan bawah]
```

#### Detail Produk (`/produk/[slug]`)
```
┌─────────────────────────────────────────────────────┐
│  NAVBAR                                             │
├─────────────────────────────────────────────────────┤
│  Breadcrumb: Beranda > Produk > Minyak Zaitun       │
├───────────────────────┬─────────────────────────────┤
│                       │                             │
│  GALERI FOTO          │  INFORMASI PRODUK           │
│  ┌─────────────────┐  │  [Badge: Terlaris]          │
│  │                 │  │                             │
│  │  Foto Utama     │  │  Albaiks Extra Virgin       │
│  │  (Large)        │  │  Olive Oil           ← H1  │
│  │                 │  │                             │
│  └─────────────────┘  │  Rp 85.000 / 100ml  ← Harga│
│  [thumb][thumb][thumb]│                             │
│                       │  Pilih Varian:              │
│                       │  [100ml] [250ml] [500ml]    │
│                       │                             │
│                       │  Jumlah:                    │
│                       │  [ − ]  [ 1 ]  [ + ]        │
│                       │                             │
│                       │  [🟢 Pesan via WhatsApp]    │
│                       │  [💬 Tanya via WhatsApp]    │
│                       │                             │
│                       │  🚚 Pengiriman ke seluruh   │
│                       │     Indonesia               │
├───────────────────────┴─────────────────────────────┤
│  TABS: [Deskripsi] [Manfaat] [Komposisi] [Cara Pakai]│
│  ─────────────────────────────────────────────────  │
│  Konten tab aktif                                   │
├─────────────────────────────────────────────────────┤
│  Produk Lainnya (horizontal scroll)                 │
└─────────────────────────────────────────────────────┘
```

### 9.4 Spacing System (Tailwind)

| Token | Nilai | Penggunaan |
|-------|-------|------------|
| `gap-2` / `p-2` | 8px | Spacing dalam komponen kecil |
| `gap-4` / `p-4` | 16px | Padding card, gap grid kecil |
| `gap-6` / `p-6` | 24px | Gap antar card, padding section kecil |
| `gap-8` / `py-8` | 32px | Section padding mobile |
| `py-16` | 64px | Section padding desktop |
| `py-24` | 96px | Hero section padding |
| `max-w-7xl` | 1280px | Max width container utama |

---

## 10. Katalog Produk Awal

### 10.1 Minyak Zaitun

| Atribut | Detail |
|---------|--------|
| **Nama** | Albaiks Extra Virgin Olive Oil |
| **Slug** | `minyak-zaitun-extra-virgin` |
| **SKU** | `ALB-OLV-001` |
| **Kategori** | Minyak Herbal |
| **Varian & Harga** | 100ml — Rp 65.000 / 250ml — Rp 140.000 / 500ml — Rp 250.000 |
| **Deskripsi Singkat** | Minyak zaitun murni cold-pressed dari buah zaitun pilihan, kaya antioksidan dan omega-9 |
| **Manfaat** | Kesehatan jantung, anti-inflamasi, pelembap kulit alami, mendukung pencernaan, kaya antioksidan |
| **Komposisi** | 100% Olea europaea (Olive) Fruit Oil |
| **Cara Pakai** | Konsumsi 1–2 sdm/hari langsung atau campurkan ke makanan; oleskan ke kulit sebagai pelembap |
| **Label** | Terlaris, Cold-Pressed |

### 10.2 Minyak Kelapa (VCO)

| Atribut | Detail |
|---------|--------|
| **Nama** | Albaiks Virgin Coconut Oil (VCO) |
| **Slug** | `minyak-kelapa-vco` |
| **SKU** | `ALB-VCO-001` |
| **Kategori** | Minyak Herbal |
| **Varian & Harga** | 150ml — Rp 45.000 / 300ml — Rp 80.000 / 600ml — Rp 145.000 |
| **Deskripsi Singkat** | Minyak kelapa perawan cold-pressed tanpa pemanasan, kaya asam laurat dan MCT alami |
| **Manfaat** | Tingkatkan imunitas, perawatan rambut & kulit, dukung metabolisme, antijamur & antibakteri alami |
| **Komposisi** | 100% Cocos nucifera (Coconut) Oil |
| **Cara Pakai** | Konsumsi 1–3 sdm/hari, campuran masak, masker rambut, pelembap kulit dan bibir |
| **Label** | VCO, Cold-Pressed, Multiguna |

### 10.3 Serbuk Jahe Merah

| Atribut | Detail |
|---------|--------|
| **Nama** | Albaiks Serbuk Jahe Merah |
| **Slug** | `serbuk-jahe-merah` |
| **SKU** | `ALB-JHM-001` |
| **Kategori** | Serbuk & Rempah |
| **Varian & Harga** | 50g — Rp 25.000 / 100g — Rp 45.000 / 250g — Rp 100.000 |
| **Deskripsi Singkat** | Serbuk jahe merah murni tanpa campuran dari jahe merah segar pilihan, diproses higienis |
| **Manfaat** | Menghangatkan tubuh, redakan masuk angin & mual, anti-inflamasi, tingkatkan stamina & imunitas |
| **Komposisi** | 100% Zingiber officinale var. rubrum (Red Ginger) |
| **Cara Pakai** | Seduh ½–1 sdt dengan air panas (70–80°C), tambah madu secukupnya, konsumsi 1–2x sehari |
| **Label** | Produk Unggulan, Tanpa Pengawet |

---

## 11. Tech Stack & Arsitektur Teknis

### 11.1 Tech Stack Utama

| Layer | Teknologi | Versi | Keterangan |
|-------|-----------|-------|------------|
| **Framework** | Next.js | 15.x | App Router, React Server Components, SSG + ISR |
| **Language** | TypeScript | 5.x | Type safety penuh di seluruh codebase |
| **Styling** | Tailwind CSS | 3.x | Utility-first CSS, konfigurasi tema custom |
| **UI Components** | shadcn/ui | latest | Komponen aksesibel berbasis Radix UI |
| **Animation** | Framer Motion | 11.x | Animasi halus, scroll reveal, transisi halaman |
| **Icons** | Lucide React | latest | Konsisten dengan shadcn/ui |
| **Font** | `next/font` | — | Self-hosted Cormorant Garamond + DM Sans |

### 11.2 Data & Konten

| Layer | Teknologi | Keterangan |
|-------|-----------|------------|
| **Konten Produk** | MDX / JSON lokal | Fase 1: data statis di `data/products.json` |
| **Konten Blog** | MDX + Contentlayer | Artikel dalam format `.mdx` dengan frontmatter |
| **CMS (Fase 2)** | Sanity.io | Headless CMS untuk admin non-teknis |
| **Gambar** | Next.js Image + Cloudinary | Optimasi otomatis, format WebP/AVIF |

### 11.3 Deployment & Infrastruktur

| Layer | Teknologi | Keterangan |
|-------|-----------|------------|
| **Hosting** | Vercel | Deploy otomatis dari Git, CDN edge global |
| **Domain** | Niagahoster / Cloudflare | DNS + SSL otomatis via Vercel |
| **CDN & DNS** | Cloudflare | Proteksi DDoS, caching edge |
| **Analytics** | Google Analytics 4 | Tracking trafik dan konversi ke WA |
| **SEO** | `next-sitemap` | Generate sitemap.xml + robots.txt otomatis |

### 11.4 Struktur Direktori (App Router)

```
albaiks/
├── app/
│   ├── layout.tsx              # Root layout (font, metadata global)
│   ├── page.tsx                # Beranda
│   ├── produk/
│   │   ├── page.tsx            # Katalog produk
│   │   └── [slug]/
│   │       └── page.tsx        # Detail produk
│   ├── edukasi/
│   │   ├── page.tsx            # Daftar artikel
│   │   └── [slug]/
│   │       └── page.tsx        # Detail artikel
│   ├── tentang/
│   │   └── page.tsx
│   └── kontak/
│       └── page.tsx
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── OrderSteps.tsx
│   │   └── Testimonials.tsx
│   ├── product/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── VariantSelector.tsx
│   │   ├── QuantityStepper.tsx
│   │   ├── OrderButton.tsx     # Tombol pesan WA
│   │   └── ProductTabs.tsx
│   └── blog/
│       └── ArticleCard.tsx
├── data/
│   ├── products.json           # Data produk
│   └── testimonials.json
├── lib/
│   ├── whatsapp.ts             # generateWhatsAppURL()
│   └── utils.ts
├── content/
│   └── blog/                   # File .mdx artikel
├── public/
│   └── images/
└── tailwind.config.ts          # Konfigurasi tema Albaiks
```

### 11.5 Konfigurasi Tailwind — Tema Albaiks

```typescript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1A3C34",
          "primary-light": "#2D6A4F",
          secondary: "#74C69D",
          accent: "#C9973A",
          background: "#FAFAF7",
          cream: "#F4F0E8",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
};
```

### 11.6 Nomor WhatsApp

```typescript
// lib/config.ts
export const WHATSAPP_NUMBER = "628XXXXXXXXXX"; // Nomor WA Albaiks
export const WHATSAPP_CS_NUMBER = "628XXXXXXXXXX"; // Nomor WA Customer Service
```

> ⚠️ Isi nomor WhatsApp aktual sebelum deployment.

---

## 12. Keamanan & Kepatuhan

### 12.1 Keamanan Website

- SSL/TLS via Vercel (otomatis, gratis) — HTTPS wajib
- Header keamanan: `X-Content-Type-Options`, `X-Frame-Options`, `Content-Security-Policy`
- Rate limiting pada akses API (jika ada) via Vercel Edge Middleware
- Tidak ada data sensitif yang disimpan (tidak ada akun, tidak ada kartu kredit)
- Environment variable untuk konfigurasi sensitif (nomor WA, API key analytics)

### 12.2 Kepatuhan Regulasi

| Regulasi | Implementasi |
|----------|--------------|
| **BPOM** | Tampilkan nomor registrasi BPOM di setiap halaman produk |
| **Halal MUI** | Tampilkan badge sertifikat halal (jika tersedia) |
| **UU PDP** | Halaman kebijakan privasi mencakup: data apa yang dikumpulkan (Google Analytics), cara penggunaan, hak pengguna |
| **UU ITE** | Syarat & ketentuan pembelian yang jelas |

### 12.3 Privasi & Analytics

- Penggunaan Google Analytics 4 dicantumkan dalam kebijakan privasi
- Cookie consent banner (minimal, non-intrusive) sesuai praktik terbaik
- Tidak ada data pembelian yang disimpan di server — semua transaksi dilakukan via WhatsApp

---

## 13. Roadmap & Prioritas

### Fase 1 — MVP (Minggu 1–6)
**Target: Website live dan siap terima pesanan via WA**

- [ ] Setup proyek Next.js 15 + Tailwind + shadcn/ui
- [ ] Konfigurasi tema warna dan tipografi Albaiks
- [ ] Development komponen UI: Navbar, Footer, Card, Button
- [ ] Halaman Beranda (hero, keunggulan, produk unggulan, cara pesan, testimoni)
- [ ] Halaman Katalog Produk
- [ ] Halaman Detail Produk + tombol pesan WA + tab informasi
- [ ] Data produk 3 SKU awal (JSON statis)
- [ ] WhatsApp floating button (semua halaman)
- [ ] Halaman Tentang & Kontak + FAQ
- [ ] Halaman legal (Kebijakan Privasi, Syarat & Ketentuan)
- [ ] Optimasi SEO (metadata, sitemap, schema markup)
- [ ] Optimasi performa (image, font, PageSpeed ≥ 90)
- [ ] Deploy ke Vercel + setup domain
- [ ] Setup Google Analytics 4

### Fase 2 — Penguatan (Minggu 7–12)
**Target: Konten edukasi & peningkatan kepercayaan**

- [ ] Blog / Edukasi Herbal (5–10 artikel awal menggunakan MDX)
- [ ] Halaman detail artikel dengan SEO optimal
- [ ] Integrasi Sanity.io sebagai headless CMS
- [ ] Foto produk profesional (re-shoot jika diperlukan)
- [ ] Optimasi mobile UX berdasarkan feedback pengguna awal
- [ ] Integrasi Meta Pixel untuk Facebook/Instagram Ads
- [ ] Penambahan testimoni nyata dengan foto
- [ ] Form newsletter (integrasi Mailchimp/Brevo)

### Fase 3 — Pertumbuhan (Bulan 4–6)
**Target: Skalabilitas konten dan jangkauan**

- [ ] Penambahan SKU produk baru
- [ ] Sistem review/testimoni berbasis form yang dikirim via WA
- [ ] Halaman landing khusus per produk (untuk iklan)
- [ ] Fitur perbandingan produk
- [ ] Artikel blog rutin (1–2x per minggu)
- [ ] PWA (Progressive Web App) untuk pengalaman mobile lebih baik

---

## 14. Metrik Keberhasilan (KPI)

### 14.1 KPI Bisnis

| Metrik | Target 3 Bulan | Target 6 Bulan |
|--------|----------------|----------------|
| Pesan WA masuk dari website/bulan | 50 pesan | 200 pesan |
| Konversi pesan → transaksi | 60% | 70% |
| Nilai rata-rata per transaksi | Rp 100.000 | Rp 150.000 |
| Pelanggan yang repeat order | 20% | 35% |

### 14.2 KPI Website

| Metrik | Target |
|--------|--------|
| Pengunjung unik/bulan | 2.000 (bulan ke-3), 5.000 (bulan ke-6) |
| Bounce rate | ≤ 55% |
| Durasi kunjungan rata-rata | ≥ 2.5 menit |
| Halaman per sesi | ≥ 2.5 halaman |
| Tingkat klik tombol WA | ≥ 8% dari semua pengunjung |
| PageSpeed Score Mobile | ≥ 90 |
| Posisi keyword utama Google | Top 20 dalam 3 bulan, Top 10 dalam 6 bulan |

### 14.3 Keyword Target SEO

| Keyword | Volume Est. | Tingkat Kesulitan |
|---------|-------------|-------------------|
| "minyak zaitun herbal" | Sedang | Rendah–Sedang |
| "minyak kelapa VCO asli" | Tinggi | Sedang |
| "serbuk jahe merah manfaat" | Sedang | Rendah |
| "produk herbal alami Indonesia" | Tinggi | Tinggi |
| "beli minyak zaitun online" | Sedang | Sedang |
| "Albaiks herbal" | Rendah | Rendah (brand) |

---

## 15. Risiko & Mitigasi

| No. | Risiko | Dampak | Probabilitas | Mitigasi |
|-----|--------|--------|--------------|----------|
| R-01 | Nomor WA tidak aktif / tidak termonitoring → kehilangan pesanan | Tinggi | Sedang | Notifikasi WA Business aktif, dedicated CS person, jam layanan jelas di website |
| R-02 | Performa gambar produk memburuk konversi | Sedang | Sedang | Kompresi wajib, format WebP via Next.js Image, foto profesional |
| R-03 | Template WA tidak cocok dengan format ekspektasi pelanggan | Sedang | Rendah | A/B test template pesan, kumpulkan feedback dari CS |
| R-04 | Website lambat di mobile → pengunjung kabur | Tinggi | Rendah | Static generation, ISR, target PageSpeed ≥ 90, monitoring rutin |
| R-05 | Konten blog tidak diupdate → trafik organik stagnan | Sedang | Tinggi | Jadwal konten bulanan, gunakan CMS Sanity yang mudah diakses admin |
| R-06 | Foto produk kualitas rendah merusak kesan premium | Tinggi | Sedang | Sesi foto profesional sebelum launch, panduan foto backup |
| R-07 | Perubahan kebijakan WhatsApp API memblokir link `wa.me` | Sedang | Rendah | Gunakan URL `wa.me` standar (bukan API berbayar), pantau update WA |
| R-08 | Font Google Fonts lambat → CLS tinggi | Sedang | Rendah | Self-host font via `next/font`, subset karakter Latin |

---

## 16. Glosarium

| Istilah | Definisi |
|---------|----------|
| **Next.js** | Framework React untuk produksi dengan fitur SSG, SSR, dan App Router |
| **App Router** | Sistem routing Next.js 13+ berbasis folder `app/`, mendukung Server Components |
| **Tailwind CSS** | Framework CSS utility-first yang menggunakan class langsung di HTML/JSX |
| **shadcn/ui** | Koleksi komponen UI yang dapat di-copy ke proyek, berbasis Radix UI + Tailwind |
| **TypeScript** | Superset JavaScript dengan type system statis |
| **Cormorant Garamond** | Font serif elegan bergaya editorial, digunakan untuk heading/display Albaiks |
| **DM Sans** | Font sans-serif modern dan bersih, digunakan untuk body text Albaiks |
| **SSG** | Static Site Generation — halaman di-render saat build time, sangat cepat |
| **ISR** | Incremental Static Regeneration — halaman statis yang bisa diperbarui tanpa rebuild penuh |
| **MDX** | Markdown yang mendukung komponen React, digunakan untuk konten blog |
| **Headless CMS** | CMS yang memisahkan backend konten dari frontend tampilan (contoh: Sanity.io) |
| **LCP** | Largest Contentful Paint — metrik Core Web Vitals untuk kecepatan muat konten utama |
| **wa.me** | URL pendek resmi WhatsApp untuk membuka chat langsung: `https://wa.me/628xxx?text=...` |
| **VCO** | Virgin Coconut Oil — minyak kelapa perawan berkualitas tinggi tanpa pemanasan |
| **EVOO** | Extra Virgin Olive Oil — minyak zaitun kelas tertinggi, cold-pressed tanpa bahan kimia |
| **BPOM** | Badan Pengawas Obat dan Makanan — lembaga yang menerbitkan izin edar produk di Indonesia |
| **PRD** | Product Requirements Document — dokumen yang mendefinisikan kebutuhan produk digital |
| **CTA** | Call-to-Action — elemen yang mendorong pengguna melakukan aksi spesifik |
| **SKU** | Stock Keeping Unit — kode unik identifikasi setiap varian produk |
| **KPI** | Key Performance Indicator — metrik terukur untuk menilai keberhasilan produk |

---

*Dokumen ini adalah living document dan akan diperbarui seiring perkembangan proyek.*

**Albaiks Herbal** | PRD v2.0 | Juni 2026
*Minimalist. Elegan. Alami.*
