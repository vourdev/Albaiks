import { PageHeader } from "@/components/admin/PageHeader";
import { SiteSettingsForm, PasswordForm } from "@/components/admin/SettingsForms";
import { getSiteSettings } from "@/lib/settings";

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  const { ok } = await searchParams;
  const settings = await getSiteSettings();

  return (
    <>
      <PageHeader
        title="Pengaturan"
        description="Atur identitas brand, nomor WhatsApp, dan kredensial admin."
      />
      {ok === "updated" && (
        <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
          ✓ Pengaturan berhasil disimpan.
        </div>
      )}

      <SiteSettingsForm
        values={{
          siteName: settings.siteName,
          tagline: settings.tagline,
          description: settings.description,
          email: settings.email,
          city: settings.city,
          serviceHours: settings.serviceHours,
          whatsappNumber: settings.whatsappNumber,
          whatsappCSNumber: settings.whatsappCSNumber,
        }}
      />

      <div className="mt-10">
        <h2 className="font-display text-2xl text-brand-primary font-medium mb-2">
          Keamanan Akun
        </h2>
        <p className="text-sm text-brand-text-secondary mb-5">
          Ubah kata sandi admin secara berkala untuk menjaga keamanan akun.
        </p>
        <div className="rounded-xl border border-brand-border bg-white p-6">
          <PasswordForm />
        </div>
      </div>
    </>
  );
}
