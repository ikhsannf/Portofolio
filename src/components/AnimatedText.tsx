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

type CharProps = {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.15, 1])
  // Single span per character — opacity driven by scroll progress.
  return <motion.span style={{ opacity }}>{char}</motion.span>
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

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        // Render spaces as real text nodes (not spans) so the line can wrap
        // normally — otherwise the whole paragraph stays on one line and
        // overflows to the right instead of centering.
        if (char === ' ') return <Fragment key={i}> </Fragment>
        const start = i / chars.length
        const end = start + 1 / chars.length
        return (
          <Char
            key={i}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        )
      })}
    </p>
  )
}
