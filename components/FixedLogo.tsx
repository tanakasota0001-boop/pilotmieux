// components/FixedLogo.tsx
import Image from 'next/image'

export const FixedLogo = () => {
  return (
    <div className="fixed top-6 left-6 z-50">
      <Image src="/logo.svg" alt="pilotmieux" width={160} height={32} />
    </div>
  )
}
