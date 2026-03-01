'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })

    setLoading(false)

    if (res.ok) {
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div>
          <label className="block mb-2 text-sm">お名前</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">メールアドレス</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">お問い合わせ内容 / ご相談事項</label>
          <textarea
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button
          disabled={loading}
          className="bg-black text-white px-8 py-3 rounded-full"
        >
          {loading ? '送信中...' : '送信する'}
        </button>

        {success && (
          <p className="text-green-600">
            送信が完了しました。ありがとうございます。
          </p>
        )}
      </form>
    </main>
  )
}