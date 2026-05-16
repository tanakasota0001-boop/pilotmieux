import React from "react";

type Member = {
  role: string;
  name: string;
  bio: string;
};

const members: Member[] = [
  {
    role: "CEO",
    name: "椿 謙一",
    bio: `
松本深志高等学校卒業後、山梨大学大学院工学研究科修了。

大手精密機器メーカーにて、メカニカルエンジニアとして設計から製造までを9年間主導し、技術開発・品質・量産化を横断してプロダクト開発を推進。

その後、事業戦略部門にて年間数百億円規模のマーケティング・事業戦略を担当。生成AIを活用した業務変革やDX推進にもいち早く取り組む。

技術・現場・事業戦略・AI活用を横断し、経営者との対話から本質的な課題を見極め、成長に向けた実行可能な道筋を描くことを強みとする。

硬式テニスでは全中、インターハイ、全国選抜に出場。スキーではSAJ1級を取得し、大学時代には富士スピードウェイでタイムアタックにも挑戦。

分野を問わず、やると決めたことには本気で向き合い、結果が出るまで追求し続ける姿勢を信条としている。
`,
  },
  {
    role: "COO",
    name: "櫻井 顕也",
    bio: `
小山工業高等専門学校(高専) 電子制御工学科卒業後、大手精密機器メーカーに入社。

産業機器の領域にて、サービスサポート戦略、設計、ワールドワイド販売会社のエンドユーザーサポート体制構築を主導。

さらに、リモートモニタリングサービスの企画推進からグローバルなサポート現場への定着までを担い、現場レベルでのデータ活用を推進。

その後、事業開発に従事し、社外の共創パートナーや自治体ともに0→1の価値創出に取り組む。

新規事業開発、現場起点の課題解決、サービスサポート設計、データ活用を強みとし、本当に現場の人のためになることを最後までやり切る姿勢を大切にしている。
`,
  },
  {
    role: "CTO",
    name: "半田 岳志",
    bio: `
東北大学大学院工学研究科修了後、新卒で日立製作所に入社。

鉄道ITシステムや人流シミュレーション技術の研究開発に従事。その後、大手精密機器メーカーにてデータ利活用基盤の構築・運用やデータ活用推進を主導。

AI・データを活用した業務改善や意思決定支援を得意とし、技術だけでなく現場オペレーションまで踏まえた設計を強みとする。

誰にとって何が真の価値かを考え抜き、データに基づく意思決定を自然に行える環境づくりを目指している。
`,
  },
];

const MembersPage = () => {
  return (
    <main className="bg-white text-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-black">
            Members
          </h1>

          <p className="text-gray-600 leading-8 max-w-3xl">
            技術、現場、事業、AI活用。
            それぞれの専門性を横断しながら、
            地方企業の成長に伴走するメンバーです。
          </p>
        </section>

        <section className="space-y-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <div className="mb-6">
                <p className="text-sm tracking-widest text-gray-400 font-semibold mb-2">
                  {member.role}
                </p>

                <h2 className="text-3xl font-bold text-black">
                  {member.name}
                </h2>
              </div>

              <p className="whitespace-pre-line text-gray-700 leading-8">
                {member.bio}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default MembersPage;