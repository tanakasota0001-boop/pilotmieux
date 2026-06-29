"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

type SectionBadgeProps = {
  label: string;
  icon?: LucideIcon;
  colorClass?: string;
};

/**
 * 全ページで使用する統一セクションバッジ。
 * デフォルトはブランドカラー（indigo）、colorClassで上書き可能。
 */
export function SectionBadge({
  label,
  icon: Icon,
  colorClass = "bg-indigo-50 text-brand-primary",
}: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide ${colorClass}`}
    >
      {Icon && <Icon className="h-3 w-3" />}
      <span>{label}</span>
    </motion.div>
  );
}
