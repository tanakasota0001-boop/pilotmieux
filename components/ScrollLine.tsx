// components/ScrollLine.tsx
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

export const ScrollLine = () => {
  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="fixed left-8 top-0 h-full w-px bg-slate-200 z-40">
      <motion.div
        className="w-px bg-gradient-to-b from-indigo-500 to-green-400"
        style={{ height }}
      />
    </div>
  )
}
