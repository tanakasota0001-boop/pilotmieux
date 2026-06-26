"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight,
  TrendingUp, 
  Settings, 
  Database, 
  Lightbulb, 
  Presentation,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const services = [
  {
    num: "01",
    title: "伴走型経営支援",
    description: "経営者の外部の右腕として、継続的に課題整理・壁打ち・実行支援を行います。",
    detail: "売上を伸ばしたい。利益を改善したい。AIやDXを進めたい。でも、何から始めるべきか分からない。そうした状態から、経営者との対話を通じて課題を整理し、優先順位をつけ、戦略ロードマップに落とし込みます。顧問契約を通じて会社の状況を深く理解し、そのうえで必要なスポット支援を組み合わせます。",
    tags: ["経営者の壁打ち", "経営課題の整理・優先順位付け", "売上・利益改善テーマの検討", "戦略ロードマップ作成"],
    icon: TrendingUp,
    color: "from-indigo-500 to-blue-600"
  },
  {
    num: "02",
    title: "業務改善支援",
    description: "属人化を解消し、誰でも回る現場づくりを支援します。",
    detail: "この人しか分からない業務がある。ベテランのノウハウが若手に伝わらない。作業時間や手戻りが多い。現場の状況が数字で見えない。こうした課題を整理し、業務フロー、工数、リードタイム、判断基準、ノウハウを見える化します。そのうえで、現場で使える仕組みとして実装し、生産性と利益の向上につなげます。",
    tags: ["課題整理・分析", "属人化解消", "ノウハウの可視化・伝承", "改善ツール提案・定着支援"],
    icon: Settings,
    color: "from-violet-500 to-purple-600"
  },
  {
    num: "03",
    title: "データ活用支援（AI・DX導入）",
    description: "AIやデジタル技術を、現場で使われる形にします。",
    detail: "AIを使いたいが、何に使えばいいか分からない。データはあるが、経営判断に使えていない。社長や一部の経営層だけが判断している。このような課題に対し、業務整理、データの見える化、ダッシュボード構築、生成AI活用、ツール定着まで支援します。データに基づいて判断できる状態をつくり、経営判断の権限委譲、生産性向上、利益改善につなげます。",
    tags: ["データ分析", "ダッシュボード構築支援", "業務プロセス改善", "AI・デジタルツール提案・定着支援"],
    icon: Database,
    color: "from-emerald-500 to-teal-600"
  },
  {
    num: "04",
    title: "新規事業・新規サービス開発支援",
    description: "経営者のアイデアや会社の強みを、売上につながる事業に変えます。",
    detail: "新しい収益源をつくりたい。自社の強みを活かしたサービスを作りたい。アイデアはあるが、事業化の進め方が分からない。このようなテーマに対し、市場性、顧客価値、収益モデル、拡販施策を整理し、実行可能な事業計画に落とし込みます。",
    tags: ["新規事業アイデア提案", "市場・顧客ニーズ分析", "新規サービス設計", "価格・収益モデル設計", "事業計画策定", "販売戦略策定"],
    icon: Lightbulb,
    color: "from-amber-500 to-orange-600"
  },
  {
    num: "05",
    title: "AI講演会・生成AI活用研修",
    description: "企業向けに、生成AIの講演会・研修を行います。",
    detail: "生成AIで何が変わるのか。自社の業務でどう使えるのか。社員にAI活用のきっかけを作りたい。このようなニーズに対し、生成AIの基本理解から具体的な業務活用例まで分かりやすく伝えます。",
    tags: ["AI研修・ワークショップ", "社内AI研修のサポート"],
    icon: Presentation,
    color: "from-rose-500 to-pink-600"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-slate-200/50">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#4f46e5 2px, transparent 2px)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-brand-primary"
          >
            <Sparkles className="h-3 w-3" />
            <span>Services</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl"
          >
            地方企業の可能性を、<br className="sm:hidden" />
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              実装力で成長に変える。
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto text-left rounded-2xl bg-slate-50/50 border border-slate-100 p-6 sm:p-8"
          >
            <p className="font-semibold text-slate-800 text-center sm:text-left">
              AI時代に、何から始めればいいのか分からない。<br className="sm:hidden" />
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
              顧問契約をベースに継続的に入り込みながら、
              経営支援、AI・DX導入、業務改善、データ活用、新規事業開発など、必要な支援を組み合わせ、
              提案だけで終わらず、現場で使われる仕組みとして実装します。
            </p>
            <p>
              目指すのは、会社が継続的に成長できる状態をつくること。
              データで判断できる組織をつくり、売上・利益につながる強い経営を支援します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* サービス一覧セクション */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.num}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300"
                >
                  {/* カードの端を飾るグラデーションライン */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${service.color}`} />
                  
                  <div className="pl-2 sm:pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* タイトル & 番号 */}
                      <div className="flex items-center gap-4">
                        <span className={`text-4xl sm:text-5xl font-black bg-gradient-to-br ${service.color} bg-clip-text text-transparent select-none opacity-80 group-hover:scale-105 transition-transform duration-300`}>
                          {service.num}
                        </span>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 group-hover:text-brand-primary transition-colors" />
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* リード文 */}
                    <p className="mt-4 text-base font-bold text-slate-800">
                      {service.description}
                    </p>

                    {/* 詳細文 */}
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {service.detail}
                    </p>

                    {/* タグリスト */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200/60 px-3.5 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-indigo-50 hover:text-brand-primary"
                        >
                          <CheckCircle2 className="h-3 w-3 text-slate-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

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
