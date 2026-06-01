"use client";

import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Company", href: "/company" },
  { label: "Members", href: "/members" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full backdrop-blur-lg bg-white/75 border-b border-gray-200/50 shadow-[0_1px_3px_rgba(0,0,0,.04)]"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1 sm:py-1.5">
          {/* ── Logo only ── */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/og.jpg"
              alt="pilotmieux"
              width={360}
              height={84}
              className="h-[66px] sm:h-[78px] md:h-[84px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-7 text-sm font-medium text-gray-500">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative py-1 transition-colors hover:text-gray-900 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-indigo-500 after:transition-all hover:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            aria-label="メニュー"
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 rounded bg-gray-700"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-5 rounded bg-gray-700"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 rounded bg-gray-700"
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <motion.nav
          initial={false}
          animate={
            menuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden md:hidden border-t border-gray-100 bg-white/90 backdrop-blur"
        >
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm font-medium text-gray-600">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 transition hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </motion.header>
    </>
  );
}
