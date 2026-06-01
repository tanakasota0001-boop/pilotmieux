"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, SectionHeading, PageShell, SectionBlob } from "@/components/ui";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!company.trim()) {
      setError("会社名は必須です。");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "送信に失敗しました。");
      }
      setSuccess(true);
      setName("");
      setCompany("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err?.message || "送信エラーが発生しました。");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 bg-gray-50/50 px-4 py-3 text-sm text-gray-800 outline-none transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:bg-white";

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-white py-20 sm:py-28">
        <SectionBlob position="right" colors="from-indigo-100/30 to-sky-100/20" />

        <div className="relative mx-auto max-w-2xl px-5">
          <SectionHeading
            tag="Contact"
            title="お気軽にご相談ください"
            sub={
              <>
                まずは課題整理から、新たな事業づくりや改善の打ち手まで
                <br className="hidden sm:block" />
                お気軽にご相談ください。
              </>
            }
          />

          <FadeUp delay={0.22}>
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5 rounded-2xl border border-gray-200/60 bg-white p-6 sm:p-8 shadow-sm"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  お名前 <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="例）山田 太郎"
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  会社名 <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass}
                  placeholder="例）株式会社〇〇"
                  autoComplete="organization"
                  maxLength={100}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  メールアドレス <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="例）your@example.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  お問い合わせ内容 / ご相談事項 <span className="text-rose-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClass} resize-y`}
                  placeholder="できるだけ具体的にご記載ください。"
                  maxLength={5000}
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-300/40 transition-all hover:scale-[1.04] hover:shadow-xl active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      送信中...
                    </>
                  ) : (
                    "送信する"
                  )}
                </button>
              </div>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-center text-sm text-emerald-700"
                  >
                    送信が完了しました。ありがとうございます。
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg bg-rose-50 border border-rose-200 p-4 text-center text-sm text-rose-700"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
