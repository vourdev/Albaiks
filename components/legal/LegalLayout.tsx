import { Container, Section } from "@/components/ui/Container";

export function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <Section>
      <Container className="max-w-3xl">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-primary-light mb-3">
          Dokumen Legal
        </span>
        <h1 className="font-display text-4xl sm:text-5xl text-brand-primary font-light leading-tight">
          {title}
        </h1>
        <p className="mt-3 text-sm text-brand-text-muted">
          Terakhir diperbarui: {updatedAt}
        </p>
        <div className="mt-10 space-y-7 text-brand-text leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-brand-primary [&_h2]:font-medium [&_h2]:mt-2 [&_h2]:mb-3 [&_p]:text-brand-text-secondary [&_li]:text-brand-text-secondary [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:ml-5">
          {children}
        </div>
      </Container>
    </Section>
  );
}
