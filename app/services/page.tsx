"use client";

import { motion } from "framer-motion";
import { FadeUp, SectionBlob, SectionHeading, PageShell } from "@/components/ui";

const services = [
  {
    number: "01",
    title: "伴走型経営支援",
    supports: [
      "経営者の壁打ち",
      "経営課題の整理・優先順位付け",
      "売上・利益改善テーマの検討",
      "戦略ロードマップ作成",
    ],
    description: `経営者の外部の右腕として、継続的に課題整理・壁打ち・実行支援を行います。
売上を伸ばしたい。利益を改善したい。AIやDXを進めたい。でも、何から始めるべきか分からない。
そうした状態から、経営者との対話を通じて課題を整理し、優先順位をつけ、戦略ロードマップに落とし込みます。
顧問契約を通じて会社の状況を深く理解し、そのうえで必要なスポット支援を組み合わせます。`,
    gradient: "from-indigo-400 to-blue-500",
  },
  {
    number: "02",
    title: "業務改善支援",
    supports: [
      "課題整理・分析",
      "属人化解消",
      "ノウハウの可視化・伝承",
      "改善ツール提案・定着支援",
    ],
    description: `属人化を解消し、誰でも回る現場づくりを支援します。
この人しか分からない業務がある。ベテランのノウハウが若手に伝わらない。作業時間や手戻りが多い。現場の状況が数字で見えない。
こうした課題を整理し、業務フロー、工数、リードタイム、判断基準、ノウハウを見える化します。
そのうえで、現場で使える仕組みとして実装し、生産性と利益の向上につなげます。`,
    gradient: "from-violet-400 to-purple-500",
  },
  {
    number: "03",
    title: "データ活用支援（AI・DX導入）",
    supports: [
      "データ分析",
      "ダッシュボード構築支援",
      "業務プロセス改善",
      "AI・デジタルツール提案・定着支援",
    ],
    description: `AIやデジタル技術を、現場で使われる形にします。
AIを使いたいが、何に使えばいいか分からない。データはあるが、経営判断に使えていない。社長や一部の経営層だけが判断している。
このような課題に対し、業務整理、データの見える化、ダッシュボード構築、生成AI活用、ツール定着まで支援します。
データに基づいて判断できる状態をつくり、経営判断の権限委譲、生産性向上、利益改善につなげます。`,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    number: "04",
    title: "新規事業・新規サービス開発支援",
    supports: [
      "新規事業アイデア提案",
      "市場・顧客ニーズ分析",
      "新規サービス設計",
      "価格・収益モデル設計",
      "事業計画策定",
      "販売戦略策定",
    ],
    description: `経営者のアイデアや会社の強みを、売上につながる事業に変えます。
新しい収益源をつくりたい。自社の強みを活かしたサービスを作りたい。アイデアはあるが、事業化の進め方が分からない。
このようなテーマに対し、市場性、顧客価値、収益モデル、拡販施策を整理し、実行可能な事業計画に落とし込みます。`,
    gradient: "from-amber-400 to-orange-500",
  },
  {
    number: "05",
    title: "AI講演会・生成AI活用研修",
    supports: [
      "AI研修・ワークショップ",
      "社内AI研修のサポート",
    ],
    description: `企業向けに、生成AIの講演会・研修を行います。
生成AIで何が変わるのか。自社の業務でどう使えるのか。社員にAI活用のきっかけを作りたい。
このようなニーズに対し、生成AIの基本理解から具体的な業務活用例まで分かりやすく伝えます。`,
    gradient: "from-rose-400 to-pink-500",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <SectionBlob position="right" colors="from-indigo-100/40 to-sky-100/20" />

        <div className="relative mx-auto max-w-4xl px-5">
          <SectionHeading
            tag="Services"
            title="地方企業の可能性を、実装力で成長に変える。"
            center={false}
          />

          <FadeUp delay={0.2}>
            <div className="mt-8 space-y-4 text-sm sm:text-base leading-relaxed text-gray-500">
              <p>
                AI時代に、何から始めればいいのか分からない。
                <br />
                課題は多いのに、優先順位を決めきれない。
              </p>
              <p>
                多くの中小企業は、優れた技術や現場力を持ちながら、
                属人化やデータ未活用によって、
                その強みを十分に利益へつなげきれていません。
              </p>
              <p>
                <strong className="text-gray-800">パイロットミューは、経営者の右腕として伴走します。</strong>
              </p>
              <p>
                顧問契約をベースに継続的に入り込みながら、
                経営支援、AI・DX導入、業務改善、データ活用、
                新規事業開発など、必要な支援を組み合わせ、
                提案だけで終わらず、
                現場で使われる仕組みとして実装します。
              </p>
              <p>
                目指すのは、会社が継続的に成長できる状態をつくること。
                <br />
                データで判断できる組織をつくり、
                売上・利益につながる強い経営を支援します。
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section className="relative py-16 sm:py-24 bg-[#f8fafc]">
        <SectionBlob position="left" colors="from-violet-100/30 to-pink-100/20" />

        <div className="relative mx-auto max-w-4xl px-5 space-y-6">
          {services.map((s, i) => (
            <FadeUp key={s.number} delay={i * 0.05}>
              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl border border-gray-200/60 bg-white p-6 sm:p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b ${s.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />

                <div className="pl-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-gray-100 group-hover:text-indigo-100 transition-colors">
                      {s.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{s.title}</h3>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.supports.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 space-y-2 text-sm leading-relaxed text-gray-500">
                    {s.description.split("\n").map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
