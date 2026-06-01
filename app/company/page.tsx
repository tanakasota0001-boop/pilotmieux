"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp, Stagger, SectionBlob, SectionHeading, PageShell, staggerItem } from "@/components/ui";

const companyProfile = [
  { label: "会社名", value: "株式会社パイロットミュー（pilotmieux, Inc.）" },
  { label: "設立", value: "2026年3月17日" },
  { label: "所在地", value: "長野県松本市笹部1-4-8" },
  { label: "代表者", value: "椿 謙一" },
  { label: "従業員数", value: "3名" },
  { label: "事業内容", value: "経営コンサルティングおよびDX・AI導入支援" },
];

const ceoMessage = [
  "当社は、「対話を通じて経営の本質を見つけ、成長の道筋をともに描く」というMissionを掲げ、挑戦する企業の右腕となることを目指して設立しました。",
  "AI時代の到来により、世の中の働き方や経営のあり方は大きく変わり始めています。一方で、どれだけ技術が進化しても、企業の本質的な課題は、経営者との対話の中にこそ見えてくると考えています。",
  "私はこれまで、大手製造業にてプロダクトリーダーとして設計から製造までを9年間主導し、その後、事業戦略部門にて数百億円規模のマーケティング・事業戦略に携わってきました。また、ChatGPTの登場とともに自ら生成AIを学び、実際の業務現場に実装し、業務効率化やDX推進にも取り組んできました。",
  "これまでの経験から、事業を動かす難しさ、現場に入り込む大切さ、そして何より対話の重要性を強く認識しました。机上の正論ではなく、共に考え、共に動き、成果まで伴走する存在が、このAI時代には必要だと信じています。",
  "プライベートでは、幼少期からスポーツに打ち込み、硬式テニスではインターハイ、全国選抜などを経験してきました。何かに取り組むなら、結果が出るまで諦めない。この姿勢は、私自身の仕事観であり、パイロットミューの伴走支援に対する姿勢そのものでもあります。",
  "社名である「パイロットミュー」は、伴走者、副操縦士を意味する「Co-Pilot」と、フランス語で「より良い」を意味する「Mieux」を掛け合わせたものです。",
  "経営者が経営に集中できるように。挑戦したい企業が、AI時代に取り残されることなく、自らの可能性を広げていけるように。そして、企業の成長が、そこで働く人、関わるすべての人、地域の豊かさへとつながっていくように。",
  "パイロットミューは、対話を起点に、本質を道筋に変え、実行を成果へとつなげる伴走者であり続けます。",
];

export default function CompanyPage() {
  return (
    <PageShell>
      {/* ═══ MVV ═══ */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <SectionBlob position="right" colors="from-indigo-100/40 to-violet-100/20" />

        <div className="relative mx-auto max-w-5xl px-5">
          <SectionHeading tag="Company" title="Mission・Vision・Value" />

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Mission */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm hover:shadow-xl transition-shadow"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">Our Mission</p>
              <h3 className="mt-3 text-lg sm:text-xl font-bold leading-snug text-gray-900">
                対話を通じて<br />経営の本質を見つけ、<br />成長の道筋をともに描く。
              </h3>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-purple-100 bg-white p-7 shadow-sm hover:shadow-xl transition-shadow"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Our Vision</p>
              <h3 className="mt-3 text-lg sm:text-xl font-bold leading-snug text-gray-900">
                挑戦する企業が、<br />迷わず前へ進める社会へ。
              </h3>
            </motion.div>

            {/* Value */}
            <motion.div
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="rounded-2xl border border-teal-100 bg-white p-7 shadow-sm hover:shadow-xl transition-shadow"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">Our Value</p>
              <div className="mt-3 space-y-1 text-lg sm:text-xl font-bold leading-snug text-gray-900">
                <p>対話を、起点に。</p>
                <p>本質を、道筋に。</p>
                <p>実行を、成果に。</p>
              </div>
            </motion.div>
          </Stagger>
        </div>
      </section>

      {/* ═══ CEO MESSAGE ═══ */}
      <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28">
        <SectionBlob position="right" colors="from-amber-100/40 to-orange-100/20" />

        <div className="relative mx-auto max-w-5xl px-5">
          <FadeUp>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              Message
            </p>
          </FadeUp>

          <div className="mt-10 grid gap-10 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] items-start">
            <FadeUp delay={0.1} className="flex flex-col items-center md:sticky md:top-28">
              <div className="relative h-64 w-52 sm:h-80 sm:w-64 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/ceo.jpg"
                  alt="椿 謙一"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-bold text-gray-900">椿 謙一</p>
              <p className="text-sm text-gray-400">代表取締役社長 / CEO</p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-5 text-sm sm:text-base leading-[1.9] text-gray-500">
                {ceoMessage.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ COMPANY PROFILE ═══ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp>
            <h3 className="text-center text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              Company Profile
            </h3>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-sm">
              {companyProfile.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row ${i !== companyProfile.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="shrink-0 bg-gray-50 px-6 py-3 sm:w-36 sm:py-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{row.label}</span>
                  </div>
                  <div className="px-6 py-3 sm:py-4 text-sm text-gray-700">{row.value}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
