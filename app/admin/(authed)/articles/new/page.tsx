import { PageHeader } from "@/components/admin/PageHeader";
import { ArticleForm } from "@/components/admin/ArticleForm";
import { createArticleAction } from "../actions";

export default function NewArticlePage() {
  return (
    <>
      <PageHeader
        title="Artikel Baru"
        breadcrumb={[
          { label: "Admin", href: "/admin" },
          { label: "Edukasi", href: "/admin/articles" },
          { label: "Baru" },
        ]}
      />
      <ArticleForm action={createArticleAction} mode="create" />
    </>
  );
}
