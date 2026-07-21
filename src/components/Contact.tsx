'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'

const SOCIALS = [
  { name: 'LinkedIn', username: '@justsann', href: 'https://www.linkedin.com/in/justsann/' },
  { name: 'GitHub', username: '@ikhsannf', href: 'https://github.com/ikhsannf' },
  { name: 'X (Twitter)', username: '@vinncas_', href: 'https://x.com/vinncas_' },
  { name: 'Instagram', username: '@justsannn', href: 'https://www.instagram.com/justsannn/' },
]

const inputClass =
  'w-full bg-transparent border-0 border-b border-mist/20 focus:border-accent focus:outline-none py-3 text-base font-light text-mist placeholder:text-mist/30 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

const labelClass =
  'block text-mist/50 text-xs font-medium uppercase tracking-widest mb-1'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer
      id="contact"
      className="relative z-30 bg-ink rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-36 pb-10"
    >
      {/* Big CTA */}
      <div className="max-w-6xl mx-auto">
        <FadeIn y={40}>
          <p className="text-mist/40 font-medium uppercase tracking-[0.3em] text-xs sm:text-sm mb-6">
            (Ada proyek?)
          </p>
        </FadeIn>

        <FadeIn delay={0.1} y={40}>
          <a
            href="mailto:ikhsan.f3105@gmail.com"
            className="group block hero-heading font-black uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 11vw, 150px)' }}
          >
            Let&apos;s build
            <br />
            <span className="inline-flex items-center gap-3 sm:gap-6">
              something
              <ArrowUpRight
                className="size-[0.7em] text-accent transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"
                strokeWidth={2.5}
              />
            </span>
          </a>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <a
            href="mailto:ikhsan.f3105@gmail.com"
            className="inline-block mt-8 text-mist text-lg sm:text-2xl md:text-3xl font-light lowercase tracking-tight border-b border-mist/30 pb-1 transition-colors hover:border-accent hover:text-accent"
          >
            ikhsan.f3105@gmail.com
          </a>
        </FadeIn>
      </div>

      {/* Socials + form */}
      <div className="max-w-6xl mx-auto mt-20 sm:mt-28 grid grid-cols-12 gap-x-6 gap-y-14 lg:gap-10">
        {/* Social index */}
        <FadeIn y={24} className="col-span-12 lg:col-span-5">
          <p className="text-mist/60 font-light leading-relaxed max-w-md mb-8 text-base sm:text-lg">
            Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk
            koneksi dan peluang baru.
          </p>

          <div className="border-t border-mist/10">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4 py-4 border-b border-mist/10 transition-colors hover:text-accent"
              >
                <span className="text-xs sm:text-sm font-medium uppercase tracking-widest">
                  {social.name}
                </span>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-mist/40 group-hover:text-accent truncate">
                  {social.username} ↗
                </span>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.1} y={24} className="col-span-12 lg:col-span-7">
          {submitStatus === 'success' && (
            <p className="text-xs sm:text-sm uppercase tracking-widest border border-mist/30 text-mist px-4 py-3 mb-8">
              ✓ Pesan berhasil terkirim — saya akan segera membalasnya
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-xs sm:text-sm uppercase tracking-widest border border-accent text-accent px-4 py-3 mb-8">
              ✕ Gagal mengirim pesan — silakan coba lagi
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Nama <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="Nama lengkap Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={labelClass}>
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                disabled={isSubmitting}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={inputClass}
                placeholder="Pertanyaan proyek, kolaborasi, dll."
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Pesan <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                disabled={isSubmitting}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Ceritakan tentang proyek Anda, persyaratan, linimasa, dan anggaran..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-widest px-9 py-3.5 text-xs sm:text-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              style={{
                background:
                  'linear-gradient(135deg, #7c93ff 0%, #3b5bff 48%, #1e40af 100%)',
                boxShadow:
                  '0 8px 30px -8px rgba(59, 91, 255, 0.55), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 0 0 1px rgba(255,255,255,0.12)',
              }}
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </button>
          </form>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-20 sm:mt-28 pt-8 border-t border-mist/10 flex flex-col sm:flex-row gap-6 sm:gap-4 items-start sm:items-center justify-between">
        <span className="text-mist/40 text-xs sm:text-sm uppercase tracking-widest">
          © 2026 Muh. Ikhsan Fahmi — Frontend Developer
        </span>

        <span className="text-mist/40 text-xs sm:text-sm uppercase tracking-widest">
          Built with Next.js
        </span>

        <a
          href="#top"
          className="text-mist/40 text-xs sm:text-sm uppercase tracking-widest transition-colors hover:text-mist"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
