'use client'

import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export default function AnimatedSection({ 
  children, 
  className = "",
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const getInitialVariant = () => {
    switch (direction) {
      case 'down':
        return { opacity: 0, y: 40 }
      case 'up':
        return { opacity: 0, y: -40 }
      case 'left':
        return { opacity: 0, x: -40 }
      case 'right':
        return { opacity: 0, x: 40 }
      default:
        return { opacity: 0, y: 20 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialVariant()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitialVariant()}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}