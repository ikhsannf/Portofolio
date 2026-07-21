'use client'

import { ArrowDown } from 'lucide-react'
import FadeIn from './FadeIn'
import ContactButton from './ContactButton'
import PillLink from './PillLink'
import DotField from './DotField'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate h-screen flex flex-col pt-28 md:pt-32"
      style={{ overflowX: 'clip' }}
    >
      {/* Interactive dot-field background — cobalt-matched, sits behind content */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(59, 91, 255, 0.35)"
          gradientTo="rgba(124, 147, 255, 0.18)"
          glowColor="rgba(59, 91, 255, 0.18)"
        />
      </div>

      {/* Editorial meta row */}
      <FadeIn
        delay={0.1}
        y={-16}
        className="flex justify-between items-center px-6 md:px-10 z-20"
      >
        <span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.25em]">
          Based in Bandung — Indonesia
        </span>
        <span className="hidden sm:inline text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.25em]">
          Portfolio / Vol. 26
        </span>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden mt-auto">
        <FadeIn delay={0.15} y={40}>
          <h1 className="font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[13.5vw] sm:text-[14vw] md:text-[14.5vw] lg:text-[15vw]">
            <span className="hero-heading">Hi, i&apos;m </span>
            <span className="heading-accent">san</span>
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-mist font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            Frontend developer — merealisasikan ide menjadi produk digital yang
            fungsional dan intuitif
          </p>
        </FadeIn>

        {/* Scroll cue */}
        <FadeIn
          delay={0.45}
          y={0}
          className="hidden lg:flex flex-col items-center gap-2 text-mist/40"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ArrowDown className="size-4 animate-bounce" strokeWidth={2} />
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex flex-wrap justify-end items-center gap-3">
          <PillLink
            href="/cv/CV ATS_MUH. IKHSAN FAHMI.pdf"
            label="Unduh CV"
            className="hidden sm:inline-flex"
          />
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
