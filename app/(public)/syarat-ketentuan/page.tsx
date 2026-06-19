import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan layanan Albaiks Herbal.",
  alternates: { canonical: "/syarat-ketentuan" },
};

export default function SyaratKetentuanPage() {
  return (
    <LegalLayout title="Syarat & Ketentuan" updatedAt="1 Juni 2026">
      <section>
        <h2>1. Penerimaan Syarat</h2>
        <p>
          Dengan mengakses situs Albaiks Herbal dan/atau melakukan pemesanan
          produk, Anda dianggap telah membaca, memahami, dan menyetujui seluruh
          syarat &amp; ketentuan yang berlaku.
        </p>
      </section>

      <section>
        <h2>2. Produk &amp; Harga</h2>
        <ul>
          <li>Seluruh harga ditampilkan dalam Rupiah (IDR) dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</li>
          <li>Foto produk merupakan representasi terbaik; warna sebenarnya bisa sedikit berbeda karena pengaturan layar.</li>
          <li>Stok produk bersifat terbatas dan diutamakan untuk pemesan pertama.</li>
        </ul>
      </section>

      <section>
        <h2>3. Pemesanan</h2>
        <p>
          Pemesanan dilakukan melalui WhatsApp dengan mengklik tombol &quot;Pesan
          via WhatsApp&quot; di halaman produk. Pesanan dianggap sah setelah admin
          mengonfirmasi ketersediaan dan total pembayaran.
        </p>
      </section>

      <section>
        <h2>4. Pengiriman</h2>
        <ul>
          <li>Pengiriman dilakukan via JNE, J&amp;T, SiCepat, atau ekspedisi lain sesuai pilihan pelanggan.</li>
          <li>Estimasi waktu pengiriman bergantung pada lokasi dan ekspedisi.</li>
          <li>Risiko kerusakan dalam pengiriman menjadi tanggung jawab ekspedisi setelah barang diserahkan oleh Albaiks.</li>
        </ul>
      </section>

      <section>
        <h2>5. Pembayaran</h2>
        <p>
          Pembayaran dilakukan via transfer bank, e-wallet, atau QRIS sesuai
          informasi yang diberikan admin saat konfirmasi pesanan. Pesanan akan
          diproses setelah pembayaran diverifikasi.
        </p>
      </section>

      <section>
        <h2>6. Pengembalian &amp; Penukaran</h2>
        <p>
          Penukaran hanya berlaku untuk produk yang cacat produksi atau salah
          kirim, dengan pengajuan maksimal 2x24 jam sejak barang diterima.
          Sertakan foto dan video unboxing sebagai bukti.
        </p>
      </section>

      <section>
        <h2>7. Tanggung Jawab</h2>
        <p>
          Produk Albaiks adalah herbal alami pendukung kesehatan, bukan pengganti
          obat medis. Konsultasikan dengan dokter Anda jika sedang menjalani
          pengobatan tertentu, hamil, atau menyusui.
        </p>
      </section>

      <section>
        <h2>8. Hukum yang Berlaku</h2>
        <p>
          Syarat &amp; ketentuan ini diatur berdasarkan hukum Republik Indonesia.
          Setiap sengketa akan diselesaikan secara musyawarah terlebih dahulu.
        </p>
      </section>
    </LegalLayout>
  );
}
