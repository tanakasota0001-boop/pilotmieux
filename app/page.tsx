'use client'
import Image from 'next/image'
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

const services = [
  {
    title: '構造化',
    lead: '丁寧なヒアリングと整理・可視化を通じて、課題の本質を明らかにします。',
    body: '経営や現場業務の本質的な課題を明らかにします。同時に潜在的な成長機会や新たな価値の種も見える化します。',
  },
  {
    title: '設計',
    lead: '改善策にとどまらず、高収益モデルにつながる打ち手を設計します。',
    body: '現場で実行できる形に落とし込み、成果につながる具体的な打ち手を描きます。新規サービス立ち上げ、業務改革、ブランド再構築など、企業の次の収益の柱を共に形にします。',
  },
  {
    title: '伴走',
    lead: '成果が生まれ、定着するまで継続的に支援します。',
    body: '単発の支援や顧問契約など形を問わず、成果が生まれるまで、そして成果が生み続けられる仕組みが定着するまで共に歩みます。成果創出後も分析を行い、次の成長に向けた打ち手を提案し続けます。',
  },
]


  return (
    <main className="text-slate-900 overflow-hidden">

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative bg-white"
      >

  <div className="absolute top-4 left-4 md:top-8 md:left-8">
    <Image
      src="/og.jpg"
      alt="pilotmieux logo"
      width={120}
      height={32}
      className="object-contain opacity-90"
      priority
    />
  </div>

        <div className="noise" />

        {/* 抽象SVG */}
        {/* <svg
          className="absolute top-0 right-0 w-[600px] opacity-10 pointer-events-none"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="260" stroke="#000000" strokeWidth="1" />
        </svg> */}

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-40">
          <motion.div style={{ y }}>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight"
            >
              課題を可視化し、
              <br />
              成果と成長を共に創り続ける
              <br />
              伴走パートナー

            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="mt-10 max-w-xl text-lg text-slate-600 leading-relaxed"
            >
            pilotmieuxは、中小企業の複雑な課題を可視化し、
            解決策の設計・実行・定着までを共に行います。
            さらに、新たな事業やサービス、ブランドの創出まで伴走し、
            利益が生まれるところまで共に取り組みます。


            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHAT */}
      <section className="bg-white py-36 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            pilotmieuxの支援は、次の3つの柱で成り立っています。
          </motion.h2>
        </div>
      </section>

      
      {/* SERVICES */}
      <section className="bg-white py-40 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="rounded-2xl bg-white p-10 border border-slate-100"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-800 leading-relaxed font-medium">
                {item.lead}
              </p>

              {item.body && (
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {item.body}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white py-36 border-t border-slate-100">
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
            className="mt-10 max-w-2xl text-slate-600 leading-relaxed text-lg"
          >
            私たちは「きれいな資料を作って終わり」ではありません。
            ツールを導入して終えるような支援でもありません。

            企業の利益が生まれるまで、そして生み続けられるように、
            共に悩み、考え、歩む伴走型のパートナーです。

            机上の空論ではなく、現場で確実に機能する形に落とし込み、
            理論を実行と成果へ結びつけます。

            「考える」から「動かす」までを切り離さず、
            企業の成長と利益創出を一貫して支援し続けます。
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
            まずは課題整理から、新たな事業づくりや改善の打ち手までご相談ください。
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
              href="mailto:tsubaki.kenichi@pilotmieux.com"
              className="inline-block rounded-full bg-indigo-500 px-10 py-4 text-white font-medium hover:bg-indigo-400 transition"
            >
              tsubaki.kenichi@pilotmieux.com
            </a>

  <div className="border-t border-slate-700 pt-6 max-w-sm">
    <p className="tracking-wide">pilotmieux Inc.</p>
    <p className="mt-1">代表取締役社長 CEO　椿 謙一</p>
  </div>
  
          </motion.div>



        </div>
      </section>

      <footer className="bg-black text-slate-400 py-10 text-center text-sm">
        © {new Date().getFullYear()} pilotmieux
      </footer>
    </main>
  )
}
