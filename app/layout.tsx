import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "株式会社パイロットミュー（pilotmieux）",
  description:
    "株式会社パイロットミュー（pilotmieux）は、中小企業の課題を構造化し、実行・改善・定着までを一貫して支援します。",
  applicationName: "株式会社パイロットミュー（pilotmieux）",
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.pilotmieux.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "株式会社パイロットミュー（pilotmieux）",
    title: "株式会社パイロットミュー（pilotmieux）",
    description: "課題を構造化し、実行まで伴走する",
    images: ["/og.jpg"],
    url: "https://www.pilotmieux.com/",
  },
  icons: {
    icon: [
      {
        url: "/pm-favicon-circle-large.ico",
        rel: "shortcut icon",
        type: "image/x-icon",
      },
      {
        url: "/pm-favicon-32-circle-large.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/pm-favicon-circle-large.ico",
        rel: "icon",
        sizes: "16x16 32x32",
        type: "image/x-icon",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
