"use client";

import { motion } from "framer-motion";
import { team } from "@/data/members";
import { MemberCard } from "./MemberCard";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export function MemberList() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-16"
    >
      {team.map((member) => (
        <MemberCard key={member.name} member={member} />
      ))}
    </motion.div>
  );
}
