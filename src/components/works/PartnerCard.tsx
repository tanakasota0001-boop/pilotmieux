"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { type Partner } from "@/data/works";

type Props = { partner: Partner };

export function PartnerCard({ partner }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50/50 p-6 shadow-sm hover:shadow-md hover:border-slate-300 hover:bg-white transition-all"
    >
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-violet-100/40 to-purple-100/20 opacity-60 group-hover:scale-110 transition-transform pointer-events-none" />
      <div className="relative">
        <span className="text-[10px] font-bold text-violet-600">{partner.industry}</span>
        <h3 className="text-lg font-bold text-slate-900 mt-1">
          {partner.company}{" "}
          <span className="text-xs font-normal text-slate-400">様</span>
        </h3>
        <a
          href={partner.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-violet-500 hover:text-violet-700 hover:underline underline-offset-4"
        >
          公式サイトを開く
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </motion.div>
  );
}
