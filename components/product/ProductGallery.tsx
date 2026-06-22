"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export type GalleryImage = { id: string; url: string; alt: string };

export function ProductGallery({
  images,
  labels,
  accent,
  productName,
}: {
  images: GalleryImage[];
  labels: string[];
  accent: string;
  productName: string;
}) {
  const [active, setActive] = useState(0);
  if (images.length === 0) return null;

  const current = images[active];
  const goPrev = () =>
    setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () =>
    setActive((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div>
      <div
        className={cn(
          "relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br border border-brand-border group",
          accent,
        )}
      >
        {labels.length > 0 && (
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            {labels.map((l) => (
              <Badge key={l} variant="accent" className="shadow-sm">
                {l}
              </Badge>
            ))}
          </div>
        )}

        <Image
          key={current.id}
          src={current.url}
          alt={current.alt || `${productName} — gambar ${active + 1}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={active === 0}
          className="object-cover transition-opacity duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Gambar sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-brand-border shadow-sm opacity-0 group-hover:opacity-100 hover:bg-white text-brand-primary transition-opacity"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Gambar berikutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-brand-border shadow-sm opacity-0 group-hover:opacity-100 hover:bg-white text-brand-primary transition-opacity"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-brand-primary shadow-sm">
              {active + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.slice(0, 8).map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Lihat gambar ${i + 1}`}
              aria-current={active === i}
              className={cn(
                "relative aspect-square rounded-md overflow-hidden border-2 transition-all",
                active === i
                  ? "border-brand-primary shadow-sm"
                  : "border-brand-border opacity-70 hover:opacity-100 hover:border-brand-primary/40",
              )}
            >
              <Image
                src={img.url}
                alt={img.alt || `${productName} — thumbnail ${i + 1}`}
                fill
                sizes="100px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
