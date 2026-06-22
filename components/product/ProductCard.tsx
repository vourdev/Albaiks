import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { type Product, startingPrice } from "@/lib/products";
import { Badge } from "@/components/ui/Badge";
import { ProductIllustration } from "@/components/ui/ProductIllustration";
import { formatRupiah, cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const price = startingPrice(product);
  const hero = product.images[0];
  const knownIllustrations = ["olive", "coconut", "ginger"] as const;
  const illustrationVariant = (knownIllustrations as readonly string[]).includes(
    product.image,
  )
    ? (product.image as (typeof knownIllustrations)[number])
    : "olive";

  return (
    <Link
      href={`/produk/${product.slug}`}
      className="group flex flex-col rounded-lg border border-brand-border bg-brand-surface overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <div
        className={cn(
          "relative aspect-square bg-gradient-to-br",
          product.accent,
        )}
      >
        {product.labels[0] && (
          <Badge variant="accent" className="absolute top-3 left-3 z-10 shadow-sm">
            {product.labels[0]}
          </Badge>
        )}
        {hero ? (
          <Image
            src={hero.url}
            alt={hero.alt || product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProductIllustration
            variant={illustrationVariant}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="text-xs uppercase tracking-[0.15em] text-brand-text-muted">
          {product.category}
        </span>
        <h3 className="font-sans text-lg font-semibold text-brand-text leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-brand-text-secondary line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="mt-3 flex items-end justify-between pt-2">
          <div>
            <p className="text-xs text-brand-text-muted">Mulai dari</p>
            <p className="font-display text-2xl font-semibold text-brand-primary">
              {formatRupiah(price)}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary-light group-hover:text-brand-primary transition-colors">
            Lihat
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
