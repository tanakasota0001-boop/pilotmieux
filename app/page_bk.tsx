"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FadeUp, Stagger, Blobs, SectionBlob, staggerItem } from "@/components/ui";

/* ── Pillar data ── */
const pillars = [
  {
    num: "01",
    title: "構造化",
    lead: "丁寧なヒアリングと整理・可視化を通じて、課題の本質を明らかにします。",
    body: "経営や現場業務の本質的な課題を明らかにします。同時に潜在的な成長機会や新たな価値の種も見える化します。",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
    gradient: "from-sky-400 to-blue-500",
  },
  {
    num: "02",
    title: "設計",
    lead: "改善策にとどまらず、高収益モデルにつながる打ち手を設計します。",
    body: "現場で実行できる形に落とし込み、成果につながる具体的な打ち手を描きます。新規サービス立ち上げ、業務改革、ブランド再構築など、企業の次の収益の柱を共に形にします。",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931ZM16.862 4.487 19.5 7.125" />
      </svg>
    ),
    gradient: "from-violet-400 to-purple-500",
  },
  {
    num: "03",
    title: "伴走",
    lead: "成果が出るまで、そして成果が続く仕組みができるまで伴走します。",
    body: "顧問契約を基本とし、経営課題の整理から実行・検証まで伴走します。助言にとどまらず成果が続く仕組みをつくり、成果が出た後も改善提案を継続。経営の意思決定・成長を長期で支えます。",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    gradient: "from-emerald-400 to-teal-500",
  },
];

/* ── Works teaser data ── */
const worksTeaser = [
  {
    company: "株式会社タカノ",
    tagline: "現場データ活用の伴走支援",
    industry: "精密板金加工メーカー",
    gradient: "from-sky-400 to-blue-500",
    border: "border-sky-200",
  },
  {
    company: "ネットアストーヨー住器株式会社",
    tagline: "営業活動のプロセス効率化支援",
    industry: "住宅建材・リフォーム",
    gradient: "from-emerald-400 to-teal-500",
    border: "border-emerald-200",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOp = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-gray-800 selection:bg-indigo-200">
      {/* ═══ HERO ═══ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      >
        <Blobs />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#6366f1 1px,transparent 1px),linear-gradient(to bottom,#6366f1 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOp }}
          className="relative z-10 mx-auto max-w-3xl px-5 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-5 inline-block rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-600 tracking-wide"
          >
            中小企業の成長を、共に。
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.3] tracking-tight text-gray-900"
          >
            課題を可視化し、
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              成果と成長を共に創り続ける
            </span>
            <br />
            伴走パートナー
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-gray-500"
          >
            パイロットミュー（pilotmieux）は、中小企業の複雑な課題を可視化し、
            <br className="hidden sm:block" />
            解決策の設計・実行・定着までを共に行います。
            <br className="hidden sm:block" />
            さらに、新たな事業やサービス、ブランドの創出まで伴走し、
            <br className="hidden sm:block" />
            利益が生まれるところまで共に取り組みます。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-300/40 transition-all hover:scale-[1.04] hover:shadow-xl active:scale-[0.97]"
            >
              お問合せ
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:border-indigo-300 hover:text-indigo-600 hover:shadow"
            >
              サービスを見る
            </Link>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-300/60 pt-2"
          >
            <span className="block h-2 w-[3px] rounded-full bg-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ 3 PILLARS ═══ */}
      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <FadeUp>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              What We Do
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              パイロットミューの支援は、
              <br className="hidden sm:block" />
              次の<span className="text-indigo-500">3</span>つの柱で成り立っています。
            </h2>
          </FadeUp>
        </div>

        <div className="mx-auto mt-14 max-w-6xl px-5">
          <Stagger className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <motion.article
                key={p.num}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="group relative flex flex-col rounded-2xl border border-gray-200/60 bg-white p-7 sm:p-8 shadow-sm transition-shadow duration-300 hover:shadow-2xl"
              >
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${p.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} text-white shadow-md`}>
                  {p.icon}
                </div>
                <span className="text-[0.7rem] font-bold tracking-[0.25em] text-gray-300 group-hover:text-indigo-300 transition-colors">
                  {p.num}
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 font-medium">{p.lead}</p>
                <p className="mt-2.5 text-[0.82rem] leading-relaxed text-gray-400">{p.body}</p>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══ PHILOSOPHY ═══ */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28">
        <SectionBlob position="right" colors="from-pink-100/50 to-violet-100/30" />
        <SectionBlob position="left" colors="from-sky-100/40 to-indigo-100/20" />

        <div className="relative mx-auto max-w-3xl px-5">
          <FadeUp>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Philosophy
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              スタンス
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-10 space-y-6 text-sm sm:text-base leading-[1.9] text-gray-500">
              <p>
                私たちは「きれいな資料を作って終わり」ではありません。
                <br />
                ツールを導入して終えるような支援でもありません。
              </p>
              <p>
                企業の利益が生まれるまで、そして生み続けられるように、
                <br className="hidden sm:block" />
                共に悩み、考え、歩む
                <strong className="text-gray-800 font-semibold">伴走型のパートナー</strong>です。
              </p>
              <p>
                机上の空論ではなく、現場で確実に機能する形に落とし込み、
                <br className="hidden sm:block" />
                理論を実行と成果へ結びつけます。
              </p>
              <p>
                「考える」から「動かす」までを切り離さず、
                <br className="hidden sm:block" />
                企業の成長と利益創出を一貫して支援し続けます。
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.35}>
            <motion.div
              className="mt-12 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </FadeUp>
        </div>
      </section>

      {/* ═══ WORKS TEASER ═══ */}
      <section className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <FadeUp>
            <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Works
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2 className="mt-3 text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              導入実績
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <p className="mx-auto mt-4 max-w-lg text-center text-sm sm:text-base text-gray-500">
              地域に根差す企業の成長パートナーとして、伴走支援を行っています。
            </p>
          </FadeUp>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {worksTeaser.map((w) => (
              <motion.div
                key={w.company}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group rounded-2xl border ${w.border} bg-white p-6 shadow-sm transition-shadow hover:shadow-xl`}
              >
                <div className={`inline-block rounded-full bg-gradient-to-r ${w.gradient} px-3 py-1 text-[0.65rem] font-bold tracking-wider text-white`}>
                  {w.industry}
                </div>
                <h3 className="mt-3 text-lg font-bold text-gray-900">{w.company}<span className="ml-1 text-sm font-normal text-gray-400">様</span></h3>
                <p className="mt-1.5 text-sm text-gray-500">{w.tagline}</p>
              </motion.div>
            ))}
          </Stagger>

          <FadeUp delay={0.3}>
            <div className="mt-8 text-center">
              <Link
                href="/works"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
              >
                すべての実績を見る
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section className="relative bg-[#f8fafc] py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <FadeUp>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              まずはお気軽にご相談ください
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mx-auto mt-3 max-w-md text-sm sm:text-base text-gray-500">
              課題整理から、新たな事業づくりや改善の打ち手まで。
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-7">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-300/40 transition-all hover:scale-[1.04] hover:shadow-xl active:scale-[0.97]"
              >
                お問合せフォームへ
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
