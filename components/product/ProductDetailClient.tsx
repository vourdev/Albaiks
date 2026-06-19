"use client";

import { useState } from "react";
import { Minus, Plus, MessageCircleQuestion, Share2, Check } from "lucide-react";
import { type Product } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  generateWhatsAppOrderURL,
  generateWhatsAppInquiryURL,
} from "@/lib/whatsapp";
import { formatRupiah } from "@/lib/utils";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "deskripsi", label: "Deskripsi" },
  { id: "manfaat", label: "Manfaat" },
  { id: "komposisi", label: "Komposisi & Bahan" },
  { id: "cara-pakai", label: "Cara Penggunaan" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function ProductOrderPanel({
  product,
  waNumber,
}: {
  product: Product;
  waNumber: string;
}) {
  const [variantIdx, setVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  const variant = product.variants[variantIdx];
  const total = variant.price * quantity;

  const orderUrl = generateWhatsAppOrderURL({
    productName: product.name,
    variant: variant.label,
    quantity,
    waNumber,
  });
  const inquiryUrl = generateWhatsAppInquiryURL(product.name, waNumber);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.shortDescription,
          url,
        });
        return;
      } catch {
        /* fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-text-muted">
          {product.category}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-primary font-medium leading-tight">
          {product.name}
        </h1>
        <p className="text-base text-brand-text-secondary leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      <div className="flex items-baseline gap-3 pb-5 border-b border-brand-border">
        <span className="font-display text-4xl font-semibold text-brand-primary">
          {formatRupiah(variant.price)}
        </span>
        <span className="text-sm text-brand-text-muted">
          / {variant.label}
        </span>
      </div>

      <div>
        <p className="text-sm font-medium text-brand-text mb-3">Pilih Varian</p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v, i) => (
            <button
              key={v.label}
              onClick={() => setVariantIdx(i)}
              className={cn(
                "px-5 h-11 rounded-full text-sm font-medium transition-all border-2",
                variantIdx === i
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-brand-border bg-white text-brand-text-secondary hover:border-brand-primary hover:text-brand-primary",
              )}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-brand-text mb-3">Jumlah</p>
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center rounded-[6px] border border-brand-border bg-white">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              aria-label="Kurangi jumlah"
              className="h-11 w-11 inline-flex items-center justify-center text-brand-primary hover:bg-brand-cream disabled:opacity-40 disabled:cursor-not-allowed rounded-l-[6px]"
            >
              <Minus className="h-4 w-4" />
            </button>
            <input
              type="number"
              min={1}
              max={99}
              value={quantity}
              onChange={(e) => {
                const v = parseInt(e.target.value, 10);
                if (Number.isNaN(v)) return setQuantity(1);
                setQuantity(Math.max(1, Math.min(99, v)));
              }}
              className="h-11 w-14 text-center font-medium text-brand-text border-x border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-secondary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              aria-label="Jumlah pesanan"
            />
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              disabled={quantity >= 99}
              aria-label="Tambah jumlah"
              className="h-11 w-11 inline-flex items-center justify-center text-brand-primary hover:bg-brand-cream disabled:opacity-40 disabled:cursor-not-allowed rounded-r-[6px]"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="text-sm text-brand-text-secondary">
            <p className="text-xs text-brand-text-muted">Subtotal</p>
            <p className="font-semibold text-brand-text">{formatRupiah(total)}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <Button asChild size="xl" variant="whatsapp" className="w-full text-base">
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Pesan ${product.name} ${variant.label} via WhatsApp`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pesan via WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary" className="w-full">
          <a href={inquiryUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircleQuestion className="h-4 w-4" />
            Tanya tentang Produk
          </a>
        </Button>
        <button
          type="button"
          onClick={handleShare}
          className="self-start inline-flex items-center gap-2 text-sm text-brand-text-secondary hover:text-brand-primary mt-1"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-brand-success" />
              Link disalin
            </>
          ) : (
            <>
              <Share2 className="h-4 w-4" />
              Bagikan produk
            </>
          )}
        </button>
      </div>

      <div className="mt-2 flex items-start gap-3 rounded-[8px] bg-brand-cream/70 border border-brand-border p-4">
        <span className="text-xl" aria-hidden>
          🚚
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-text">
            Pengiriman ke seluruh Indonesia
          </p>
          <p className="text-xs text-brand-text-secondary mt-0.5">
            Via JNE, J&T, dan SiCepat. Dikemas aman dan rapi.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<TabId>("deskripsi");

  return (
    <div>
      <div
        role="tablist"
        className="flex flex-wrap gap-1 border-b border-brand-border"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "relative px-5 h-12 text-sm font-medium transition-colors border-b-2 -mb-px",
              active === t.id
                ? "border-brand-primary text-brand-primary"
                : "border-transparent text-brand-text-secondary hover:text-brand-primary",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="pt-8">
        {active === "deskripsi" && (
          <div className="prose prose-stone max-w-3xl">
            <p className="text-lg text-brand-text-secondary leading-relaxed">
              {product.description}
            </p>
          </div>
        )}
        {active === "manfaat" && (
          <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl">
            {product.benefits.map((b) => (
              <li
                key={b}
                className="flex gap-3 p-4 bg-brand-cream/50 rounded-[8px] border border-brand-border"
              >
                <Check className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className="text-brand-text leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        )}
        {active === "komposisi" && (
          <div className="max-w-3xl space-y-4">
            <div className="rounded-[8px] border border-brand-border p-6 bg-white">
              <p className="text-xs text-brand-text-muted uppercase tracking-wider mb-2">
                Komposisi
              </p>
              <p className="font-display text-2xl text-brand-primary font-medium">
                {product.composition}
              </p>
            </div>
            <p className="text-sm text-brand-text-secondary leading-relaxed">
              SKU: <span className="font-medium text-brand-text">{product.sku}</span>
              {" · "}Tanpa pengawet, tanpa pewarna, tanpa bahan tambahan.
            </p>
          </div>
        )}
        {active === "cara-pakai" && (
          <ol className="max-w-3xl space-y-4">
            {product.usage.map((u, i) => (
              <li key={u} className="flex gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary text-white font-display text-lg flex-shrink-0">
                  {i + 1}
                </span>
                <p className="pt-1 text-brand-text leading-relaxed">{u}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
