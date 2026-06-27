"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, 
  BarChart3, 
  Layers, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Search,
  PenTool,
  Users2,
  MapPin
} from "lucide-react";

// フェードイン＆スライドアップの基本アニメーション
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const marqueeItems = [
    "経営支援", "AI・DX導入", "業務改善", "データ活用", 
    "新規事業開発", "構造化", "伴走型支援", "現場実装", 
    "ダッシュボード構築", "生成AI活用"
  ];

  return (
    <div className="relative overflow-hidden bg-slate-50">
      
      {/* ヒーローセクション */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* 背景ビジュアル */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/og.jpg"
            alt="pilotmieux hero background"
            fill
            priority
            className="object-cover opacity-30 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-slate-50 to-slate-50"></div>
          {/* 装飾用の光の輪 */}
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-300/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-200/20 to-pink-200/20 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold text-brand-primary"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-indigo-500" />
            <span>中小企業の成長を、共に。</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8 } }
            }}
            className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
          >
            <span className="block mb-2 sm:mb-4">課題を可視化し、</span>
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              成果と成長を共に創り続ける
            </span>
            <span className="block mt-2 sm:mt-4">伴走パートナー</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } }
            }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            パイロットミュー（pilotmieux）は、中小企業の複雑な課題を可視化し、
            解決策の設計・実行・定着までを共に行います。
            さらに、新たな事業やサービス、ブランドの創出まで伴走し、
            利益が生まれるところまで共に取り組みます。
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8 } }
            }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-200 hover:scale-[1.03] transition-all duration-300"
            >
              お問合せはこちら
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:text-brand-primary hover:shadow-sm transition-all"
            >
              サービスを見る
            </Link>
          </motion.div>
        </div>
      </section>

      {/* スクロールテキスト（マルキー） */}
      <section className="relative border-y border-slate-200/50 bg-white py-6 overflow-hidden">
        <div className="flex w-max gap-8 animate-marquee whitespace-nowrap">
          <div className="flex gap-12 items-center">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-400 tracking-wider uppercase">
                <span>{item}</span>
                <span className="text-brand-primary/40 text-[10px]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do (3つの柱) */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">What We Do</h2>
            <p className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
              パイロットミューの支援は、<br className="hidden sm:block" />
              次の<span className="text-brand-primary">3</span>つの柱で成り立っています。
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-3"
          >
            {/* 01 構造化 */}
            <motion.div 
              variants={fadeInUp}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-brand-primary/20 hover:bg-white"
            >
              <div>
                <div className="relative mb-6 w-fit">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-brand-primary text-white shadow-sm">
                    <Search className="h-6 w-6" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-sky-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-brand-primary/50 transition-colors">01 / STRUCTURING</span>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900">構造化</h3>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                  丁寧なヒアリングと整理・可視化を通じて、課題の本質を明らかにします。
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  経営や現場業務の本質的な課題を明らかにします。同時に潜在的な成長機会や新たな価値の種も見える化します。
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200/60 pt-4 text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:text-brand-primary-hover">
                サービス一覧へ <ChevronRight className="h-3 w-3" />
              </div>
            </motion.div>

            {/* 02 設計 */}
            <motion.div 
              variants={fadeInUp}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-brand-secondary/20 hover:bg-white"
            >
              <div>
                <div className="relative mb-6 w-fit">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-sm">
                    <PenTool className="h-6 w-6" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-brand-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-brand-secondary/50 transition-colors">02 / DESIGNING</span>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900">設計</h3>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                  改善策にとどまらず、高収益モデルにつながる打ち手を設計します。
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  現場で実行できる形に落とし込み、成果につながる具体的な打ち手を描きます。新規サービス立ち上げ、業務改革、ブランド再構築など、企業の次の収益の柱を共に形にします。
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200/60 pt-4 text-xs font-bold text-brand-secondary flex items-center gap-1 group-hover:text-brand-secondary">
                サービス一覧へ <ChevronRight className="h-3 w-3" />
              </div>
            </motion.div>

            {/* 03 伴走 */}
            <motion.div 
              variants={fadeInUp}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-brand-accent/20 hover:bg-white"
            >
              <div>
                <div className="relative mb-6 w-fit">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-secondary to-brand-accent text-white shadow-sm">
                    <Users2 className="h-6 w-6" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-brand-secondary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-xs font-bold tracking-widest text-slate-300 group-hover:text-brand-accent/50 transition-colors">03 / PARTNERING</span>
                <h3 className="mt-2 text-xl font-extrabold text-slate-900">伴走</h3>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
                  成果が出るまで、そして成果が続く仕組みができるまで伴走します。
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  顧問契約を基本とし、経営課題の整理から実行・検証まで伴走します。助言にとどまらず成果が続く仕組みをつくり、成果が出た後も改善提案を継続。経営の意思決定・成長を長期で支えます。
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200/60 pt-4 text-xs font-bold text-brand-accent flex items-center gap-1 group-hover:text-brand-accent">
                サービス一覧へ <ChevronRight className="h-3 w-3" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy (スタンス) */}
      <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden text-white border-t border-slate-800">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#4f46e5 2px, transparent 2px)", backgroundSize: "32px 32px" }}></div>
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl"></div>
        <div className="absolute top-12 right-12 h-[400px] w-[400px] rounded-full bg-brand-secondary/10 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* 左側：大見出しと力強いメッセージ */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                <Sparkles className="h-3 w-3" />
                Philosophy
              </span>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl leading-tight">
                「きれいな資料」で<br />終わらせない。
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                私たちはツールを導入して終えるような支援はしません。
                企業の利益が生まれるまで、そして生み続けられるように、共に悩み、考え、歩みます。
              </p>
            </div>

            {/* 右側：3つのスタンスカード */}
            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-1">
              <motion.div 
                whileHover={{ x: 4 }}
                className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-sm"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">伴走型のパートナー</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      助言にとどまらず、企業の利益が生まれ、持続的に成長できる仕組みができるまで共に歩み続けます。
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-sm"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-secondary to-brand-accent text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">現場で機能する実効性</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      机上の空論や資料作成ではなく、現場のスタッフが日常業務で確実に使いこなせる形への落とし込みを徹底します。
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8 backdrop-blur-sm"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-pink-500 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">一貫した成長支援</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      「考える（戦略設計）」から「動かす（現場実装）」までを分断せず、企業の成長と利益創出を一貫して支え続けます。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Works (導入実績) */}
      <section className="relative py-24 sm:py-32 bg-white border-t border-slate-200/50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-slate-50 opacity-40 blur-3xl pointer-events-none z-0"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-brand-primary">
              <Sparkles className="h-3 w-3" />
              Works
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">導入実績</h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500">
              地域に根差す企業の成長パートナーとして、データと実践を武器に数々の支援を行っています。
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* 実績カード1: タカノ様 */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-block rounded-md bg-sky-50 px-2.5 py-1 text-[10px] font-bold tracking-wider text-sky-600 uppercase">
                    精密板金加工メーカー
                  </span>
                  <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" /> 長野県松本市
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-black text-slate-900 leading-tight">
                  株式会社タカノ <span className="text-sm font-normal text-slate-400">様</span>
                </h3>
                <p className="mt-2 text-sm text-sky-600 font-bold">— 現場データ活用の伴走支援</p>
                
                <div className="mt-6 space-y-3.5 text-xs text-slate-600 border-t border-slate-100 pt-5">
                  <div className="flex gap-2">
                    <span className="font-bold text-slate-800 shrink-0 w-12">課題:</span>
                    <span>生産データや品質管理データが属人化し、有効に活用しきれていなかった</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-sky-600 shrink-0 w-12">支援:</span>
                    <span>現場データの可視化基盤設計、KPIダッシュボード構築、データ活用の伴走・定着トレーニング</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium">生産管理・品質管理・DX推進</span>
                <Link href="/works" className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-brand-primary-hover group">
                  詳しく見る <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* 実績カード2: ネットアストーヨー住器様 */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between rounded-2xl border border-violet-100 bg-white p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div>
                <div className="inline-block rounded-full bg-gradient-to-r from-violet-400 to-purple-500 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                  住宅建材・リフォーム
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  ネットアストーヨー住器株式会社 <span className="text-sm font-normal text-slate-400">様</span>
                </h3>
                <p className="mt-2 text-sm text-violet-600 font-semibold">— 経営・業務のDX支援パートナー</p>
                <p className="mt-4 text-xs leading-relaxed text-slate-500">
                  住まいのリフォームや建材提供を行う企業様に対し、現場業務の属人化解消や、デジタルツールを活用した効率化・定着化をトータルでサポートしております。
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link href="/works#partners" className="inline-flex items-center gap-1 text-xs font-bold text-brand-secondary hover:text-brand-secondary">
                  詳しく見る <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/works" 
              className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-primary-hover group"
            >
              すべての実績を見る 
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 text-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/og.jpg"
            alt="cta background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl"></div>
        <div className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-brand-secondary/20 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black sm:text-4xl text-white tracking-tight">
            まずはお気軽にご相談ください
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm sm:text-base text-slate-300">
            課題整理から、新たな事業づくりや改善の打ち手まで。<br />
            貴社の状況に合わせた支援をご提案いたします。
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-10 py-4 text-sm font-bold text-white shadow-lg hover:scale-105 transition-transform"
            >
              お問合せフォームへ
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
