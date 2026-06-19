import { cn } from "@/lib/utils";

type Variant = "olive" | "coconut" | "ginger";

export function ProductIllustration({
  variant,
  className,
}: {
  variant: Variant;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full h-full flex items-center justify-center overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* botanical accents */}
        <g opacity="0.18" stroke="#2D6A4F" strokeWidth="1.3" fill="none">
          <path d="M40 320 Q90 280 60 220" />
          <path d="M60 240 Q80 230 95 240" />
          <path d="M55 270 Q75 260 90 275" />
          <path d="M360 90 Q310 130 340 190" />
          <path d="M345 130 Q330 130 320 140" />
          <path d="M345 165 Q325 162 315 175" />
        </g>

        {variant === "olive" && (
          <g>
            <ellipse cx="200" cy="370" rx="120" ry="10" fill="#0000000A" />
            <path
              d="M200 110 Q230 110 240 140 L240 320 Q240 350 200 350 Q160 350 160 320 L160 140 Q170 110 200 110 Z"
              fill="#F4F0E8"
              stroke="#2D6A4F"
              strokeWidth="1.5"
            />
            <rect x="178" y="90" width="44" height="22" rx="3" fill="#1A3C34" />
            <rect x="170" y="160" width="60" height="80" rx="4" fill="#FAFAF7" stroke="#2D6A4F" strokeWidth="1" />
            <text x="200" y="195" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#1A3C34" fontWeight="500">ALBAIKS</text>
            <text x="200" y="215" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#2D6A4F" letterSpacing="2">OLIVE OIL</text>
            <ellipse cx="195" cy="230" rx="6" ry="9" fill="#2D6A4F" />
            <ellipse cx="205" cy="232" rx="6" ry="9" fill="#74C69D" opacity="0.7" />
            <path d="M195 220 L185 210 M205 222 L213 212" stroke="#2D6A4F" strokeWidth="1.2" />
          </g>
        )}

        {variant === "coconut" && (
          <g>
            <ellipse cx="200" cy="370" rx="120" ry="10" fill="#0000000A" />
            <path
              d="M150 130 Q150 110 200 110 Q250 110 250 130 L250 330 Q250 355 200 355 Q150 355 150 330 Z"
              fill="#FAFAF7"
              stroke="#2D6A4F"
              strokeWidth="1.5"
            />
            <rect x="170" y="90" width="60" height="24" rx="3" fill="#1A3C34" />
            <rect x="165" y="155" width="70" height="90" rx="4" fill="#F4F0E8" stroke="#C9973A" strokeWidth="1" />
            <text x="200" y="195" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#1A3C34" fontWeight="500">ALBAIKS</text>
            <text x="200" y="215" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#C9973A" letterSpacing="2">VCO</text>
            <text x="200" y="232" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#6B7280">VIRGIN COCONUT</text>
            <circle cx="195" cy="265" r="10" fill="#F4F0E8" stroke="#2D6A4F" strokeWidth="1.2" />
            <path d="M192 263 Q195 260 198 263 M188 265 Q195 270 202 265" stroke="#2D6A4F" strokeWidth="1" fill="none" />
            <path d="M210 258 Q220 252 222 262 Q228 256 226 268" stroke="#2D6A4F" strokeWidth="1" fill="none" />
          </g>
        )}

        {variant === "ginger" && (
          <g>
            <ellipse cx="200" cy="370" rx="120" ry="10" fill="#0000000A" />
            <path
              d="M140 150 L260 150 L255 350 Q255 360 245 360 L155 360 Q145 360 145 350 Z"
              fill="#F4F0E8"
              stroke="#C9973A"
              strokeWidth="1.5"
            />
            <path d="M140 150 L260 150 L260 130 Q260 120 250 120 L150 120 Q140 120 140 130 Z" fill="#1A3C34" />
            <rect x="160" y="175" width="80" height="100" rx="4" fill="#FAFAF7" stroke="#2D6A4F" strokeWidth="1" />
            <text x="200" y="215" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#1A3C34" fontWeight="500">ALBAIKS</text>
            <text x="200" y="235" textAnchor="middle" fontFamily="serif" fontSize="9" fill="#C9973A" letterSpacing="2">JAHE MERAH</text>
            <text x="200" y="252" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fill="#6B7280">SERBUK ALAMI</text>
            <path
              d="M180 295 Q175 305 185 312 Q195 318 205 315 Q220 318 222 305 Q220 295 210 295 Q200 290 190 293 Z"
              fill="#C9973A"
              opacity="0.5"
            />
            <path
              d="M185 302 Q190 308 200 308 Q210 308 215 304"
              stroke="#1A3C34"
              strokeWidth="0.8"
              fill="none"
            />
          </g>
        )}

        <g opacity="0.4" stroke="#2D6A4F" strokeWidth="1" fill="none">
          <path d="M320 320 Q340 310 360 320" />
          <path d="M325 310 L320 320 L330 322" />
          <path d="M350 312 L360 320 L355 330" />
        </g>
      </svg>
    </div>
  );
}
