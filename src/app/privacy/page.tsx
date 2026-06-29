import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "株式会社パイロットミューのプライバシーポリシーをご確認ください。個人情報の取扱いについて定めています。",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. 個人情報の取得について",
    content:
      "当社は、お問い合わせ等を通じて、氏名、会社名、メールアドレスその他の情報をご提供いただく場合があります。",
  },
  {
    title: "2. 利用目的",
    list: [
      "お問い合わせへの対応",
      "サービスに関するご案内およびご連絡",
      "サービス改善・向上のための分析",
      "上記利用目的に付随する目的",
    ],
  },
  {
    title: "3. 第三者提供について",
    content:
      "当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "4. 安全管理措置",
    content:
      "当社は、個人情報への不正アクセス、紛失、漏えい等を防止するため、適切な安全管理措置を講じます。",
  },
  {
    title: "5. Cookie等の利用について",
    content:
      "当サイトでは、アクセス解析や利便性向上のためにCookie等を利用する場合があります。これらの情報には特定の個人を識別する情報は含まれません。ブラウザ設定によりCookieを拒否することも可能です。",
  },
  {
    title: "6. 開示・訂正・削除について",
    content:
      "ご本人から自己の個人情報について開示・訂正・削除等の請求があった場合には、適切に対応いたします。",
  },
  {
    title: "7. 法令遵守および見直し",
    content:
      "当社は、個人情報に関する法令を遵守するとともに、本ポリシーの内容を適宜見直し、改善に努めます。",
  },
  {
    title: "8. お問い合わせ窓口",
    content:
      "個人情報の取扱いに関するご質問・ご相談につきましては、お問い合わせフォームよりご連絡ください。",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badgeContent={<><ShieldCheck className="h-3 w-3" />Legal</>}
        badgeColorClass="bg-indigo-50 text-brand-primary"
        title="Privacy Policy"
        description={`pilotmieux Inc.（以下「当社」といいます。）は、当社のウェブサイト（https://pilotmieux.com/）における個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。`}
        accentColor="bg-slate-100/50"
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-10">
            {sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h2 className="text-base font-extrabold text-slate-900 border-l-4 border-brand-primary pl-3">
                  {section.title}
                </h2>
                {"content" in section && section.content && (
                  <p className="text-sm leading-relaxed text-slate-600 pl-4">
                    {section.content}
                  </p>
                )}
                {"list" in section && section.list && (
                  <ul className="list-disc pl-8 space-y-1 text-sm text-slate-600">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="pt-8 border-t border-slate-100 text-center text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-500">pilotmieux Inc.</p>
              <p>代表取締役社長 CEO　椿 謙一</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
