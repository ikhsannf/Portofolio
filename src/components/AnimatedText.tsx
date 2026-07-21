'use client'

import { Fragment, useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'

type AnimatedTextProps = {
  text: string
  className?: string
  style?: React.CSSProperties
}

type WordProps = {
  word: string
  progress: MotionValue<number>
  range: [number, number]
}

function Word({ word, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1])
  // One scroll-linked value per word (not per character) — same reveal effect,
  // ~7x fewer subscriptions updating while the section scrolls through view.
  return <motion.span style={{ opacity }}>{word}</motion.span>
}

export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Fragment key={i}>
            <Word word={word} progress={scrollYProgress} range={[start, end]} />
            {i < words.length - 1 ? ' ' : ''}
          </Fragment>
        )
      })}
    </p>
  )
}
