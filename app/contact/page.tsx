'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('') // ★ 追加
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    // 簡易クライアントチェック（ブラウザrequiredも効くが二重化）
    if (!company.trim()) {
      setError('会社名は必須です。')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, company, email, message }), // ★ company を送る
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || '送信に失敗しました。')
      }

      setSuccess(true)
      setName('')
      setCompany('') // ★ リセット
      setEmail('')
      setMessage('')
    } catch (err: any) {
      setError(err?.message || '送信エラーが発生しました。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
        <div>
          <label className="block mb-2 text-sm">お名前 <span className="text-red-600">*</span></label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
            name="name"
            autoComplete="name"
            placeholder="例）山田 太郎"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">
            会社名 <span className="text-red-600">*</span>
          </label>
          <input
            required // ★ 必須化
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
            name="company"
            autoComplete="organization"
            placeholder="例）株式会社〇〇"
            maxLength={100}
            aria-required="true"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">メールアドレス <span className="text-red-600">*</span> </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
            name="email"
            autoComplete="email"
            placeholder="例）your@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">お問い合わせ内容 / ご相談事項 <span className="text-red-600">*</span> </label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
            name="message"
            placeholder="できるだけ具体的にご記載ください。"
            maxLength={5000}
          />
        </div>

        <button
          disabled={loading}
          className="bg-black text-white px-8 py-3 rounded-full disabled:opacity-60"
        >
          {loading ? '送信中...' : '送信する'}
        </button>

        {success && (
          <p className="text-green-600">送信が完了しました。ありがとうございます。</p>
        )}
        {error && (
          <p className="text-red-600" aria-live="polite">
            {error}
          </p>
        )}
      </form>
    </main>
  )
}