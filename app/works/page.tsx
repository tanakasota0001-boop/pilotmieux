"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FadeUp,
  SectionHeading,
  PageShell,
} from "@/components/ui";

/* ================================================================
   A. DATA
   ================================================================ */

/* ── Detailed case studies (full write-up) ── */
const detailedCases = [
  {
    id: "takano",
    company: "株式会社タカノ",
    url: "https://www.takano-s.co.jp/",
    industry: "精密板金加工メーカー",
    location: "長野県松本市",
    tagline: "現場データ活用の伴走支援",
    gradient: "from-sky-400 to-blue-500",
    borderColor: "border-sky-200",
    bgAccent: "bg-sky-50",
    textAccent: "text-sky-600",
    supports: [
      "生産データの可視化",
      "品質管理データの整備",
      "現場KPIダッシュボード構築",
      "データ活用の定着支援",
    ],
    overview:
      "大型・精密板金加工をコア技術に、ステンレスフレームユニットの多品種少量生産から量産まで対応する松本市の製造企業。最新鋭の設備と自動倉庫を擁し、サプライチェーンの中核を担う安定供給体制を構築されています。",
    approach: [
      "現場ヒアリングを通じた課題の構造化と優先順位付け",
      "生産実績・品質検査データの一元化と可視化基盤の設計",
      "現場リーダーが日常的に参照できるKPIダッシュボードの構築",
      "データを「見る」から「使う」へ——意思決定プロセスへの組み込み支援",
      "現場スタッフへのデータ活用トレーニングと定着フォロー",
    ],
    value:
      "単なるツール導入ではなく、現場の方々が自らデータを活用し、改善アクションにつなげられる状態を目指して伴走しています。データに基づく判断が日常になることで、品質向上・生産性改善・リードタイム短縮といった成果を継続的に生み出す基盤づくりをご支援しています。",
  },
];

/* ── Partner companies (name + optional URL only) ── */
const partners = [
  {
    company: "ネットアストーヨー住器株式会社",
    url: "https://www.rekurasu.co.jp/",
  },
  /* ↓ 今後増えたらここに追加するだけでOK
  {
    company: '〇〇株式会社',
    url: 'https://example.com',
  },
  */
];

/* ================================================================
   B. PAGE
   ================================================================ */
export default function WorksPage() {
  return (
    <PageShell>
      {/* ── Header ── */}
      <SectionHeading
        tag="Works"
        title={
          <>
            導入実績・
            <br className="sm:hidden" />
            ご支援事例
          </>
        }
        sub="pilotmieuxは、地域に根差す企業の成長パートナーとして、経営課題の可視化から実行・定着までを伴走しています。"
      />

      <div className="mx-auto mt-20 max-w-4xl space-y-28">

        {/* ═══════════════════════════════════════
            SECTION 1 — 詳細ケーススタディ
            ═══════════════════════════════════════ */}
        {detailedCases.map((c, idx) => (
          <FadeUp key={c.id}>
            <section
              className={`rounded-3xl border ${c.borderColor} bg-white p-8 shadow-md sm:p-12`}
            >
              {/* Company header */}
              <div className="mb-8">
                <span
                  className={`inline-block rounded-full bg-gradient-to-r ${c.gradient} px-3 py-0.5 text-xs font-bold tracking-wider text-white`}
                >
                  CASE {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm text-slate-500">
                  {c.industry}・{c.location}
                </p>
                <h4 className="mt-1 text-2xl font-extrabold text-slate-800">
                  {c.company} 様
                </h4>
                <p className={`mt-1 text-base font-medium ${c.textAccent}`}>
                  — {c.tagline}
                </p>
              </div>

              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mb-8 inline-flex items-center gap-1 text-sm font-semibold ${c.textAccent} underline underline-offset-4`}
              >
                公式サイト&nbsp;↗
              </a>

              {/* Support tags */}
              <div className="mb-10 flex flex-wrap gap-2">
                {c.supports.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full ${c.bgAccent} px-3 py-1 text-xs font-medium ${c.textAccent}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content blocks */}
              <div className="space-y-10 text-[15px] leading-relaxed text-slate-700">
                {/* Overview */}
                <div>
                  <h5 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-400">
                    企業概要
                  </h5>
                  <p>{c.overview}</p>
                </div>

                {/* Approach */}
                <div>
                  <h5 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                    支援アプローチ
                  </h5>
                  {c.approach.map((step, j) => (
                    <div key={j} className="mb-3 flex items-start gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${c.gradient} text-xs font-bold text-white`}
                      >
                        {j + 1}
                      </span>
                      <p className="pt-0.5">{step}</p>
                    </div>
                  ))}
                </div>

                {/* Value */}
                <div
                  className={`rounded-xl border-l-4 ${c.borderColor} ${c.bgAccent} p-5`}
                >
                  <h5 className="mb-2 text-sm font-bold uppercase tracking-widest text-slate-400">
                    ご支援の価値
                  </h5>
                  <p>{c.value}</p>
                </div>
              </div>
            </section>
          </FadeUp>
        ))}

        {/* ═══════════════════════════════════════
            SECTION 2 — 支援企業様一覧
            ═══════════════════════════════════════ */}
        <div id="partners">
          <FadeUp>
            <div className="mb-10 text-center">
              <span className="inline-block rounded-full bg-gradient-to-r from-violet-400 to-purple-500 px-4 py-1 text-xs font-bold tracking-wider text-white">
                Partners
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-slate-800 sm:text-3xl">
                支援企業様
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                その他、ご支援させていただいている企業様をご紹介いたします。
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2">
            {partners.map((p, i) => (
              <FadeUp key={p.company} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                  {/* Decorative accent */}
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-violet-100 to-purple-50 opacity-60 transition-transform duration-300 group-hover:scale-125" />

                  <div className="relative">
                    <h4 className="text-lg font-bold text-slate-800">
                      {p.company}
                      <span className="ml-1 text-base font-normal text-slate-400">
                        様
                      </span>
                    </h4>

                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-violet-500 underline underline-offset-4 transition-colors duration-200 hover:text-violet-700"
                      >
                        公式サイト&nbsp;↗
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            CTA
            ═══════════════════════════════════════ */}
        <FadeUp>
          <div className="text-center">
            <p className="mb-6 text-lg text-slate-600">
              貴社の課題に合わせた支援プランをご提案します。
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-10 py-4 text-sm font-bold text-white shadow-lg transition hover:scale-105"
            >
              お問合せ・ご相談はこちら
            </Link>
          </div>
        </FadeUp>
      </div>
    </PageShell>
  );
}
