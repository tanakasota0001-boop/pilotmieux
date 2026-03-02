import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, company, email, message } = await req.json()

    // 必須チェック
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が不足しています（お名前 / 会社名 / メール / 内容）。' },
        { status: 400 }
      )
    }

    // 追加の簡易バリデーション
    const isBlank = (v: unknown) => typeof v !== 'string' || v.trim().length === 0
    const tooLong = (v: string, max: number) => v.length > max
    const emailLike = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

    if (isBlank(name) || isBlank(company) || isBlank(email) || isBlank(message)) {
      return NextResponse.json({ error: '空白のみの入力は不可です。' }, { status: 400 })
    }
    if (!emailLike(email)) {
      return NextResponse.json({ error: 'メールアドレスの形式が不正です。' }, { status: 400 })
    }
    if (tooLong(name, 100) || tooLong(company, 100) || tooLong(email, 200) || tooLong(message, 5000)) {
      return NextResponse.json({ error: '入力文字数の上限を超えています。' }, { status: 400 })
    }

    // HTML エスケープ（念のため）
    const esc = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    // ① info@ に通知
    await resend.emails.send({
      from: 'pilotmieux Inc. <info@pilotmieux.com>',
      to: 'info@pilotmieux.com',
      subject: '【お問い合わせ】新規メッセージ',
      html: `
        <h2>新しいお問い合わせ</h2>
        <p><strong>お名前:</strong> ${esc(name)}</p>
        <p><strong>会社名:</strong> ${esc(company)}</p>
        <p><strong>メール:</strong> ${esc(email)}</p>
        <p><strong>内容:</strong></p>
        <pre style="white-space:pre-wrap;font-family:inherit;">${esc(message)}</pre>
      `,
    })

    // ② 送信者へ自動返信
    await resend.emails.send({
      from: 'pilotmieux Inc. <info@pilotmieux.com>',
      to: email,
      subject: 'お問い合わせありがとうございます',
      html: `
        <p>${esc(name)} 様</p>
        <p>会社名：${esc(company)}</p>
        <p>お問い合わせありがとうございます。</p>
        <p>数日以内にご返信いたします。</p>
        <br />
        <p>pilotmieux</p>
        <p>https://www.pilotmieux.com</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('contact route error:', error)
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}