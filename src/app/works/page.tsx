import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { CaseStudyCard } from "@/components/works/CaseStudyCard";
import { PartnerCard } from "@/components/works/PartnerCard";
import { workCases, partners } from "@/data/works";

export const metadata: Metadata = {
  title: "導入実績",
  description:
    "pilotmieuxが支援してきた中小企業の導入実績・ご支援事例をご紹介します。経営課題の可視化から実行・定着まで伴走しています。",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badgeContent={<><Sparkles className="h-3 w-3" />Works</>}
        badgeColorClass="bg-sky-50 text-sky-600"
        title="導入実績・ご支援事例"
        description="pilotmieuxは、地域に根差す企業の成長パートナーとして、経営課題の可視化から実行・定着までを伴走しています。"
        accentColor="bg-sky-100/50"
      />

      {/* 事例詳細 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {workCases.map((work) => (
            <CaseStudyCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* パートナー一覧 */}
      <section id="partners" className="relative py-16 sm:py-24 bg-white border-t border-slate-200/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3.5 py-1 text-xs font-bold tracking-wider text-violet-600 uppercase">
              Partners
            </span>
            <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">支援企業様</h2>
            <p className="mt-2 text-sm text-slate-500">
              その他、ご支援させていただいている企業様をご紹介いたします。
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {partners.map((p) => (
              <PartnerCard key={p.id} partner={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 下部CTA */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/30">
        <div className="text-center max-w-xl mx-auto px-4">
          <p className="text-slate-700 font-semibold mb-6">
            貴社の課題に合わせた支援プランをご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-10 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-100 hover:scale-105 transition-transform"
          >
            お問合せ・ご相談はこちら
          </Link>
        </div>
      </section>
    </div>
  );
}
