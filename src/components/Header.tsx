'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Proyek', href: '#projects' },
  { label: 'Tentang', href: '#about' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Kontak', href: '#contact' },
]

// Sections with a light (paper) background — the nav flips to dark text when
// one of these sits under the header line.
const LIGHT_SECTIONS = ['services', 'experience']
const HEADER_LINE = 44 // px from top where the nav text sits

export default function Header() {
  const [onPaper, setOnPaper] = useState(false)

  useEffect(() => {
    const els = LIGHT_SECTIONS.map((id) => document.getElementById(id))
    let ticking = false
    const compute = () => {
      ticking = false
      const over = els.some((el) => {
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top <= HEADER_LINE && r.bottom >= HEADER_LINE
      })
      setOnPaper(over) // React bails out when unchanged, so this only re-renders on a flip
    }
    // Throttle to one layout read per frame instead of one per scroll event.
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(compute)
      }
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const fg = onPaper ? 'text-ink' : 'text-mist'

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        {/* Wordmark */}
        <a
          href="#top"
          className={`flex items-baseline gap-1 text-xl md:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${fg}`}
        >
          san
          <span className="text-accent">°</span>
        </a>

        {/* Availability pill */}
        <div
          className={`hidden md:flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-sm transition-colors duration-300 ${
            onPaper ? 'border-ink/15 bg-ink/[0.03]' : 'border-mist/15 bg-white/[0.02]'
          }`}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span
            className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
              onPaper ? 'text-ink/70' : 'text-mist/70'
            }`}
          >
            Available for work
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-4 sm:gap-7 lg:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base transition-colors duration-300 ${fg}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
