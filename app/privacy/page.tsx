"use client";

import { FadeUp, SectionHeading, PageShell } from "@/components/ui";

const sections = [
  {
    title: "1. 個人情報の取得について",
    body: "当社は、お問い合わせ等を通じて、氏名、会社名、メールアドレスその他の情報をご提供いただく場合があります。",
  },
  {
    title: "2. 利用目的",
    items: [
      "お問い合わせへの対応",
      "サービスに関するご案内およびご連絡",
      "サービス改善・向上のための分析",
      "上記利用目的に付随する目的",
    ],
  },
  {
    title: "3. 第三者提供について",
    body: "当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "4. 安全管理措置",
    body: "当社は、個人情報への不正アクセス、紛失、漏えい等を防止するため、適切な安全管理措置を講じます。",
  },
  {
    title: "5. Cookie等の利用について",
    body: "当サイトでは、アクセス解析や利便性向上のためにCookie等を利用する場合があります。これらの情報には特定の個人を識別する情報は含まれません。ブラウザ設定によりCookieを拒否することも可能です。",
  },
  {
    title: "6. 開示・訂正・削除について",
    body: "ご本人から自己の個人情報について開示・訂正・削除等の請求があった場合には、適切に対応いたします。",
  },
  {
    title: "7. 法令遵守および見直し",
    body: "当社は、個人情報に関する法令を遵守するとともに、本ポリシーの内容を適宜見直し、改善に努めます。",
  },
  {
    title: "8. お問い合わせ窓口",
    body: "個人情報の取扱いに関するご質問・ご相談につきましては、お問い合わせフォームよりご連絡ください。",
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHeading
            tag="Legal"
            title="Privacy Policy"
            sub="pilotmieux Inc.（以下「当社」といいます。）は、当社のウェブサイト（https://pilotmieux.com/）における個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。"
          />

          <div className="mt-12 space-y-10">
            {sections.map((sec, i) => (
              <FadeUp key={i} delay={i * 0.04}>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800">
                    {sec.title}
                  </h3>
                  {sec.body && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {sec.body}
                    </p>
                  )}
                  {sec.items && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-500">
                      {sec.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="mt-12 text-center text-xs text-gray-400">
              <p>pilotmieux Inc.</p>
              <p>代表取締役社長 CEO　椿 謙一</p>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
