"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Sparkles,
  Target,
  Eye,
  Compass,
  MessageSquareQuote
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CompanyPage() {
  const values = [
    { title: "対話を、起点に。", desc: "すべての支援は経営者や現場との対話から始まります。" },
    { title: "本質を、道筋に。", desc: "表層的な課題ではなく、データと構造化で本質的ロードマップを描きます。" },
    { title: "実行を、成果に。", desc: "きれいな提案書で終わらせず、現場に仕組みが定着し利益が出るまでやりきります。" }
  ];

  const profileData = [
    { label: "会社名", value: "株式会社パイロットミュー（pilotmieux, Inc.）" },
    { label: "設立", value: "2026年3月17日" },
    { label: "所在地", value: "長野県松本市笹部1-4-8" },
    { label: "代表者", value: "代表取締役社長 / CEO　椿 謙一" },
    { label: "従業員数", value: "3名" },
    { label: "事業内容", value: "経営コンサルティングおよびDX・AI導入支援" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-slate-200/50">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#4f46e5 2px, transparent 2px)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-brand-secondary"
          >
            <Sparkles className="h-3 w-3" />
            <span>Company</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-800 sm:text-5xl"
          >
            会社情報
          </motion.h1>
        </div>
      </section>

      {/* MVV セクション */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Mission・Vision・Value</h2>
            <p className="mt-3 text-xl font-extrabold text-slate-900 sm:text-2xl">
              パイロットミューの果たす役割と価値観
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-wider mb-4">
                <Target className="h-4.5 w-4.5" />
                <span>Our Mission</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                対話を通じて経営の本質を見つけ、<br />成長の道筋をともに描く。
              </h3>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 text-brand-secondary font-bold text-xs uppercase tracking-wider mb-4">
                <Eye className="h-4.5 w-4.5" />
                <span>Our Vision</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                挑戦する企業が、迷わず前へ進める社会へ。
              </h3>
            </motion.div>
          </div>

          {/* Value */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200/60 bg-white p-8 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-2 text-brand-accent font-bold text-xs uppercase tracking-wider mb-6">
              <Compass className="h-4.5 w-4.5" />
              <span>Our Value</span>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((v, i) => (
                <div key={i} className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-6 first:border-0 first:pt-0 first:pl-0">
                  <h4 className="text-base font-extrabold text-slate-900 bg-gradient-to-r from-indigo-50 to-indigo-100/50 w-fit px-3 py-1 rounded-lg">
                    {v.title}
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Message セクション */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Message</span>
            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">代表メッセージ</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* 代表者画像 & 役職 */}
            <div className="w-full md:w-1/3 shrink-0 flex flex-col items-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <Image
                  src="/member-tsubaki.jpg"
                  alt="Kenichi Tsubaki, CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-slate-800">椿 謙一</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">代表取締役社長 / CEO</p>
              </div>
            </div>

            {/* メッセージ本文 */}
            <div className="flex-grow space-y-6 text-slate-600 text-sm leading-relaxed">
              <p className="font-bold text-slate-900 text-base flex items-start gap-2">
                <MessageSquareQuote className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                <span>「対話を通じて経営の本質を見つけ、成長の道筋をともに描く」というMissionを掲げ、挑戦する企業の右腕となることを目指して設立しました。</span>
              </p>
              <p>
                AI時代の到来により、世の中の働き方や経営のあり方は大きく変わり始めています。一方で、どれだけ技術が進化しても、企業の本質的な課題は、経営者との対話の中にこそ見えてくると考えています。
              </p>
              <p>
                私はこれまで、大手製造業にてプロダクトリーダーとして設計から製造までを9年間主導し、その後、事業戦略部門にて数百億円規模のマーケティング・事業戦略に携わってきました。また、ChatGPTの登場とともに自ら生成AIを学び、実際の業務現場に実装し、業務効率化やDX推進にも取り組んできました。
              </p>
              <p>
                これまでの経験から、事業を動かす難しさ、現場に入り込む大切さ、そして何より対話の重要性を強く認識しました。机上の正論ではなく、共に考え、共に動き、成果まで伴走する存在が、このAI時代には必要だと信じています。
              </p>
              <p>
                プライベートでは、幼少期からスポーツに打ち込み、硬式テニスではインターハイ、全国選抜などを経験してきました。何かに取り組むなら、結果が出るまで諦めない。この姿勢は、私自身の仕事観であり、パイロットミューの伴走支援に対する姿勢そのものでもあります。
              </p>

              {/* 社名由来 */}
              <div className="mt-8 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 p-5">
                <p className="text-xs font-bold text-brand-primary">社名について</p>
                <p className="mt-2 text-xs text-slate-700 font-medium">
                  社名である「パイロットミュー」は、伴走者、副操縦士を意味する「Co-Pilot」と、フランス語で「より良い」を意味する「Mieux」を掛け合わせたものです。
                </p>
                <p className="mt-2 text-xs text-slate-700">
                  経営者が経営に集中できるように。挑戦したい企業が、AI時代に取り残されることなく、自らの可能性を広げていけるように。そして、企業の成長が、そこで働く人、関わるすべての人、地域の豊かさへとつながっていくように。パイロットミューは、対話を起点に、本質を道筋に変え、実行を成果へとつなげる伴走者であり続けます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要プロフィール */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Company Profile</span>
            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">会社概要</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <dl className="divide-y divide-slate-100">
              {profileData.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row px-6 py-5 sm:gap-6">
                  <dt className="text-sm font-bold text-slate-500 sm:w-1/4 shrink-0">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900 sm:mt-0 sm:w-3/4">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

    </div>
  );
}
