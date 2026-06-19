import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Albaiks Herbal terkait pengumpulan dan penggunaan data.",
  alternates: { canonical: "/kebijakan-privasi" },
};

export default function KebijakanPrivasiPage() {
  return (
    <LegalLayout title="Kebijakan Privasi" updatedAt="1 Juni 2026">
      <section>
        <h2>1. Pendahuluan</h2>
        <p>
          Albaiks Herbal (&quot;kami&quot;) menghargai privasi Anda. Kebijakan
          ini menjelaskan jenis data yang kami kumpulkan, cara kami menggunakannya,
          dan hak Anda sebagai pengguna situs.
        </p>
      </section>

      <section>
        <h2>2. Data yang Dikumpulkan</h2>
        <p>Kami mengumpulkan data berikut secara terbatas:</p>
        <ul>
          <li>Data kunjungan situs (halaman yang dilihat, durasi, perangkat) melalui Google Analytics 4.</li>
          <li>Data percakapan WhatsApp untuk keperluan pemrosesan pesanan dan layanan pelanggan.</li>
          <li>Alamat pengiriman dan nomor kontak yang Anda berikan saat memesan via WhatsApp.</li>
        </ul>
        <p>
          Kami tidak menyimpan data kartu kredit, password, atau informasi
          finansial sensitif di server kami.
        </p>
      </section>

      <section>
        <h2>3. Penggunaan Data</h2>
        <ul>
          <li>Memproses dan mengirimkan pesanan Anda.</li>
          <li>Memberikan layanan pelanggan dan menjawab pertanyaan.</li>
          <li>Menganalisis penggunaan situs untuk perbaikan layanan.</li>
          <li>Mengirimkan informasi produk atau promo (hanya jika Anda setuju).</li>
        </ul>
      </section>

      <section>
        <h2>4. Hak Anda</h2>
        <p>
          Sesuai UU Perlindungan Data Pribadi, Anda berhak meminta akses, koreksi,
          atau penghapusan data pribadi Anda dari catatan kami. Hubungi kami melalui
          WhatsApp atau email untuk mengajukan permintaan.
        </p>
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          Situs ini menggunakan cookies untuk meningkatkan pengalaman pengguna dan
          mengumpulkan analitik penggunaan. Anda dapat menonaktifkan cookies melalui
          pengaturan browser, namun beberapa fitur situs mungkin tidak berfungsi
          optimal.
        </p>
      </section>

      <section>
        <h2>6. Perubahan Kebijakan</h2>
        <p>
          Kami dapat memperbarui kebijakan ini sewaktu-waktu. Versi terbaru akan
          selalu tersedia di halaman ini dengan tanggal pembaruan.
        </p>
      </section>
    </LegalLayout>
  );
}
