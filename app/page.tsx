'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}


export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 120])

  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.75])
  const logoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -6])

  return (
    <main className="text-slate-900 overflow-hidden">

    {/* 固定ロゴ（スクロール連動） */}
    <motion.div
      style={{
        scale: logoScale,
        opacity: logoOpacity,
        y: logoY,
      }}
      className="fixed top-6 left-6 z-50 origin-top-left"
    >
    <div className="flex items-center gap-3">
      <div className="h-6 w-px bg-slate-300" />
      <span className="text-xs tracking-widest text-slate-800">
        pilotmieux
      </span>
    </div>
    </motion.div>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-indigo-50 via-white to-emerald-50"
      >
        <div className="noise" />

        {/* 抽象SVG */}
        <svg
          className="absolute top-0 right-0 w-[600px] opacity-30"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="280" stroke="#6366F1" strokeWidth="1" />
          <circle cx="300" cy="300" r="200" stroke="#22C55E" strokeWidth="1" />
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-40">
          <motion.div style={{ y }}>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight"
            >
              課題を構造化し、
              <br />
              実行まで伴走する
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="mt-10 max-w-xl text-lg text-slate-600 leading-relaxed"
            >
              pilotmieuxは、中小企業を中心に、
              複雑化した課題を整理し、
              解決策の設計から実行・定着までを一貫して支援します。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHAT */}
      <section className="bg-white py-36">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            pilotmieuxとは
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 max-w-2xl text-slate-600 leading-relaxed"
          >
            経営、業務、IT、データ。
            それぞれが部分最適化され、全体像が見えなくなった状態を、
            「構造」として捉え直すことから始めます。
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-40">
        <div className="noise" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            {
              title: '構造化',
              text: 'ヒアリング・整理・可視化を通じて、課題の本質を明確にします。',
            },
            {
              title: '設計',
              text: '実行可能な解決策を、業務・IT・データの観点から設計します。',
            },
            {
              title: '伴走',
              text: '成果が出るところまで、責任を持って支援します。',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="rounded-2xl bg-white/80 backdrop-blur p-10 shadow-sm"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-5 text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white py-36">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            スタンス
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 max-w-2xl text-slate-600 leading-relaxed"
          >
            机上の空論ではなく、現場で使われる形に。
            理論ではなく、成果に責任を持つ。
            私たちは「考える」と「動かす」を切り離しません。
          </motion.p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-40">
        <div className="noise" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            Contact
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 text-slate-300"
          >
            ご相談・お問い合わせはこちら
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12"
          >
            <a
              href="mailto:contact@pilotmieux.com"
              className="inline-block rounded-full bg-indigo-500 px-10 py-4 text-white font-medium hover:bg-indigo-400 transition"
            >
              contact@pilotmieux.com
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="bg-black text-slate-400 py-10 text-center text-sm">
        © {new Date().getFullYear()} pilotmieux
      </footer>
    </main>
  )
}
