import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { type Article } from "@/lib/articles";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/edukasi/${article.slug}`}
      className="group flex flex-col bg-brand-surface rounded-[8px] border border-brand-border overflow-hidden hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <div
        className={cn(
          "relative aspect-[3/2] bg-gradient-to-br flex items-center justify-center",
          article.accent,
        )}
      >
        <svg viewBox="0 0 200 130" className="w-3/5 h-3/5 opacity-50" aria-hidden>
          <path
            d="M50 100 Q40 70 60 50 Q90 30 130 50 Q160 70 150 100 Z"
            fill="#2D6A4F"
            opacity="0.4"
          />
          <path d="M70 95 L 100 50 L 130 95" stroke="#1A3C34" strokeWidth="2" fill="none" />
        </svg>
        <Badge variant="secondary" className="absolute top-4 left-4">
          {article.category}
        </Badge>
      </div>
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-3 text-xs text-brand-text-muted">
          <time>
            {new Date(article.publishedAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readingTime} min baca
          </span>
        </div>
        <h3 className="font-display text-xl text-brand-primary font-medium leading-tight group-hover:text-brand-primary-light transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-brand-text-secondary line-clamp-2">{article.excerpt}</p>
        <span className="mt-auto pt-2 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary">
          Baca selengkapnya
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
