"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  badgeContent: ReactNode; // アイコン込みのJSXをそのまま受け取る
  badgeColorClass?: string;
  title: string;
  titleHighlight?: string; // グラデーションにする文字列
  description?: string;
  accentColor?: string; // blur circleの色
};

/**
 * 各内部ページ（Services/Works/Company/Members等）で共用するヒーローセクション。
 * タイトル・バッジ・説明文を渡すだけで統一レイアウトが生成される。
 * badgeContent には <><Sparkles /> Services</> のようなJSXを渡す。
 */
export function PageHero({
  badgeContent,
  badgeColorClass = "bg-indigo-50 text-brand-primary",
  title,
  titleHighlight,
  description,
  accentColor = "bg-indigo-100/50",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-slate-200/50">
      {/* ドットグリッド背景 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#4f46e5 2px, transparent 2px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* アクセントblob */}
      <div
        className={`absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl ${accentColor}`}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-5 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold ${badgeColorClass}`}
        >
          {badgeContent}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-black tracking-tight text-slate-800 sm:text-5xl leading-tight"
        >
          {titleHighlight ? (
            <>
              {title.split(titleHighlight)[0]}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                {titleHighlight}
              </span>
              {title.split(titleHighlight)[1]}
            </>
          ) : (
            title
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-slate-500 text-sm sm:text-base leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
