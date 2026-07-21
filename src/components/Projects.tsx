'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import PillLink from './PillLink'

type Project = {
  number: string
  name: string
  type: string
  status: string
  description: string
  tags: string[]
  link?: { href: string; label: string }
}

const FEATURED: Project[] = [
  {
    number: '01',
    name: 'SisaDuit',
    type: 'Fullstack Web App',
    status: 'Live',
    description:
      'Aplikasi pelacak keuangan pribadi berbasis AI yang membantu pencatatan & analisis transaksi secara otomatis menggunakan AI Consultant berbasis LLM.',
    tags: ['Next.js', 'AI / LLM', 'Fullstack'],
    link: { href: 'https://sisaduit.my.id', label: 'Live Project' },
  },
  {
    number: '02',
    name: 'KIAR',
    type: 'Web Application',
    status: 'Live',
    description:
      'Website fashion yang menampilkan koleksi pakaian dengan desain modern dan elegan. Dilengkapi katalog produk, tampilan yang menarik, dan pengalaman belanja yang menyenangkan.',
    tags: ['Web', 'Fashion', 'Catalog'],
    link: { href: 'https://dikiar.vercel.app/', label: 'Live Project' },
  },
  {
    number: '03',
    name: 'Dyslexi-Read',
    type: 'Browser Extension',
    status: 'In Dev',
    description:
      'Proyek PKM berupa ekstensi browser untuk membantu penyandang disleksia — menyesuaikan tampilan teks di website dengan font khusus, pengaturan spasi, dan kontras warna agar lebih mudah dibaca.',
    tags: ['Extension', 'Accessibility', 'PKM'],
    link: { href: '/proposals/Proposal-Dyslexi-Read.pdf', label: 'Proposal' },
  },
]

type CardProps = {
  project: Project
  index: number
  totalCards: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

function ProjectCard({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
}: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="h-[85vh] sticky top-24 md:top-32 flex justify-center">
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          backgroundColor: 'var(--color-ink-soft)',
        }}
        className="relative w-full max-w-6xl self-start rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-mist/15 p-4 sm:p-6 md:p-8 origin-top shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.8)]"
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="text-mist/25 font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 sm:gap-2">
              <span className="text-accent font-medium uppercase tracking-[0.25em] text-xs sm:text-sm">
                {project.type} · {project.status}
              </span>
              <h3
                className="text-mist font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
              <div className="hidden sm:flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-mist/20 px-3 py-0.5 text-[0.65rem] uppercase tracking-widest text-mist/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {project.link && (
            <PillLink href={project.link.href} label={project.link.label} />
          )}
        </div>

        {/* Bottom row — description panel (image slots replaced with copy) */}
        <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-mist/10 bg-ink px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20">
          <p
            className="text-mist/80 font-light leading-relaxed max-w-3xl"
            style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.8rem)' }}
          >
            {project.description}
          </p>
        </div>

        <span className="sr-only">{`${index + 1} of ${totalCards}`}</span>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const totalCards = FEATURED.length

  return (
    <section
      id="projects"
      className="relative z-10 bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="size-1.5 rounded-full bg-accent" />
        <span className="text-mist/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">
          Selected work
        </span>
      </div>

      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div ref={containerRef}>
        {FEATURED.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.03
          const range: [number, number] = [index / totalCards, 1]
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}
