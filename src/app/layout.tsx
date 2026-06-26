import type { Metadata } from "next";
import { Noto_Sans_JP, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 株式会社パイロットミュー（pilotmieux）",
    default: "株式会社パイロットミュー（pilotmieux）| 課題を構造化し、実行まで伴走する",
  },
  description: "株式会社パイロットミュー（pilotmieux）は、中小企業の課題を構造化し、実行・改善・定着までを一貫して支援します。",
  applicationName: "株式会社パイロットミュー（pilotmieux）",
  metadataBase: new URL("https://www.pilotmieux.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "株式会社パイロットミュー（pilotmieux）",
    description: "課題を構造化し、実行まで伴走する",
    url: "https://www.pilotmieux.com",
    siteName: "株式会社パイロットミュー（pilotmieux）",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "pilotmieux og image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社パイロットミュー（pilotmieux）",
    description: "課題を構造化し、実行まで伴走する",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
