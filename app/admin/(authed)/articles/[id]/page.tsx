import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PageHeader } from "@/components/admin/PageHeader";
import { ArticleForm } from "@/components/admin/ArticleForm";
import { updateArticleAction, deleteArticleAction } from "../actions";

export default async function EditArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ ok?: string }>;
}) {
  const { id } = await params;
  const { ok } = await searchParams;
  const article = await prisma.article.findUnique({ where: { id } });
  if (!article) notFound();

  const content = Array.isArray(article.content)
    ? (article.content as { heading: string; body: string }[])
    : [];

  const action = updateArticleAction.bind(null, id);
  const del = deleteArticleAction.bind(null, id);

  return (
    <>
      <PageHeader
        title="Edit Artikel"
        description={article.title}
        breadcrumb={[
          { label: "Admin", href: "/admin" },
          { label: "Edukasi", href: "/admin/articles" },
          { label: article.title },
        ]}
      />
      {(ok === "updated" || ok === "created") && (
        <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
          ✓ {ok === "created" ? "Artikel berhasil dibuat." : "Perubahan tersimpan."}
        </div>
      )}
      <ArticleForm
        mode="edit"
        action={action}
        deleteAction={del}
        values={{
          slug: article.slug,
          title: article.title,
          excerpt: article.excerpt,
          category: article.category,
          readingTime: article.readingTime,
          accent: article.accent,
          published: article.published,
          content,
        }}
      />
    </>
  );
}
