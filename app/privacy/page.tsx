export const metadata = {
  title: 'Privacy Policy | pilotmieux',
}

import Link from 'next/link'

export default function Privacy() {
  return (
    <main className="bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>

        <p className="mt-6 text-slate-600 leading-relaxed">
          pilotmieux Inc.（以下「当社」といいます。）は、
          当社のウェブサイト（https://pilotmieux.com/）における
          個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
        </p>

        <section className="mt-12 space-y-8 text-slate-700 leading-relaxed">

          <div>
            <h2 className="font-semibold text-lg">1. 個人情報の取得について</h2>
            <p className="mt-2">
              当社は、お問い合わせ等を通じて、氏名、会社名、
              メールアドレスその他の情報をご提供いただく場合があります。
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">2. 利用目的</h2>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>お問い合わせへの対応</li>
              <li>サービスに関するご案内およびご連絡</li>
              <li>サービス改善・向上のための分析</li>
              <li>上記利用目的に付随する目的</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">3. 第三者提供について</h2>
            <p className="mt-2">
              当社は、法令に基づく場合を除き、ご本人の同意なく
              個人情報を第三者に提供することはありません。
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">4. 安全管理措置</h2>
            <p className="mt-2">
              当社は、個人情報への不正アクセス、紛失、漏えい等を防止するため、
              適切な安全管理措置を講じます。
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">5. Cookie等の利用について</h2>
            <p className="mt-2">
              当サイトでは、アクセス解析や利便性向上のためにCookie等を
              利用する場合があります。
              これらの情報には特定の個人を識別する情報は含まれません。
              ブラウザ設定によりCookieを拒否することも可能です。
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">6. 開示・訂正・削除について</h2>
            <p className="mt-2">
              ご本人から自己の個人情報について開示・訂正・削除等の
              請求があった場合には、適切に対応いたします。
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">7. 法令遵守および見直し</h2>
            <p className="mt-2">
              当社は、個人情報に関する法令を遵守するとともに、
              本ポリシーの内容を適宜見直し、改善に努めます。
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">8. お問い合わせ窓口</h2>
            <p className="mt-2">
              個人情報の取扱いに関するご質問・ご相談につきましては、
              下記のフォームよりご連絡ください。
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-black text-white px-6 py-2 text-sm font-medium hover:opacity-90 transition"
              >
                お問い合わせフォームへ
              </Link>
            </div>
            <address className="not-italic mt-6 text-sm text-slate-600">
              pilotmieux Inc.<br />
              代表取締役社長 CEO　椿 謙一
            </address>
          </div>

        </section>

      </div>
    </main>
  )
}