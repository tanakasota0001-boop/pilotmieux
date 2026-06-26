"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Services", href: "/services", label: "サービス" },
  { name: "Works", href: "/works", label: "導入実績" },
  { name: "Company", href: "/company", label: "会社情報" },
  { name: "Members", href: "/members", label: "メンバー" },
  { name: "Contact", href: "/contact", label: "お問合せ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ページ遷移時にモバイルメニューを閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* ロゴ */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform duration-300">
                <Compass className="h-5 w-5" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary opacity-0 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  pilotmieux
                </span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-slate-400 uppercase -mt-0.5">
                  パイロットミュー
                </span>
              </div>
            </Link>

            {/* デスクトップ ナビゲーション */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-7">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-brand-primary flex flex-col ${
                          isActive ? "text-brand-primary" : "text-slate-600"
                        }`}
                      >
                        <span>{item.name}</span>
                        <span className="text-[10px] font-normal text-slate-400 -mt-1 scale-90 origin-left">
                          {item.label}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-brand-primary"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 hover:shadow transition-all"
              >
                無料相談
                <ArrowRight className="h-3 w-3" />
              </Link>
            </nav>

            {/* モバイルメニューボタン */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none transition-colors"
                aria-label="メニュー開閉"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイル ナビゲーションメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden border-b border-slate-200/60 bg-white/95 backdrop-blur-lg shadow-lg"
          >
            <div className="space-y-1.5 px-4 pb-6 pt-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-indigo-50 text-brand-primary"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="text-xs font-normal text-slate-400">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight className={`h-4 w-4 opacity-50 ${isActive ? "text-brand-primary" : ""}`} />
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-100"
                >
                  お問合せフォームへ
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
