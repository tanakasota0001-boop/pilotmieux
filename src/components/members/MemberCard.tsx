"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Award, Compass } from "lucide-react";
import { type Member } from "@/data/members";

type Props = { member: Member };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export function MemberCard({ member }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300"
    >
      {/* アクセントライン（上部） */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${member.accent}`} />

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* アバター */}
        <div className="w-full md:w-1/4 shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 text-xl font-extrabold text-slate-900">{member.name}</h3>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
            {member.role}
          </p>
          {/* 強みタグ */}
          <div className="mt-4 flex flex-wrap gap-1.5 justify-center md:justify-start">
            {member.strengths.map((str) => (
              <span
                key={str}
                className="inline-block rounded-md bg-slate-50 border border-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500"
              >
                {str}
              </span>
            ))}
          </div>
        </div>

        {/* 経歴 */}
        <div className="flex-grow space-y-5 text-sm leading-relaxed text-slate-600">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 w-full">
              <Award className="h-4 w-4 text-brand-primary" />
              <span>Background / 略歴</span>
            </div>
            {member.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* 信条・人柄 */}
          <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              <Compass className="h-4 w-4 text-brand-secondary" />
              <span>Stance &amp; Personal / 信条・人柄</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">{member.personal}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
