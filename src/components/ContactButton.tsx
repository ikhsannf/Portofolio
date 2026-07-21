import { ArrowUpRight } from 'lucide-react'

type ContactButtonProps = {
  className?: string
  label?: string
}

export default function ContactButton({
  className = '',
  label = 'Hubungi Saya',
}: ContactButtonProps) {
  return (
    <a
      href="#contact"
      className={`group inline-flex items-center gap-2 rounded-full text-white font-medium uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 md:px-11 md:py-4 text-xs sm:text-sm md:text-base transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 ${className}`}
      style={{
        background:
          'linear-gradient(135deg, #7c93ff 0%, #3b5bff 48%, #1e40af 100%)',
        boxShadow:
          '0 8px 30px -8px rgba(59, 91, 255, 0.55), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 0 0 1px rgba(255,255,255,0.12)',
      }}
    >
      {label}
      <ArrowUpRight
        className="size-4 sm:size-[1.05rem] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2.5}
      />
    </a>
  )
}
