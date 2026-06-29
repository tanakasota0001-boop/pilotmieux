import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { MvvSection } from "@/components/company/MvvSection";
import { MessageSection } from "@/components/company/MessageSection";
import { companyProfile } from "@/data/company";

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "株式会社パイロットミューの会社情報、ミッション・ビジョン・バリュー、代表メッセージ、会社概要をご紹介します。",
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badgeContent={<><Sparkles className="h-3 w-3" />Company</>}
        badgeColorClass="bg-violet-50 text-brand-secondary"
        title="会社情報"
        accentColor="bg-violet-100/50"
      />

      <MvvSection />
      <MessageSection />

      {/* 会社概要 */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              Company Profile
            </span>
            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">会社概要</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <dl className="divide-y divide-slate-100">
              {companyProfile.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row px-6 py-5 sm:gap-6">
                  <dt className="text-sm font-bold text-slate-500 sm:w-1/4 shrink-0">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900 sm:mt-0 sm:w-3/4">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
