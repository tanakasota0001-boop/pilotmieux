"use client";

import Image from "next/image";
import { MessageSquareQuote } from "lucide-react";
import { ceoMessage } from "@/data/company";

export function MessageSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-200/50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            Message
          </span>
          <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">代表メッセージ</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* 代表者 */}
          <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <Image
                src={ceoMessage.image}
                alt={`${ceoMessage.name}, ${ceoMessage.role}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-slate-800">{ceoMessage.name}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                {ceoMessage.role}
              </p>
            </div>
          </div>

          {/* メッセージ本文 */}
          <div className="flex-grow space-y-5 text-slate-600 text-sm leading-relaxed">
            <p className="font-bold text-slate-900 text-base flex items-start gap-2">
              <MessageSquareQuote className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
              <span>
                「対話を通じて経営の本質を見つけ、成長の道筋をともに描く」というMissionを掲げ、
                挑戦する企業の右腕となることを目指して設立しました。
              </span>
            </p>
            {ceoMessage.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {/* 社名由来 */}
            <div className="mt-8 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 p-5">
              <p className="text-xs font-bold text-brand-primary">社名について</p>
              <p className="mt-2 text-xs text-slate-700 font-medium leading-relaxed">
                {ceoMessage.companyNameOrigin}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
