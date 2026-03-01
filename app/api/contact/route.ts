import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // ① info@ に通知
    await resend.emails.send({
      from: 'pilotmieux Inc. <info@pilotmieux.com>',
      to: 'info@pilotmieux.com',
      subject: '【お問い合わせ】新規メッセージ',
      html: `
        <h2>新しいお問い合わせ</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メール:</strong> ${email}</p>
        <p><strong>内容:</strong></p>
        <p>${message}</p>
      `,
    })

    // ② 送信者へ自動返信
    await resend.emails.send({
      from: 'pilotmieux Inc. <info@pilotmieux.com>',
      to: email,
      subject: 'お問い合わせありがとうございます',
      html: `
        <p>${name} 様</p>
        <p>お問い合わせありがとうございます。</p>
        <p>数日以内にご返信いたします。</p>
        <br />
        <p>pilotmieux</p>
        <p>https://www.pilotmieux.com</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}