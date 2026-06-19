import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth";
import { Sidebar } from "@/components/admin/Sidebar";

export const dynamic = "force-dynamic";

export default async function AuthedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-brand-bg">
      <Sidebar adminName={admin.name} />
      <div className="flex-1 min-w-0">
        <div className="px-5 sm:px-8 py-6 sm:py-10 max-w-6xl mx-auto">{children}</div>
      </div>
    </div>
  );
}
