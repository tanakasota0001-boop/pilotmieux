"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FadeUp,
  Stagger,
  SectionBlob,
  SectionHeading,
  PageShell,
  staggerItem,
} from "@/components/ui";

/* ── Case data ── */
const cases = [
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
  {
    id: "netas",
    company: "ネットアストーヨー住器株式会社",
    url: "https://www.rekurasu.co.jp/",
    industry: "住宅建材・リフォーム",
    location: "長野県松本市",
    tagline: "営業活動のプロセス効率化支援",
    gradient: "from-emerald-400 to-teal-500",
    borderColor: "border-emerald-200",
    bgAccent: "bg-emerald-50",
    textAccent: "text-emerald-600",
    supports: [
      "営業プロセスの可視化",
      "見積〜受注フローの効率化",
      "顧客対応のデジタル化",
      "営業活動の標準化・定着支援",
    ],
    overview:
      "創業68年を超える歴史を持つ、松本エリアの住宅建材・リフォームの老舗企業。LIXILフランチャイズ加盟店として、窓・玄関ドア・エクステリアの施工で地域トップクラスの実績を誇り、年間150件を超える施工事例を持つプロフェッショナル集団です。",
    approach: [
      "営業フロー全体のヒアリングと現状プロセスの可視化",
      "見積作成から受注までのボトルネック分析と改善設計",
      "顧客対応・案件管理のデジタル化による情報の一元管理",
      "営業スタッフが無理なく使える仕組みとしての定着支援",
      "効率化で生まれた時間を顧客対応品質の向上へ再投資",
    ],
    value:
      "68年にわたり地域のお客様から信頼を積み重ねてきた営業力を、デジタルの力でさらに強化するご支援をしています。効率化が目的ではなく、お客様一人ひとりへの対応品質を高めることを目指し、現場に寄り添いながら伴走しています。",
  },
];

export default function WorksPage() {
  return (
    <PageShell>
      {/* ── Header ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <SectionBlob position="right" colors="from-indigo-100/40 to-violet-100/20" />

        <div className="relative mx-auto max-w-4xl px-5">
          <SectionHeading
            tag="Works"
            title={
              <>
                導入実績・
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  ご支援事例
                </span>
              </>
            }
            sub="pilotmieuxは、地域に根差す企業の成長パートナーとして、経営課題の可視化から実行・定着までを伴走しています。"
          />
        </div>
      </section>

      {/* ── Case studies ── */}
      {cases.map((c, idx) => (
        <section
          key={c.id}
          className={`relative overflow-hidden py-16 sm:py-24 ${
            idx % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"
          }`}
        >
          <SectionBlob
            position={idx % 2 === 0 ? "left" : "right"}
            colors={
              idx % 2 === 0
                ? "from-sky-100/30 to-indigo-100/15"
                : "from-emerald-100/30 to-teal-100/15"
            }
          />

          <div className="relative mx-auto max-w-4xl px-5">
            {/* Company header */}
            <FadeUp>
              <div className={`rounded-2xl border ${c.borderColor} bg-white p-6 sm:p-8 shadow-sm`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white bg-gradient-to-r ${c.gradient}`}
                      >
                        CASE {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-xs font-medium ${c.textAccent}`}>
                        {c.industry}・{c.location}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                      {c.company}
                      <span className="ml-2 text-sm font-normal text-gray-400">様</span>
                    </h3>
                    <p className="mt-1.5 text-base sm:text-lg font-semibold text-gray-600">
                      — {c.tagline}
                    </p>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-1.5 shrink-0 rounded-full ${c.bgAccent} px-4 py-2 text-xs font-medium ${c.textAccent} transition-all hover:shadow-md`}
                  >
                    公式サイト
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Support tags */}
            <FadeUp delay={0.08}>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.supports.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full ${c.bgAccent} px-3.5 py-1.5 text-xs font-medium ${c.textAccent}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>

            {/* Content blocks */}
            <div className="mt-10 space-y-8">
              {/* Overview */}
              <FadeUp delay={0.12}>
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-gray-400">
                    <span className={`inline-block h-4 w-1 rounded-full bg-gradient-to-b ${c.gradient}`} />
                    企業概要
                  </h4>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                    {c.overview}
                  </p>
                </div>
              </FadeUp>

              {/* Approach */}
              <FadeUp delay={0.16}>
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-gray-400">
                    <span className={`inline-block h-4 w-1 rounded-full bg-gradient-to-b ${c.gradient}`} />
                    支援アプローチ
                  </h4>
                  <Stagger className="mt-4 space-y-3">
                    {c.approach.map((step, j) => (
                      <motion.div
                        key={j}
                        variants={staggerItem}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${c.gradient} text-[0.65rem] font-bold text-white shadow-sm`}
                        >
                          {j + 1}
                        </span>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                          {step}
                        </p>
                      </motion.div>
                    ))}
                  </Stagger>
                </div>
              </FadeUp>

              {/* Value */}
              <FadeUp delay={0.2}>
                <div className={`rounded-xl ${c.bgAccent} border ${c.borderColor} p-5 sm:p-6`}>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-gray-500">
                    <span className={`inline-block h-4 w-1 rounded-full bg-gradient-to-b ${c.gradient}`} />
                    ご支援の価値
                  </h4>
                  <p className="mt-3 text-sm sm:text-base leading-[1.85] text-gray-700 font-medium">
                    {c.value}
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="relative bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <FadeUp>
            <p className="text-sm text-gray-500">
              貴社の課題に合わせた支援プランをご提案します。
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-300/40 transition-all hover:scale-[1.04] hover:shadow-xl active:scale-[0.97]"
              >
                お問合せ・ご相談はこちら
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
