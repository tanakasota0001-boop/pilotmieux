"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  Sparkles,
  Award,
  Zap,
  TrendingUp,
  BrainCircuit,
  Compass
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const team = [
  {
    name: "椿 謙一",
    role: "代表取締役社長 / CEO",
    image: "/member-tsubaki.jpg",
    bio: [
      "松本深志高等学校卒業後、山梨大学大学院工学研究科修了。大手精密機器メーカーにて、メカニカルエンジニアとして設計から製造までを9年間主導し、技術開発・品質・量産化を横断してプロダクト開発を推進。",
      "その後、事業戦略部門にて年間数百億円規模のマーケティング・事業戦略を担当。生成AIを活用した業務変革やDX推進にもいち早く取り組む。"
    ],
    strengths: ["技術・現場視点", "事業戦略", "AI・DX実装", "課題の構造化"],
    personal: "硬式テニスでは全中、インターハイ、全国選抜に出場。スキーではSAJ1級を取得し、大学時代には富士スピードウェイでタイムアタックにも挑戦。分野を問わず、結果が出るまで追求し続ける姿勢を信条としている。",
    accent: "from-indigo-500 to-blue-600"
  },
  {
    name: "櫻井 顕也",
    role: "共同創業者 / 事業開発",
    image: "/member-placeholder.jpg",
    bio: [
      "小山工業高等専門学校(高専) 電子制御工学科卒業後、大手精密機器メーカーに入社。産業機器の領域にて、サービスサポート戦略、設計、ワールドワイド販売会社のエンドユーザーサポート体制構築を主導。",
      "さらに、リモートモニタリングサービスの企画推進からグローバルなサポート現場への定着までを担い、現場レベルでのデータ活用を推進。その後、事業開発に従事し、社外の共創パートナーや自治体とともに0→1の価値創出に取り組む。"
    ],
    strengths: ["新規事業開発", "現場起点の課題解決", "サービスサポート設計", "データ活用"],
    personal: "現場の人に徹底して寄り添い、本当に役に立つ仕組みを最後までやり切ることを信条としている。",
    accent: "from-violet-500 to-purple-600"
  },
  {
    name: "半田 岳志",
    role: "データサイエンス / エンジニア",
    image: "/member-placeholder.jpg",
    bio: [
      "東北大学大学院工学研究科修了後、新卒で日立製作所に入社。鉄道ITシステムや人流シミュレーション技術の研究開発に従事。",
      "その後、大手精密機器メーカーにてデータ利活用基盤の構築・運用やデータ活用推進を主導。AI・データを活用した業務改善や意思決定支援を得意とし、技術だけでなく現場オペレーションまで踏まえた設計を強みとする。"
    ],
    strengths: ["データ分析・利活用", "ITインフラ設計", "業務プロセス改善", "シミュレーション"],
    personal: "誰にとって何が真の価値かを考え抜き、データに基づく意思決定を自然に行える環境づくりを目指している。",
    accent: "from-emerald-500 to-teal-600"
  }
];

export default function MembersPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-slate-200/50">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#4f46e5 2px, transparent 2px)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600"
          >
            <Sparkles className="h-3 w-3" />
            <span>Members</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-800 sm:text-5xl"
          >
            チーム紹介
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-slate-500 text-sm sm:text-base leading-relaxed"
          >
            技術、現場、事業、AI活用。それぞれの専門性を横断しながら、
            地方企業の成長に伴走するメンバーです。
          </motion.p>
        </div>
      </section>

      {/* メンバーカードセクション */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300"
              >
                {/* アクセントライン */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${member.accent}`} />
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* アバター & 役職 */}
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
                    <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{member.role}</p>
                    
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

                  {/* 経歴 & バックグラウンド */}
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

                    {/* パーソナル・信条 */}
                    <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-5 mt-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        <Compass className="h-4 w-4 text-brand-secondary" />
                        <span>Stance & Personal / 信条・人柄</span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">
                        {member.personal}
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
