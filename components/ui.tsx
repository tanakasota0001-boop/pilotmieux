"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

/* ── Fade-up on scroll ── */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 52 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Fade-in (no Y) ── */
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger wrapper ── */
export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Floating blobs (hero) ── */
export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sky-200/50 to-indigo-200/30 blur-3xl"
        animate={{ y: [0, 36, 0], x: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-violet-200/40 to-rose-200/25 blur-3xl"
        animate={{ y: [0, -28, 0], x: [0, 22, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 h-56 w-56 rounded-full bg-amber-100/30 blur-2xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ── Section blob (reusable) ── */
export function SectionBlob({
  position = "right",
  colors = "from-pink-100/50 to-violet-100/30",
}: {
  position?: "left" | "right";
  colors?: string;
}) {
  const r = position === "right";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className={`absolute ${r ? "-right-20 -top-20" : "-left-20 bottom-0"} h-80 w-80 rounded-full bg-gradient-to-br ${colors} blur-3xl`}
        animate={{ x: [0, r ? 24 : -16, 0], y: [0, r ? -12 : 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ── Section heading pair ── */
export function SectionHeading({
  tag,
  title,
  sub,
  center = true,
}: {
  tag: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  center?: boolean;
}) {
  const align = center ? "text-center" : "";
  return (
    <>
      <FadeUp>
        <p className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500 ${align}`}>
          {tag}
        </p>
      </FadeUp>
      <FadeUp delay={0.08}>
        <h2 className={`mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 ${align}`}>
          {title}
        </h2>
      </FadeUp>
      {sub && (
        <FadeUp delay={0.14}>
          <p className={`mx-auto mt-4 max-w-lg text-sm sm:text-base text-gray-500 ${align}`}>
            {sub}
          </p>
        </FadeUp>
      )}
    </>
  );
}

/* ── Page wrapper (consistent bg + padding) ── */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-gray-800 selection:bg-indigo-200 pt-16">
      {children}
    </main>
  );
}
