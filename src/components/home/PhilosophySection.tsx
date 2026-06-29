"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const stances = [
  {
    num: 1,
    title: "伴走型のパートナー",
    desc: "助言にとどまらず、企業の利益が生まれ、持続的に成長できる仕組みができるまで共に歩み続けます。",
    gradient: "from-brand-primary to-brand-secondary",
  },
  {
    num: 2,
    title: "現場で機能する実効性",
    desc: "机上の空論や資料作成ではなく、現場のスタッフが日常業務で確実に使いこなせる形への落とし込みを徹底します。",
    gradient: "from-brand-secondary to-brand-accent",
  },
  {
    num: 3,
    title: "一貫した成長支援",
    desc: "「考える（戦略設計）」から「動かす（現場実装）」までを分断せず、企業の成長と利益創出を一貫して支え続けます。",
    gradient: "from-brand-accent to-pink-500",
  },
];

export function PhilosophySection() {
  return (
    <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden text-white border-t border-slate-800">
      {/* ドットグリッド */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#4f46e5 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-12 h-[400px] w-[400px] rounded-full bg-brand-secondary/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* 左：見出し */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              <Sparkles className="h-3 w-3" />
              Philosophy
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight">
              「きれいな資料」で
              <br />
              終わらせない。
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              私たちはツールを導入して終えるような支援はしません。
              企業の利益が生まれるまで、そして生み続けられるように、共に悩み、考え、歩みます。
            </p>
          </div>

          {/* 右：スタンスカード */}
          <div className="lg:col-span-7 space-y-5">
            {stances.map((s) => (
              <motion.div
                key={s.num}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-sm"
              >
                <div className="flex gap-4 items-start">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${s.gradient} text-white font-bold text-sm`}
                  >
                    {s.num}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
