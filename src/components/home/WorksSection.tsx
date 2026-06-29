"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, ChevronRight } from "lucide-react";

export function WorksSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-white border-t border-slate-200/50 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-slate-50 opacity-50 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-brand-primary">
            <Sparkles className="h-3 w-3" />
            Works
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            導入実績
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500">
            地域に根差す企業の成長パートナーとして、データと実践を武器に数々の支援を行っています。
          </p>
        </div>

        {/* カード */}
        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* タカノ様 */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-white p-8 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="inline-block rounded-md bg-sky-50 px-2.5 py-1 text-[10px] font-bold tracking-wider text-sky-600 uppercase">
                  精密板金加工メーカー
                </span>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  長野県松本市
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 leading-tight">
                株式会社タカノ{" "}
                <span className="text-sm font-normal text-slate-400">様</span>
              </h3>
              <p className="mt-2 text-sm text-sky-600 font-bold">— 現場データ活用の伴走支援</p>
              <div className="mt-5 space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-4">
                <div className="flex gap-2">
                  <span className="font-bold text-slate-800 shrink-0 w-12">課題:</span>
                  <span>生産データや品質管理データが属人化し、有効に活用しきれていなかった</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold text-sky-600 shrink-0 w-12">支援:</span>
                  <span>現場データの可視化基盤設計、KPIダッシュボード構築、データ活用の伴走・定着トレーニング</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-medium">生産管理・品質管理・DX推進</span>
              <Link
                href="/works"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-brand-primary-hover group"
              >
                詳しく見る
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* ネットアストーヨー様 */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col justify-between rounded-2xl border border-violet-100/80 bg-white p-8 shadow-sm hover:shadow-lg hover:border-violet-200 transition-all"
          >
            <div>
              <div className="mb-5">
                <span className="inline-block rounded-full bg-gradient-to-r from-violet-400 to-purple-500 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                  住宅建材・リフォーム
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                ネットアストーヨー住器株式会社{" "}
                <span className="text-sm font-normal text-slate-400">様</span>
              </h3>
              <p className="mt-2 text-sm text-violet-600 font-semibold">
                — 経営・業務のDX支援パートナー
              </p>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                住まいのリフォームや建材提供を行う企業様に対し、現場業務の属人化解消や、
                デジタルツールを活用した効率化・定着化をトータルでサポートしております。
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100">
              <Link
                href="/works#partners"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-secondary hover:text-brand-secondary group"
              >
                詳しく見る
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/works"
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-primary-hover group"
          >
            すべての実績を見る
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
