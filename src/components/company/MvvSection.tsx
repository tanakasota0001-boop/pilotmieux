"use client";

import { motion } from "framer-motion";
import { Target, Eye, Compass } from "lucide-react";
import { companyValues } from "@/data/company";

export function MvvSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            Mission · Vision · Value
          </span>
          <p className="mt-3 text-xl font-extrabold text-slate-900 sm:text-2xl">
            パイロットミューの果たす役割と価値観
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-10">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-wider mb-4">
              <Target className="h-4 w-4" />
              <span>Our Mission</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              対話を通じて経営の本質を見つけ、
              <br />
              成長の道筋をともに描く。
            </h3>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 text-brand-secondary font-bold text-xs uppercase tracking-wider mb-4">
              <Eye className="h-4 w-4" />
              <span>Our Vision</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              挑戦する企業が、迷わず前へ進める社会へ。
            </h3>
          </motion.div>
        </div>

        {/* Value */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-8 sm:p-10 shadow-sm"
        >
          <div className="flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-wider mb-6">
            <Compass className="h-4 w-4" />
            <span>Our Value</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {companyValues.map((v, i) => (
              <div
                key={i}
                className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-6 first:border-0 first:pt-0 first:pl-0"
              >
                <h4 className="text-base font-extrabold text-slate-900 bg-gradient-to-r from-indigo-50 to-indigo-100/50 w-fit px-3 py-1 rounded-lg">
                  {v.title}
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
