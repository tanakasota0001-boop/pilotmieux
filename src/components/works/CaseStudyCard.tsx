"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Building, MapPin, Award, CheckCircle2 } from "lucide-react";
import { type WorkCase } from "@/data/works";

type Props = { work: WorkCase };

export function CaseStudyCard({ work }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-12 shadow-sm"
    >
      {/* ヘッダー */}
      <div className="border-b border-slate-100 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-sky-50 px-3.5 py-1 text-xs font-bold tracking-wider text-sky-600 uppercase">
            {work.caseNum}
          </span>
          <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
            <span className="flex items-center gap-1">
              <Building className="h-3.5 w-3.5" />
              {work.industry}
            </span>
            <span className="text-slate-200">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {work.location}
            </span>
          </div>
        </div>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
          {work.company} 様
        </h2>
        <p className="mt-2 text-base font-extrabold text-sky-600">— {work.subtitle}</p>
        <div className="mt-4">
          <a
            href={work.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700 hover:underline underline-offset-4 group"
          >
            公式サイトを開く
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* タグ */}
      <div className="my-8 flex flex-wrap gap-2">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-50 border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 詳細 */}
      <div className="space-y-12 text-[15px] leading-relaxed text-slate-700">
        {/* 企業概要 */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
            企業概要
          </h3>
          <p className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 font-medium text-slate-600 text-sm">
            {work.overview}
          </p>
        </div>

        {/* 支援アプローチ（タイムライン） */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">
            支援アプローチ
          </h3>
          <div className="relative border-l border-slate-200 ml-3.5 space-y-8 pl-6">
            {work.approaches.map((step, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[35px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-sky-500 bg-white text-[10px] font-bold text-sky-600">
                  {idx + 1}
                </span>
                <p className="text-slate-800 font-bold text-base leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ご支援の価値 */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 sm:p-10 text-white shadow-xl">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky-500/20 blur-2xl pointer-events-none" />
          <h3 className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-sky-400 mb-4">
            <Award className="h-4 w-4" />
            ご支援の価値
          </h3>
          <p className="text-slate-200 text-sm sm:text-base leading-loose font-medium">
            {work.valueStatement}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
