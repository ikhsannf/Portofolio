'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

// Pre-create motion components for each supported element type once, at module
// scope, so they keep a stable identity and retain their full prop typing.
const MOTION = {
  div: motion.create('div'),
  nav: motion.create('nav'),
  section: motion.create('section'),
  span: motion.create('span'),
  p: motion.create('p'),
  h1: motion.create('h1'),
  h2: motion.create('h2'),
  h3: motion.create('h3'),
  a: motion.create('a'),
  ul: motion.create('ul'),
  li: motion.create('li'),
}

type Tag = keyof typeof MOTION

type FadeInProps = {
  children: ReactNode
  as?: Tag
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  style?: React.CSSProperties
}

export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  const MotionTag = MOTION[as]

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
