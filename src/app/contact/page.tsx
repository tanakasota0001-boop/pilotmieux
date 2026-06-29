"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  CheckCircle2,
  Loader2,
  Mail,
  Building2,
  User,
} from "lucide-react";
import type { Metadata } from "next";

// NOTE: metadata をここで定義できないため layout か generateMetadata で行うこと。
// Contact ページはフォームのため "use client" が必要。

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setName("");
    setCompany("");
    setEmail("");
    setMessage("");
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 outline-none transition-all focus:border-brand-primary focus:ring-4 focus:ring-indigo-50 focus:bg-white placeholder-slate-400 font-semibold";

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ヒーロー */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-slate-200/50">
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#4f46e5 2px, transparent 2px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-bold text-brand-primary"
          >
            <Sparkles className="h-3 w-3" />
            Contact
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black tracking-tight text-slate-800 sm:text-4xl leading-tight"
          >
            お気軽にご相談ください
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-lg text-slate-500 text-sm sm:text-base leading-relaxed"
          >
            まずは課題整理から、新たな事業づくりや改善の打ち手までお気軽にご相談ください。
          </motion.p>
        </div>
      </section>

      {/* フォーム */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-10 shadow-sm">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* お名前 */}
                  <div>
                    <label className="mb-2 flex items-center gap-1 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <User className="h-3.5 w-3.5 text-slate-400" />
                      お名前 <span className="text-rose-500 ml-1">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="例）山田 太郎"
                      className={inputClass}
                    />
                  </div>

                  {/* 会社名 */}
                  <div>
                    <label className="mb-2 flex items-center gap-1 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <Building2 className="h-3.5 w-3.5 text-slate-400" />
                      会社名 <span className="text-rose-500 ml-1">*</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="例）株式会社〇〇"
                      maxLength={100}
                      className={inputClass}
                    />
                  </div>

                  {/* メール */}
                  <div>
                    <label className="mb-2 flex items-center gap-1 text-xs font-bold text-slate-700 uppercase tracking-wider">
                      <Mail className="h-3.5 w-3.5 text-slate-400" />
                      メールアドレス <span className="text-rose-500 ml-1">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="例）your@example.com"
                      className={inputClass}
                    />
                  </div>

                  {/* 内容 */}
                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      お問い合わせ内容 / ご相談事項{" "}
                      <span className="text-rose-500 ml-1">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="できるだけ具体的にご記載ください。"
                      maxLength={5000}
                      className={`${inputClass} resize-y leading-relaxed`}
                    />
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-10 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-100 hover:scale-[1.03] transition-all disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          送信中...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          送信する
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-500 shadow-sm">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      送信が完了いたしました
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                      お問い合わせありがとうございます。ご入力いただいたメールアドレス宛に、担当者より折り返しご連絡いたします。
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      戻る
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
