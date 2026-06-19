"use client";

import { useEffect, useState } from "react";
import { generateWhatsAppCSURL } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

export function WhatsAppFloat({ waNumber }: { waNumber: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={generateWhatsAppCSURL(waNumber)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat dengan kami via WhatsApp"
      className={cn(
        "group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 inline-flex items-center gap-3 rounded-full bg-wa text-white shadow-xl shadow-wa/30 hover:bg-wa-hover transition-all duration-300",
        "h-14 w-14 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <span className="relative flex h-14 w-14 sm:h-7 sm:w-7 items-center justify-center sm:relative">
        <span className="absolute inset-0 sm:hidden rounded-full bg-wa-hover animate-ping opacity-40" />
        <WhatsAppIcon className="h-6 w-6 sm:h-6 sm:w-6 relative" />
      </span>
      <span className="hidden sm:inline text-sm font-semibold">
        Chat dengan Kami
      </span>
    </a>
  );
}
