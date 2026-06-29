"use client";

import { motion } from "framer-motion";
import { Stagger, SectionBlob, SectionHeading, PageShell, staggerItem } from "@/components/ui";

const members = [
  {
    role: "CEO",
    name: "椿 謙一",
    bio: [
      "松本深志高等学校卒業後、山梨大学大学院工学研究科修了。大手精密機器メーカーにて、メカニカルエンジニアとして設計から製造までを9年間主導し、技術開発・品質・量産化を横断してプロダクト開発を推進。",
      "その後、事業戦略部門にて年間数百億円規模のマーケティング・事業戦略を担当。生成AIを活用した業務変革やDX推進にもいち早く取り組む。",
      "技術・現場・事業戦略・AI活用を横断し、経営者との対話から本質的な課題を見極め、成長に向けた実行可能な道筋を描くことを強みとする。",
      "硬式テニスでは全中、インターハイ、全国選抜に出場。スキーではSAJ1級を取得し、大学時代には富士スピードウェイでタイムアタックにも挑戦。分野を問わず、やると決めたことには本気で向き合い、結果が出るまで追求し続ける姿勢を信条としている。",
    ],
    accent: "bg-indigo-500",
  },
  {
    role: "COO",
    name: "櫻井 顕也",
    bio: [
      "小山工業高等専門学校(高専) 電子制御工学科卒業後、大手精密機器メーカーに入社。産業機器の領域にて、サービスサポート戦略、設計、ワールドワイド販売会社のエンドユーザーサポート体制構築を主導。",
      "さらに、リモートモニタリングサービスの企画推進からグローバルなサポート現場への定着までを担い、現場レベルでのデータ活用を推進。その後、事業開発に従事し、社外の共創パートナーや自治体ともに0→1の価値創出に取り組む。",
      "新規事業開発、現場起点の課題解決、サービスサポート設計、データ活用を強みとし、本当に現場の人のためになることを最後までやり切る姿勢を大切にしている。",
    ],
    accent: "bg-purple-500",
  },
  {
    role: "CTO",
    name: "半田 岳志",
    bio: [
      "松本深志高校卒業後、東北大学へ進学。東北大学大学院工学研究科修了後、新卒で日立製作所に入社。鉄道ITシステムや人流シミュレーション技術の研究開発に従事。",
      "その後、大手精密機器メーカーにてデータ利活用基盤の構築・運用やデータ活用推進を主導。AI・データを活用した業務改善や意思決定支援を得意とし、技術だけでなく現場オペレーションまで踏まえた設計を強みとする。",
      "誰にとって何が真の価値かを考え抜き、データに基づく意思決定を自然に行える環境づくりを目指している。",
    ],
    accent: "bg-teal-500",
  },
];

const advisors = [
  {
    role: "Senior Advisor",
    name: "毛利 宏",
    affiliation: "工学博士 / 元 日産自動車 / 東京農工大学 名誉教授",
    bio: [
      "東京大学工学部卒業、同大学院工学系研究科修士課程修了。工学博士。日産自動車にて車両制御・自動運転・安全工学領域の研究開発に長年従事し、自動車産業における先端技術の社会実装を最前線で牽引してきた。",
      "その後、東京農工大学にて教授として車両運動制御・知能化技術の研究教育に携わり、産学連携プロジェクトを多数主導。多くの研究者・技術者を育て、現在は同大学名誉教授として後進の指導にあたる。",
      "産業界と学術界の双方を熟知する立場から、パイロットミューの取り組みに対して技術的な助言を担う。",
      "CEO椿の大学時代の所属研究室における指導教官であり、技術者としての姿勢と本質を見抜く視座を授けた恩師でもある。",
    ],
    accent: "bg-amber-500",
  },
];

export default function MembersPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <SectionBlob position="left" colors="from-violet-100/40 to-indigo-100/20" />

        <div className="relative mx-auto max-w-5xl px-5">
          <SectionHeading
            tag="Members"
            title="チーム紹介"
            sub="技術、現場、事業、AI活用。それぞれの専門性を横断しながら、地方企業の成長に伴走するメンバーです。"
          />

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {members.map((m) => (
              <motion.article
                key={m.name}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative flex flex-col rounded-2xl border border-gray-200/60 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-2xl"
              >
                <span
                  className={`inline-block self-start rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white ${m.accent}`}
                >
                  {m.role}
                </span>
                <h3 className="mt-3 text-xl font-bold text-gray-900">{m.name}</h3>
                <div className="mt-4 space-y-2.5 text-[0.82rem] leading-[1.85] text-gray-500">
                  {m.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.article>
            ))}
          </Stagger>

          {/* ===== Senior Advisor セクション ===== */}
          <div className="mt-24">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600">
                Advisor
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
            </div>

            <Stagger className="mx-auto grid max-w-3xl gap-6">
              {advisors.map((a) => (
                <motion.article
                  key={a.name}
                  variants={staggerItem}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group relative flex flex-col rounded-2xl border border-amber-200/50 bg-gradient-to-br from-white to-amber-50/30 p-8 shadow-sm transition-shadow duration-300 hover:shadow-2xl sm:p-10"
                >
                  <span
                    className={`inline-block self-start rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white ${a.accent}`}
                  >
                    {a.role}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-gray-900">{a.name}</h3>
                  <p className="mt-1 text-sm font-medium text-amber-700">{a.affiliation}</p>
                  <div className="mt-5 space-y-2.5 text-[0.82rem] leading-[1.85] text-gray-500">
                    {a.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </motion.article>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </PageShell>
  );
}