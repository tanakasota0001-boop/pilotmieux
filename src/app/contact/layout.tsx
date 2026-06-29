import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問合せ",
  description:
    "株式会社パイロットミューへのお問合せ・ご相談はこちら。課題整理から新規事業づくりまでお気軽にご連絡ください。",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
