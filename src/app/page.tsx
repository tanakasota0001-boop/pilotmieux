// Server Component — "use client" を削除することでSEO・パフォーマンスが向上する
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeSection } from "@/components/home/MarqueeSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { WorksSection } from "@/components/home/WorksSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-50">
      <HeroSection />
      <MarqueeSection />
      <WhatWeDoSection />
      <PhilosophySection />
      <WorksSection />
      <CtaSection />
    </div>
  );
}
