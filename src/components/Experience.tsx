'use client'

import FadeIn from './FadeIn'

type TimelineItem = {
  number: string
  year: string
  typeLabel: string
  title: string
  organization: string
  description: string
  certificateUrl?: string
}

const TIMELINE: TimelineItem[] = [
  {
    number: '01',
    year: '2023 — Sekarang',
    typeLabel: 'Pendidikan',
    title: 'Information Technology Student',
    organization: 'Telkom University',
    description:
      'Menempuh pendidikan S1 di jurusan Teknologi Informasi dengan fokus pada pengembangan perangkat lunak dan desain UI/UX.',
  },
  {
    number: '02',
    year: '2024',
    typeLabel: 'Organisasi',
    title: 'Staff Muda — Divisi Minat dan Bakat',
    organization: 'Himpunan Mahasiswa Information Technology (HMIT)',
    description:
      'Aktif sebagai Staff Muda di Divisi Minat dan Bakat HMIT, membantu merancang dan mengelola program pengembangan bakat mahasiswa di lingkungan jurusan.',
  },
  {
    number: '03',
    year: '2025',
    typeLabel: 'Organisasi',
    title: 'Staff Ahli — Divisi Komunikasi dan Informasi',
    organization: 'Himpunan Mahasiswa Information Technology (HMIT)',
    description:
      'Dipercaya sebagai Staff Ahli di Divisi Komunikasi dan Informasi HMIT, bertanggung jawab dalam pengelolaan komunikasi, publikasi, dan penyebaran informasi himpunan.',
  },
  {
    number: '04',
    year: '2025',
    typeLabel: 'Organisasi',
    title: 'PDDT — Ospek Jurusan HMIT',
    organization: 'Himpunan Mahasiswa Information Technology (HMIT)',
    description:
      'Bagian dari Public Documentation & Design Team (PDDT) dalam kegiatan orientasi jurusan HMIT, bertanggung jawab atas dokumentasi dan desain visual acara.',
  },
  {
    number: '05',
    year: '2025',
    typeLabel: 'Pencapaian',
    title: 'NetDevelopment 2025',
    organization: 'Adaptive Network Lab',
    description:
      'Berhasil menyelesaikan program NetDevelopment 2025 yang diselenggarakan oleh Adaptive Network Lab, memperdalam pemahaman tentang pengembangan jaringan dan teknologi terkait.',
    certificateUrl: '/certificate/MUH. IKHSAN FAHMI.pdf',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-20 bg-paper text-paper-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="size-1.5 rounded-full bg-accent" />
        <span className="text-paper-ink/50 text-xs sm:text-sm font-medium uppercase tracking-[0.3em]">
          Pendidikan, organisasi &amp; pencapaian
        </span>
      </div>

      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </h2>

      <div className="max-w-5xl mx-auto">
        {TIMELINE.map((item, i) => (
          <FadeIn
            key={item.number}
            delay={i * 0.08}
            className="group relative flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(26, 23, 20, 0.15)' }}
          >
            <span
              className="font-black leading-none shrink-0 text-paper-ink/30 transition-colors duration-300 group-hover:text-accent"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {item.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3 pt-1 flex-1">
              <span className="text-accent font-medium uppercase tracking-[0.25em] text-xs sm:text-sm">
                {item.year} · {item.typeLabel}
              </span>
              <h3
                className="font-medium uppercase leading-tight transition-transform duration-300 group-hover:translate-x-2"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {item.title}
              </h3>
              <p className="text-paper-ink/60 text-xs sm:text-sm font-medium uppercase tracking-widest">
                {item.organization}
              </p>
              <p
                className="font-light leading-relaxed max-w-2xl opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {item.description}
              </p>
              {item.certificateUrl && (
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-1 text-xs sm:text-sm font-medium uppercase tracking-widest border-b border-paper-ink/30 pb-0.5 transition-colors hover:text-accent hover:border-accent"
                >
                  Lihat Sertifikat ↗
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
