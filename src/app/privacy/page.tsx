"use client";

import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. 個人情報の取得について",
      content: "当社は、お問い合わせ等を通じて、氏名、会社名、メールアドレスその他の情報をご提供いただく場合があります。"
    },
    {
      title: "2. 利用目的",
      list: [
        "お問い合わせへの対応",
        "サービスに関するご案内およびご連絡",
        "サービス改善・向上のための分析",
        "上記利用目的に付随する目的"
      ]
    },
    {
      title: "3. 第三者提供について",
      content: "当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。"
    },
    {
      title: "4. 安全管理措置",
      content: "当社は、個人情報への不正アクセス、紛失、漏えい等を防止するため、適切な安全管理措置を講じます。"
    },
    {
      title: "5. Cookie等の利用について",
      content: "当サイトでは、アクセス解析や利便性向上のためにCookie等を利用する場合があります。これらの情報には特定の個人を識別する情報は含まれません。ブラウザ設定によりCookieを拒否することも可能です。"
    },
    {
      title: "6. 開示・訂正・削除について",
      content: "ご本人から自己 of 個人情報について開示・訂正・削除等の請求があった場合には、適切に対応いたします。"
    },
    {
      title: "7. 法令遵守および見直し",
      content: "当社は、個人情報に関する法令を遵守するとともに、本ポリシーの内容を適宜見直し、改善に努めます。"
    },
    {
      title: "8. お問い合わせ窓口",
      content: "個人情報の取扱いに関するご質問・ご相談につきましては、お問い合わせフォームよりご連絡ください。"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-slate-200/50">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#4f46e5 2px, transparent 2px)", backgroundSize: "24px 24px" }}></div>
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-slate-100/50 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-brand-primary"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Legal</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-800 sm:text-4xl"
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-slate-500 text-sm sm:text-base leading-relaxed"
          >
            pilotmieux Inc.（以下「当社」といいます。）は、当社のウェブサイト（https://pilotmieux.com/）における個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
          </motion.p>
        </div>
      </section>

      {/* ポリシー本文 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-10"
          >
            {sections.map((section, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-base font-extrabold text-slate-900 border-l-3 border-brand-primary pl-3">
                  {section.title}
                </h3>
                {section.content && (
                  <p className="text-sm leading-relaxed text-slate-600 pl-4">
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul className="list-disc pl-8 space-y-1 text-sm text-slate-600">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* フッター署名 */}
            <div className="pt-8 border-t border-slate-100 text-center text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-500">pilotmieux Inc.</p>
              <p>代表取締役社長 CEO　椿 謙一</p>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
