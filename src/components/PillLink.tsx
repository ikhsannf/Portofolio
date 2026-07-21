import { ArrowUpRight } from 'lucide-react'

type PillLinkProps = {
  href: string
  label: string
  className?: string
}

// Outline pill link — used for live demos, proposals and the CV.
export default function PillLink({ href, label, className = '' }: PillLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 rounded-full border border-mist/40 text-mist font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      {label}
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2.5}
      />
    </a>
  )
}
