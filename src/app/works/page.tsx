"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight,
  ExternalLink,
  MapPin,
  CheckCircle2,
  Building,
  Sparkles,
  Award
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
      staggerChildren: 0.1
    }
  }
};

export default function WorksPage() {
  const approaches = [
    "現場ヒアリングを通じた課題の構造化と優先順位付け",
    "生産実績・品質検査データの一元化と可視化基盤の設計",
    "現場リーダーが日常的に参照できるKPIダッシュボードの構築",
    "データを「見る」から「使う」へ——意思決定プロセスへの組み込み支援",
    "現場スタッフへのデータ活用トレーニングと定着フォロー"
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-slate-200/50">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#4f46e5 2px, transparent 2px)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600"
          >
            <Sparkles className="h-3 w-3" />
            <span>Works</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-800 sm:text-5xl"
          >
            導入実績・ご支援事例
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-slate-500 text-sm sm:text-base leading-relaxed"
          >
            pilotmieuxは、地域に根差す企業の成長パートナーとして、
            経営課題の可視化から実行・定着までを伴走しています。
          </motion.p>
        </div>
      </section>

      {/* 事例詳細セクション */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-12 shadow-sm"
          >
            {/* 事例ヘッダー */}
            <div className="border-b border-slate-100 pb-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-50 px-3.5 py-1 text-xs font-bold tracking-wider text-sky-600 uppercase">
                  CASE 01
                </span>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Building className="h-3.5 w-3.5" />
                    精密板金加工メーカー
                  </span>
                  <span className="text-slate-200">|</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    長野県松本市
                  </span>
                </div>
              </div>
              
              <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
                株式会社タカノ 様
              </h2>
              <p className="mt-2 text-base font-extrabold text-sky-600">
                — 現場データ活用の伴走支援
              </p>

              <div className="mt-4">
                <a 
                  href="https://www.takano-s.co.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline underline-offset-4 group"
                >
                  公式サイトを開く
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* タグリスト */}
            <div className="my-8 flex flex-wrap gap-2">
              {[
                "生産データの可視化",
                "品質管理データの整備",
                "現場KPIダッシュボード構築",
                "データ活用の定着支援"
              ].map((tag) => (
                <span 
                  key={tag}
                  className="rounded-full bg-slate-50 border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 詳細コンテンツ */}
            <div className="space-y-12 text-[15px] leading-relaxed text-slate-700">
              
              {/* 企業概要 */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
                  企業概要
                </h3>
                <p className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 font-medium text-slate-600 text-sm">
                  大型・精密板金加工をコア技術に、ステンレスフレームユニットの多品種少量生産から量産まで対応する松本市の製造企業。最新鋭の設備と自動倉庫を擁し、サプライチェーンの中核を担う安定供給体制を構築されています。
                </p>
              </div>

              {/* 支援アプローチ（縦型タイムライン） */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
                  支援アプローチ
                </h3>
                <div className="relative border-l border-slate-200 ml-3.5 space-y-8 pl-6">
                  {approaches.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* タイムラインの丸 */}
                      <span className="absolute -left-[35px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 border-2 border-sky-500 text-[10px] font-bold text-sky-600 bg-white">
                        {idx + 1}
                      </span>
                      <p className="text-slate-800 font-bold text-base leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ご支援の価値 */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 sm:p-10 text-white shadow-xl">
                {/* 装飾の光 */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-500/20 blur-2xl"></div>
                
                <h3 className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-sky-400 mb-4">
                  <Award className="h-4.5 w-4.5" />
                  ご支援の価値
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-loose font-medium">
                  単なるツール導入ではなく、現場の方々が自らデータを活用し、改善アクションにつなげられる状態を目指して伴走しています。データに基づく判断が日常になることで、品質向上・生産性改善・リードタイム短縮といった成果を継続的に生み出す基盤づくりをご支援しています。
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 支援企業様リストセクション */}
      <section id="partners" className="relative py-16 sm:py-24 bg-white border-t border-slate-200/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3.5 py-1 text-xs font-bold tracking-wider text-violet-600 uppercase">
              Partners
            </span>
            <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">
              支援企業様
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              その他、ご支援させていただいている企業様をご紹介いたします。
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <motion.div 
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50/50 p-6 shadow-sm hover:shadow-md hover:border-slate-300 hover:bg-white transition-all"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-violet-100/40 to-purple-100/20 opacity-60 group-hover:scale-110 transition-transform"></div>
              
              <div className="relative">
                <span className="text-[10px] font-bold text-violet-600">住宅建材・リフォーム</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  ネットアストーヨー住器株式会社 <span className="text-xs font-normal text-slate-400">様</span>
                </h3>
                <a 
                  href="https://www.rekurasu.co.jp/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-violet-500 hover:text-violet-700 hover:underline underline-offset-4"
                >
                  公式サイトを開く
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
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
            className="inline-block rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-10 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-100 hover:scale-105 transition-transform"
            href="/contact"
          >
            お問合せ・ご相談はこちら
          </Link>
        </div>
      </section>

    </div>
  );
}
