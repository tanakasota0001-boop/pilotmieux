"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { type Service } from "@/data/services";

type Props = {
  service: Service;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function ServiceCard({ service }: Props) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300"
    >
      {/* 左端グラデーションライン */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl bg-gradient-to-b ${service.color}`} />

      <div className="pl-2 sm:pl-4">
        <div className="flex items-center gap-4 mb-4">
          <span
            className={`text-4xl sm:text-5xl font-black bg-gradient-to-br ${service.color} bg-clip-text text-transparent select-none opacity-80 group-hover:scale-105 transition-transform duration-300`}
          >
            {service.num}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400 group-hover:text-brand-primary transition-colors" />
            {service.title}
          </h3>
        </div>

        <p className="text-base font-bold text-slate-800">{service.description}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.detail}</p>

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
}
