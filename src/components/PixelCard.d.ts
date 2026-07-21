import * as React from 'react'

export interface PixelCardProps {
  variant?: 'default' | 'blue' | 'yellow' | 'pink'
  gap?: number
  speed?: number
  colors?: string
  noFocus?: boolean
  className?: string
  children?: React.ReactNode
}

declare const PixelCard: (props: PixelCardProps) => React.JSX.Element

export default PixelCard
