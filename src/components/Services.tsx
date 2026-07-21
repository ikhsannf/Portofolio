'use client'

import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'

const SERVICES = [
  {
    number: '01',
    name: 'Frontend Development',
    description:
      'Membangun antarmuka modern dengan React, Next.js, dan TypeScript — responsif, cepat, dan mudah dikembangkan.',
  },
  {
    number: '02',
    name: 'UI/UX Design',
    description:
      'Merancang pengalaman pengguna yang intuitif — dari wireframe hingga prototipe high-fidelity di Figma.',
  },
  {
    number: '03',
    name: 'Graphic Design',
    description:
      'Membuat aset visual, layout, dan materi publikasi yang konsisten dengan identitas brand.',
  },
  {
    number: '04',
    name: 'AI Integration',
    description:
      'Mengeksplorasi integrasi AI dan LLM ke dalam produk web untuk menghadirkan pengalaman yang lebih cerdas.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-paper text-paper-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="size-1.5 rounded-full bg-accent" />
        <span className="text-paper-ink/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">
          What I do
        </span>
      </div>

      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            className="group relative flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(26, 23, 20, 0.15)' }}
          >
            <span
              className="font-black leading-none shrink-0 text-paper-ink/30 transition-colors duration-300 group-hover:text-accent"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>
            <div className="flex flex-col gap-3 sm:gap-4 pt-1 flex-1">
              <h3
                className="font-medium uppercase leading-tight transition-transform duration-300 group-hover:translate-x-2"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.description}
              </p>
            </div>
            <ArrowUpRight
              className="hidden sm:block size-8 md:size-10 shrink-0 self-center text-paper-ink/0 -translate-x-3 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0"
              strokeWidth={2}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
