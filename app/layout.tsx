import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'pilotmieux｜課題を構造化し、実行まで伴走する',
  description:
    'pilotmieuxは、中小企業の課題を構造化し、実行・改善・定着までを一貫して支援します。',
  applicationName: "pilotmieux",
  manifest: "/manifest.json",
  metadataBase: new URL("https://pilotmieux.vercel.app"),
    openGraph: {
      siteName: "pilotmieux",
      title: 'pilotmieux',
      description: '課題を構造化し、実行まで伴走する',
      images: ['/og.jpg'],
      url: "https://pilotmieux.vercel.app",
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} bg-[#fafafa] text-neutral-900`}
      >
        {children}
      </body>
    </html>
  )
}
