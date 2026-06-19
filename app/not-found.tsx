import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-3">
        404
      </span>
      <h1 className="font-display text-5xl sm:text-6xl text-brand-primary font-light">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-4 text-brand-text-secondary max-w-md mx-auto">
        Sepertinya halaman yang Anda cari sudah dipindahkan atau tidak ada.
      </p>
      <div className="mt-8 flex gap-3 justify-center">
        <Button asChild variant="primary">
          <Link href="/">Kembali ke Beranda</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/produk">Lihat Produk</Link>
        </Button>
      </div>
    </Container>
  );
}
