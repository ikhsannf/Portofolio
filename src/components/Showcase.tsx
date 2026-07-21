'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Sparkles, Zap, Layout } from 'lucide-react'

type ShowProject = {
  name: string
  type: string
  status: string
  description: string
  tags: string[]
  link?: { href: string; label: string }
  // Drop a screenshot into public/assets and set image: '/assets/xxx.jpg'
  // to show it instead of the typographic card — no other change needed.
  image?: string
}

const PROJECTS: ShowProject[] = [
  {
    name: 'SisaDuit',
    type: 'Fullstack Web App',
    status: 'Live',
    description:
      'Pelacak keuangan pribadi berbasis AI — pencatatan & analisis transaksi otomatis lewat AI Consultant berbasis LLM.',
    tags: ['Next.js', 'AI / LLM', 'Fullstack'],
    link: { href: 'https://sisaduit.my.id', label: 'Live' },
  },
  {
    name: 'KIAR',
    type: 'Web Application',
    status: 'Live',
    description:
      'Website fashion dengan desain modern dan elegan — katalog produk dan pengalaman belanja yang menyenangkan.',
    tags: ['Web', 'Fashion', 'Catalog'],
    link: { href: 'https://dikiar.vercel.app/', label: 'Live' },
  },
  {
    name: 'Dyslexi-Read',
    type: 'Browser Extension',
    status: 'In Dev',
    description:
      'Proyek PKM — ekstensi browser yang menyesuaikan teks (font, spasi, kontras) agar lebih mudah dibaca penyandang disleksia.',
    tags: ['Extension', 'A11y', 'PKM'],
    link: { href: '/proposals/Proposal-Dyslexi-Read.pdf', label: 'Proposal' },
  },
  {
    name: 'RentStuff',
    type: 'Web Application',
    status: 'Ongoing',
    description:
      'Aplikasi penyewaan perlengkapan hobi — proyek tim yang masih dalam pengembangan aktif.',
    tags: ['Web', 'Team', 'Rental'],
  },
  {
    name: 'movInfo',
    type: 'Web Application',
    status: 'In Dev',
    description:
      'Website informasi film: rating, ulasan, dan berita terkini seputar dunia perfilman.',
    tags: ['Web', 'API', 'Movies'],
  },
  {
    name: 'TaskFlow',
    type: 'Web Application',
    status: 'In Dev',
    description:
      'Aplikasi manajemen tugas (to-do list) dengan antarmuka bersih dan intuitif untuk mengorganisir pekerjaan harian.',
    tags: ['Web', 'Productivity'],
  },
  {
    name: 'Snippex',
    type: 'Web Application',
    status: 'In Dev',
    description:
      'Platform kompilasi template kode untuk menyimpan, mengorganisir, dan berbagi snippet — mempercepat workflow.',
    tags: ['Web', 'DevTools'],
  },
]

const HEADING_ICONS = [Sparkles, Zap, Layout]
const META_PILLS = ['Rapi', 'Fungsional', 'Intuitif']

export default function Showcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % PROJECTS.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const project = PROJECTS[active]
  const counter = String(active + 1).padStart(2, '0')
  const total = String(PROJECTS.length).padStart(2, '0')

  return (
    <section id="showcase" className="relative w-full bg-ink text-mist flex flex-col">
      {/* Heading */}
      <div className="px-6 md:px-16 pt-24 md:pt-32 mb-14 flex flex-col xl:flex-row justify-between gap-10">
        <h2 className="text-[1.8rem] md:text-[3rem] lg:text-[3.6rem] leading-[1.15] font-medium tracking-tight max-w-4xl">
          Dibangun dari rasa penasaran
          <span className="inline-flex gap-2 md:gap-3 align-middle mx-2 md:mx-4 -translate-y-[4px]">
            {HEADING_ICONS.map((Icon, i) => (
              <span
                key={i}
                className="flex size-10 md:size-14 items-center justify-center rounded-full border border-mist/25 bg-ink-soft text-mist/50 transition-colors hover:bg-mist hover:text-ink hover:border-mist"
              >
                <Icon size={22} strokeWidth={1.5} />
              </span>
            ))}
          </span>
          &amp; kode.
        </h2>

        <div className="xl:text-right xl:max-w-xs">
          <p className="text-[9px] md:text-[10px] tracking-widest text-mist/40 uppercase mb-6 leading-relaxed">
            Bukan sekadar menulis kode
            <br />
            tetapi merancang produk yang berarti
          </p>
          <div className="flex flex-wrap xl:justify-end gap-2">
            {META_PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-mist/25 px-5 py-2 text-[9px] tracking-widest uppercase text-mist/70 transition-colors hover:bg-mist hover:text-ink hover:border-mist"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Two-column panel */}
      <div className="h-px bg-mist/15" />
      <div className="flex flex-col md:flex-row">
        {/* Left — active project spotlight */}
        <div className="md:w-[38%] border-b md:border-b-0 md:border-r border-mist/15 min-h-[420px] md:min-h-[520px] flex flex-col">
          <div className="p-8 text-mist/40 text-xl tracking-[0.3em]">∗∗∗</div>

          <div className="relative flex-1 flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full rounded-2xl object-cover"
                  />
                ) : (
                  <div className="flex flex-col gap-5">
                    <span
                      className="heading-accent font-black leading-none"
                      style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
                    >
                      {counter}
                    </span>
                    <p className="text-mist/70 text-sm md:text-base leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-mist/20 px-3 py-0.5 text-[0.65rem] uppercase tracking-widest text-mist/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex w-fit items-center gap-1 text-xs uppercase tracking-widest text-accent border-b border-accent/40 pb-0.5 transition-colors hover:border-accent"
                      >
                        {project.link.label} ↗
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="p-8 flex items-end gap-1 text-[10px] tracking-widest uppercase">
            <div className="relative h-4 w-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={counter}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 text-mist/60"
                >
                  {counter}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-mist/25">/</span>
            <span className="text-mist/60">{total}</span>
          </div>
        </div>

        {/* Right — clickable index */}
        <div className="md:w-[62%] flex flex-col">
          <div className="border-b border-mist/15 p-8 flex items-center justify-between text-[10px] tracking-widest uppercase text-mist/40">
            <span>Klik untuk menjelajah</span>
            <div className="relative h-4 w-24 overflow-hidden text-right">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 text-accent"
                >
                  Proyek {counter}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <ul>
            {PROJECTS.map((p, i) => {
              const isActive = i === active
              return (
                <li key={p.name} className="border-b border-mist/10 px-8">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center justify-between gap-4 py-6 md:py-7 text-left transition-colors ${
                      isActive ? 'text-mist' : 'text-mist/30 hover:text-mist/60'
                    }`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-xl md:text-[1.9rem] font-medium tracking-tight">
                        {p.name}
                      </span>
                      <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-mist/30">
                        {p.type}
                      </span>
                    </span>
                    <span className="flex items-center gap-4">
                      <span
                        className={`text-[10px] uppercase tracking-widest ${
                          isActive ? 'text-accent' : 'text-mist/30'
                        }`}
                      >
                        {p.status}
                      </span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowUpRight size={22} strokeWidth={1} className="text-mist/50" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="h-px bg-mist/15" />
      <div className="px-8 py-8 text-[10px] tracking-widest uppercase text-mist/50">
        Selalu belajar, selalu membangun
      </div>
    </section>
  )
}
