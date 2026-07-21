'use client'

import Image from 'next/image'
import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'
import PixelCard from './PixelCard'

const ABOUT_TEXT =
  'Saya Muh. Ikhsan Fahmi — mahasiswa Teknologi Informasi di Telkom University dengan passion di Frontend Development, UI/UX Design, dan Graphic Design. Saya senang mempelajari hal baru dan mengeksplorasi integrasi AI untuk menciptakan produk digital yang fungsional dan intuitif.'

const STATS = [
  { value: '7+', label: 'Proyek dibangun' },
  { value: '4', label: 'Peran organisasi' },
  { value: '3+', label: 'Tahun di Telkom U' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-ink overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          {/* Portrait — pixel effect (cobalt) shimmers over the photo on hover */}
          <FadeIn delay={0} y={40} className="flex flex-col items-center gap-4">
            <PixelCard gap={5} speed={45} colors="#d7e2ea,#7c93ff,#3b5bff" noFocus>
              <Image
                src="/assets/myphoto.jpg"
                alt="Muh. Ikhsan Fahmi"
                fill
                sizes="300px"
                className="object-cover -z-10"
              />
            </PixelCard>
            <span className="text-mist/40 text-xs uppercase tracking-[0.25em]">
              Muh. Ikhsan Fahmi — Bandung, ID
            </span>
          </FadeIn>

          <FadeIn delay={0.1} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-mist font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          {/* Stats */}
          <FadeIn delay={0.1} y={24}>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 sm:gap-x-16">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span
                    className="heading-accent font-black leading-none"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-1 text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <ContactButton label="Mari bekerja sama" />
      </div>
    </section>
  )
}
