import React from "react";

type Service = {
  number: string;
  title: string;
  supports: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "伴走型経営支援",
    supports:
      "経営者の壁打ち／経営課題の整理・優先順位付け／売上・利益改善テーマの検討／戦略ロードマップ作成",
    description: `
経営者の外部の右腕として、継続的に課題整理・壁打ち・実行支援を行います。

売上を伸ばしたい。
利益を改善したい。
AIやDXを進めたい。
でも、何から始めるべきか分からない。

そうした状態から、経営者との対話を通じて課題を整理し、優先順位をつけ、戦略ロードマップに落とし込みます。

顧問契約を通じて会社の状況を深く理解し、そのうえで必要なスポット支援を組み合わせます。
`,
  },
  {
    number: "02",
    title: "業務改善支援",
    supports:
      "課題整理・分析／属人化解消／ノウハウの可視化・伝承／改善ツール提案・定着支援",
    description: `
属人化を解消し、誰でも回る現場づくりを支援します。

この人しか分からない業務がある。
ベテランのノウハウが若手に伝わらない。
作業時間や手戻りが多い。
現場の状況が数字で見えない。

こうした課題を整理し、業務フロー、工数、リードタイム、判断基準、ノウハウを見える化します。

そのうえで、現場で使える仕組みとして実装し、生産性と利益の向上につなげます。
`,
  },
  {
    number: "03",
    title: "データ活用支援（AI・DX導入）",
    supports:
      "データ分析／ダッシュボード構築支援／業務プロセス改善／AI・デジタルツール提案・定着支援",
    description: `
AIやデジタル技術を、現場で使われる形にします。

AIを使いたいが、何に使えばいいか分からない。
データはあるが、経営判断に使えていない。
社長や一部の経営層だけが判断している。

このような課題に対し、業務整理、データの見える化、ダッシュボード構築、生成AI活用、ツール定着まで支援します。

データに基づいて判断できる状態をつくり、経営判断の権限委譲、生産性向上、利益改善につなげます。
`,
  },
  {
    number: "04",
    title: "新規事業・新規サービス開発支援",
    supports:
      "新規事業アイデア提案／市場・顧客ニーズ分析／新規サービス設計／価格・収益モデル設計／事業計画策定／販売戦略策定",
    description: `
経営者のアイデアや会社の強みを、売上につながる事業に変えます。

新しい収益源をつくりたい。
自社の強みを活かしたサービスを作りたい。
アイデアはあるが、事業化の進め方が分からない。

このようなテーマに対し、市場性、顧客価値、収益モデル、拡販施策を整理し、実行可能な事業計画に落とし込みます。
`,
  },
  {
    number: "05",
    title: "AI講演会・生成AI活用研修",
    supports:
      "AI研修・ワークショップ／社内AI研修のサポート",
    description: `
企業向けに、生成AIの講演会・研修を行います。

生成AIで何が変わるのか。
自社の業務でどう使えるのか。
社員にAI活用のきっかけを作りたい。

このようなニーズに対し、生成AIの基本理解から具体的な業務活用例まで分かりやすく伝えます。
`,
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-white text-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-black">
            Services
          </h1>

          <div className="space-y-6 text-gray-700 leading-8 text-[15px] md:text-base">
            <p className="text-xl md:text-2xl font-semibold text-black leading-relaxed">
              地方企業の可能性を、実装力で成長に変える。
            </p>

            <p>
              AI時代に、何から始めればいいのか分からない。<br />
              課題は多いのに、優先順位を決めきれない。
            </p>

            <p>
              多くの中小企業は、優れた技術や現場力を持ちながら、
              属人化やデータ未活用によって、
              その強みを十分に利益へつなげきれていません。
            </p>

            <p>
              パイロットミューは、経営者の右腕として伴走します。
            </p>

            <p>
              顧問契約をベースに継続的に入り込みながら、
              経営支援、AI・DX導入、業務改善、データ活用、
              新規事業開発など、必要な支援を組み合わせ、
              提案だけで終わらず、
              現場で使われる仕組みとして実装します。
            </p>

            <p>
              目指すのは、会社が継続的に成長できる状態をつくること。<br />
              データで判断できる組織をつくり、
              売上・利益につながる強い経営を支援します。
            </p>
          </div>
        </section>

        <section className="space-y-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-sm font-semibold tracking-widest text-gray-400">
                  {service.number}
                </span>

                <h2 className="text-2xl font-bold text-black">
                  {service.title}
                </h2>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 mb-3">
                  支援内容
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.supports.split("／").map((support) => (
                    <span
                      key={support}
                      className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
                    >
                      {support}
                    </span>
                  ))}
                </div>
              </div>

              <p className="whitespace-pre-line text-gray-700 leading-8">
                {service.description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;