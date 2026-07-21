'use client'

import { useEffect, useRef, useState } from 'react'

// Tech-stack logos — local assets where available, Simple Icons CDN for the
// rest. Dark marks (Next.js) are forced white so they stay visible on ink.
const brand = (slug: string, color?: string) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`

const LOGOS = [
  brand('react'),
  brand('nextdotjs', 'white'),
  '/assets/typescript-icon-svgrepo-com.svg',
  brand('javascript'),
  brand('tailwindcss'),
  '/assets/html-5-svgrepo-com.svg',
  '/assets/css-3-svgrepo-com.svg',
  brand('git'),
  brand('figma'),
  '/assets/canva-icon.svg',
  '/assets/capcut.svg',
  '/assets/antigravity-color.svg',
]

const ROW_ONE = [...LOGOS.slice(0, 6), ...LOGOS.slice(0, 6), ...LOGOS.slice(0, 6)]
const ROW_TWO = [...LOGOS.slice(6), ...LOGOS.slice(6), ...LOGOS.slice(6)]

function Tile({ src }: { src: string }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded-2xl border border-mist/10 bg-ink-soft transition-colors hover:border-mist/30"
      style={{ width: '220px', height: '150px' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-12 w-12 md:h-16 md:w-16 object-contain"
      />
    </div>
  )
}

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.offsetTop
      const next = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(next)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-ink pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex items-center justify-between gap-4 px-6 md:px-10 mb-10 sm:mb-14">
        <span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">
          Tech stack &amp; tools
        </span>
        <span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">
          2023 — 2026
        </span>
      </div>

      <div className="edge-fade flex flex-col gap-3">
        {/* Row 1 — moves RIGHT */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_ONE.map((src, i) => (
            <Tile key={`r1-${i}`} src={src} />
          ))}
        </div>

        {/* Row 2 — moves LEFT */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_TWO.map((src, i) => (
            <Tile key={`r2-${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  )
}
