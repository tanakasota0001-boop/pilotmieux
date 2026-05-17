// app/components/Nav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const base = 'transition'
  const active = 'text-black'
  const inactive = 'text-neutral-700 hover:text-black'

  return (
    <>
      {/* ===== PC MENU ===== */}
      <nav className="hidden md:flex text-sm space-x-6">
        <Link
          href="/company"
          className={`${base} ${
            pathname === '/company' ? active : inactive
          }`}
          aria-current={pathname === '/company' ? 'page' : undefined}
        >
          Company
        </Link>

        <Link
          href="/members"
          className={`${base} ${
            pathname === '/members' ? active : inactive
          }`}
          aria-current={pathname === '/members' ? 'page' : undefined}
        >
          Members
        </Link>

        <Link
          href="/services"
          className={`${base} ${
            pathname === '/services' ? active : inactive
          }`}
          aria-current={pathname === '/services' ? 'page' : undefined}
        >
          Services
        </Link>

        <Link
          href="/contact"
          className={`${base} ${
            pathname === '/contact' ? active : inactive
          }`}
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </Link>
      </nav>

      {/* ===== MOBILE BUTTON ===== */}
      <button
        className="md:hidden text-3xl leading-none text-neutral-800"
        onClick={() => setOpen(!open)}
        aria-label="メニュー"
      >
        {open ? '×' : '☰'}
      </button>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="absolute top-[72px] left-0 w-full bg-white border-b border-neutral-200 md:hidden z-50">
          <nav className="flex flex-col px-6 py-4 text-base">
            <Link
              href="/company"
              className="py-3 border-b border-neutral-100 text-neutral-800 font-medium tracking-[0.01em]"
              onClick={() => setOpen(false)}
            >
              Company
            </Link>

            <Link
              href="/members"
              className="py-3 border-b border-neutral-100 text-neutral-800 font-medium tracking-[0.01em]"
              onClick={() => setOpen(false)}
            >
              Members
            </Link>

            <Link
              href="/services"
              className="py-3 border-b border-neutral-100 text-neutral-800 font-medium tracking-[0.01em]"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="py-3 text-neutral-800 font-medium tracking-[0.01em]"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}