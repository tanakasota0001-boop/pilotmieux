"use client";

import { motion, type Variants } from "framer-motion";
import { Search, PenTool, Users2, ChevronRight } from "lucide-react";

const pillars = [
  {
    num: "01",
    en: "STRUCTURING",
    ja: "構造化",
    desc: "丁寧なヒアリングと整理・可視化を通じて、課題の本質を明らかにします。",
    detail:
      "経営や現場業務の本質的な課題を明らかにします。同時に潜在的な成長機会や新たな価値の種も見える化します。",
    icon: Search,
    gradient: "from-sky-400 to-brand-primary",
    hoverBorder: "hover:border-sky-200",
    hoverGlow: "bg-sky-400/20",
    linkColor: "text-brand-primary",
  },
  {
    num: "02",
    en: "DESIGNING",
    ja: "設計",
    desc: "改善策にとどまらず、高収益モデルにつながる打ち手を設計します。",
    detail:
      "現場で実行できる形に落とし込み、成果につながる具体的な打ち手を描きます。新規サービス立ち上げ、業務改革、ブランド再構築など、企業の次の収益の柱を共に形にします。",
    icon: PenTool,
    gradient: "from-brand-primary to-brand-secondary",
    hoverBorder: "hover:border-brand-primary/20",
    hoverGlow: "bg-brand-primary/20",
    linkColor: "text-brand-secondary",
  },
  {
    num: "03",
    en: "PARTNERING",
    ja: "伴走",
    desc: "成果が出るまで、そして成果が続く仕組みができるまで伴走します。",
    detail:
      "顧問契約を基本とし、経営課題の整理から実行・検証まで伴走します。助言にとどまらず成果が続く仕組みをつくり、成果が出た後も改善提案を継続。経営の意思決定・成長を長期で支えます。",
    icon: Users2,
    gradient: "from-brand-secondary to-brand-accent",
    hoverBorder: "hover:border-brand-accent/20",
    hoverGlow: "bg-brand-secondary/20",
    linkColor: "text-brand-accent",
  },
];

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function WhatWeDoSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            What We Do
          </span>
          <p className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            パイロットミューの支援は、
            <br className="hidden sm:block" />
            次の<span className="text-brand-primary">3</span>つの柱で成り立っています。
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.num}
                variants={fadeUp}
                className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md ${p.hoverBorder} hover:bg-white`}
              >
                <div>
                  <div className="relative mb-6 w-fit">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} text-white shadow-sm`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div
                      className={`absolute inset-0 rounded-xl ${p.hoverGlow} blur-lg opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-slate-400 transition-colors">
                    {p.num} / {p.en}
                  </span>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">{p.ja}</h3>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                    {p.desc}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">{p.detail}</p>
                </div>
                <div
                  className={`mt-6 border-t border-slate-200/60 pt-4 text-xs font-bold ${p.linkColor} flex items-center gap-1`}
                >
                  サービス一覧へ <ChevronRight className="h-3 w-3" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
