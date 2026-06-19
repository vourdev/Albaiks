import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-cream text-brand-primary mb-5">
        <FileQuestion className="h-7 w-7" />
      </div>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-2">
        404 · Admin
      </span>
      <h1 className="font-display text-4xl text-brand-primary font-light mb-2">
        Halaman admin tidak ditemukan
      </h1>
      <p className="text-brand-text-secondary max-w-md mb-7">
        Halaman yang Anda buka tidak ada atau sudah dihapus. Periksa kembali
        URL atau kembali ke dashboard.
      </p>
      <Button asChild variant="primary">
        <Link href="/admin">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Dashboard
        </Link>
      </Button>
    </div>
  );
}
