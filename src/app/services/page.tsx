import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceList } from "@/components/services/ServiceList";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "pilotmieuxのサービス一覧。伴走型経営支援・業務改善・データ活用・新規事業開発・AI研修など、中小企業の成長を一貫して支援します。",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badgeContent={<><Sparkles className="h-3 w-3" />Services</>}
        badgeColorClass="bg-indigo-50 text-brand-primary"
        title="地方企業の可能性を、実装力で成長に変える。"
        titleHighlight="実装力で成長に変える。"
        accentColor="bg-indigo-100/50"
      />

      {/* リード文セクション */}
      <section className="bg-white border-b border-slate-200/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed rounded-2xl bg-slate-50/50 border border-slate-100 p-6 sm:p-8">
            <p className="font-bold text-slate-800 text-base">
              AI時代に、何から始めればいいのか分からない。
              <br className="sm:hidden" />
              課題は多いのに、優先順位を決めきれない。
            </p>
            <p>
              多くの中小企業は、優れた技術や現場力を持ちながら、
              属人化やデータ未活用によって、その強みを十分に利益へつなげきれていません。
            </p>
            <p className="font-bold text-slate-900 border-l-4 border-brand-primary pl-4">
              パイロットミューは、経営者の右腕として伴走します。
            </p>
            <p>
              顧問契約をベースに継続的に入り込みながら、経営支援、AI・DX導入、業務改善、データ活用、
              新規事業開発など、必要な支援を組み合わせ、提案だけで終わらず、
              現場で使われる仕組みとして実装します。
            </p>
            <p>
              目指すのは、会社が継続的に成長できる状態をつくること。
              データで判断できる組織をつくり、売上・利益につながる強い経営を支援します。
            </p>
          </div>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ServiceList />

          <div className="mt-16 text-center">
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              ご支援プランや進め方について、まずはお話を聞かせてください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform"
            >
              無料相談・お問合せへ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
