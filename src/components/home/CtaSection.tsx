import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/** CTAセクションはアニメーション不要のServer Component */
export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-28 text-white">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/og.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-brand-secondary/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black sm:text-4xl text-white tracking-tight">
          まずはお気軽にご相談ください
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm sm:text-base text-slate-300 leading-relaxed">
          課題整理から、新たな事業づくりや改善の打ち手まで。
          <br />
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
  );
}
