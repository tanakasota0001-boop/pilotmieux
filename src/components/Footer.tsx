import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* 左カラム：ロゴと基本情報 */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center group w-fit">
              <div className="relative h-7 w-auto aspect-[320/70] group-hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="pilotmieux"
                  width={120}
                  height={26}
                  className="h-full w-auto object-contain invert brightness-200"
                />
              </div>
            </Link>
            <p className="text-xs leading-relaxed max-w-sm">
              株式会社パイロットミューは、中小企業の課題を構造化し、実行・改善・定着までを一貫して支援する伴走パートナーです。
            </p>
            <div className="text-xs space-y-1">
              <p className="font-semibold text-slate-300">株式会社パイロットミュー（pilotmieux, Inc.）</p>
              <p>〒390-0847 長野県松本市笹部1-4-8</p>
              <p>事業内容: 経営コンサルティング / DX・AI導入支援</p>
            </div>
          </div>

          {/* 右カラム1：メニュー */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              メニュー
            </h3>
            <ul role="list" className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services (サービス)
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-white transition-colors">
                  Works (導入実績)
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  Company (会社情報)
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-white transition-colors">
                  Members (メンバー)
                </Link>
              </li>
            </ul>
          </div>

          {/* 右カラム2：その他 */}
          <div>
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              サポート
            </h3>
            <ul role="list" className="mt-4 space-y-2.5 text-xs">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact (お問合せ)
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy (プライバシーポリシー)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 株式会社パイロットミュー（pilotmieux, Inc.） All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
