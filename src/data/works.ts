export type WorkCase = {
  id: string;
  caseNum: string;
  company: string;
  industry: string;
  location: string;
  subtitle: string;
  websiteUrl: string;
  overview: string;
  tags: string[];
  approaches: string[];
  valueStatement: string;
};

export type Partner = {
  id: string;
  company: string;
  industry: string;
  websiteUrl: string;
};

export const workCases: WorkCase[] = [
  {
    id: "takano",
    caseNum: "CASE 01",
    company: "株式会社タカノ",
    industry: "精密板金加工メーカー",
    location: "長野県松本市",
    subtitle: "現場データ活用の伴走支援",
    websiteUrl: "https://www.takano-s.co.jp/",
    overview:
      "大型・精密板金加工をコア技術に、ステンレスフレームユニットの多品種少量生産から量産まで対応する松本市の製造企業。最新鋭の設備と自動倉庫を擁し、サプライチェーンの中核を担う安定供給体制を構築されています。",
    tags: [
      "生産データの可視化",
      "品質管理データの整備",
      "現場KPIダッシュボード構築",
      "データ活用の定着支援",
    ],
    approaches: [
      "現場ヒアリングを通じた課題の構造化と優先順位付け",
      "生産実績・品質検査データの一元化と可視化基盤の設計",
      "現場リーダーが日常的に参照できるKPIダッシュボードの構築",
      "データを「見る」から「使う」へ——意思決定プロセスへの組み込み支援",
      "現場スタッフへのデータ活用トレーニングと定着フォロー",
    ],
    valueStatement:
      "単なるツール導入ではなく、現場の方々が自らデータを活用し、改善アクションにつなげられる状態を目指して伴走しています。データに基づく判断が日常になることで、品質向上・生産性改善・リードタイム短縮といった成果を継続的に生み出す基盤づくりをご支援しています。",
  },
];

export const partners: Partner[] = [
  {
    id: "net-astoryo",
    company: "ネットアストーヨー住器株式会社",
    industry: "住宅建材・リフォーム",
    websiteUrl: "https://www.rekurasu.co.jp/",
  },
];
