// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '株式会社パイロットミュー（pilotmieux）｜課題を構造化し、実行まで伴走する',
  description:
    '株式会社パイロットミュー（pilotmieux）は、中小企業の課題を構造化し、実行・改善・定着までを一貫して支援します。',
  applicationName: '株式会社パイロットミュー（pilotmieux）',
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://www.pilotmieux.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: '株式会社パイロットミュー（pilotmieux）',
    title: '株式会社パイロットミュー（pilotmieux）',
    description: '課題を構造化し、実行まで伴走する',
    images: ['/og.jpg'],
    url: 'https://www.pilotmieux.com/',
  },
  icons: {
    icon: [

      // 32x32 PNG（高解像度UIで綺麗に見えやすい）
      // 互換用
      { url: '/pm-favicon-circle-large.ico', rel: 'shortcut icon', type: 'image/x-icon' },     
      { url: '/pm-favicon-32-circle-large.png', type: 'image/png', sizes: '32x32' },
      { url: '/pm-favicon-circle-large.ico', rel: 'icon', sizes: '16x16 32x32', type: 'image/x-icon' }


    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#fafafa] text-neutral-900`}>
        {/* ===== HEADER ===== */}
        <header className="bg-white border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" aria-label="pilotmieux ホーム">
              <Image
                src="/og.jpg"
                alt="pilotmieux logo"
                width={120}
                height={32}
                className="object-contain"
                priority
              />
            </Link>

            <Nav />
          </div>
        </header>

        {/* ===== MAIN ===== */}
        {children}

        {/* ===== FOOTER ===== */}
        <footer className="bg-black text-neutral-400 py-10 text-center text-sm space-y-2 mt-20">
          <div>© {new Date().getFullYear()} 株式会社パイロットミュー（pilotmieux, Inc.）</div>
          <div>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
