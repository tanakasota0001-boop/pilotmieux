"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export function ServiceList() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-10"
    >
      {services.map((s) => (
        <ServiceCard key={s.num} service={s} />
      ))}
    </motion.div>
  );
}
