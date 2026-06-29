"use client";

const marqueeItems = [
  "経営支援", "AI・DX導入", "業務改善", "データ活用",
  "新規事業開発", "構造化", "伴走型支援", "現場実装",
  "ダッシュボード構築", "生成AI活用",
];

export function MarqueeSection() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative border-y border-slate-200/50 bg-white py-5 overflow-hidden">
      <div className="flex w-max gap-8 animate-marquee whitespace-nowrap">
        <div className="flex gap-12 items-center">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="flex items-center gap-3 text-xs font-bold text-slate-400 tracking-wider uppercase"
            >
              <span>{item}</span>
              <span className="text-brand-primary/30 text-[10px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
