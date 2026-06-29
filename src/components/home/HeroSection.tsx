"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/og.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-20 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/90 to-slate-50" />
      </div>

      {/* グリッドアニメーション */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(to right, #4f46e5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* 装飾blob */}
      <div className="absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-indigo-200/25 to-purple-300/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-violet-200/15 to-pink-200/15 blur-3xl pointer-events-none" />

      {/* コンテンツ */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-brand-primary shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse text-indigo-500" />
          <span>中小企業の成長を、共に。</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-3xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
        >
          <span className="block mb-2 sm:mb-3">課題を可視化し、</span>
          <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
            成果と成長を共に創り続ける
          </span>
          <span className="block mt-2 sm:mt-3">伴走パートナー</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          パイロットミュー（pilotmieux）は、中小企業の複雑な課題を可視化し、
          解決策の設計・実行・定着までを共に行います。
          さらに、新たな事業やサービス、ブランドの創出まで伴走し、
          利益が生まれるところまで共に取り組みます。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200/70 hover:scale-[1.04] hover:shadow-indigo-300/50 transition-all duration-300"
          >
            お問合せはこちら
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:text-brand-primary hover:shadow-sm transition-all"
          >
            サービスを見る
          </Link>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
