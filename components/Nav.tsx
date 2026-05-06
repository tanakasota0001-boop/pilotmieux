// app/components/Nav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const base = 'transition'
  const active = 'text-black'
  const inactive = 'text-neutral-600 hover:opacity-100'

  return (
    <nav className="text-sm space-x-6">
      <Link
        href="/company"
        className={`${base} ${pathname === '/company' ? active : inactive}`}
        aria-current={pathname === '/company' ? 'page' : undefined}
      >
        Company
      </Link>

      {/* <Link
        href="/service"
        className={`${base} ${pathname === '/service' ? active : inactive}`}
        aria-current={pathname === '/service' ? 'page' : undefined}
      >
        Service
      </Link> */}

      <Link
        href="/contact"
        className={`${base} ${pathname === '/contact' ? active : inactive}`}
        aria-current={pathname === '/contact' ? 'page' : undefined}
      >
        Contact
      </Link>
    </nav>

)
}
