'use client'

import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollPosition = () => {
      const scrollY = window.scrollY
      setScrollPosition(scrollY)
      
      if (scrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up')
      }
      
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollPosition)
    updateScrollPosition()
    
    return () => window.removeEventListener('scroll', updateScrollPosition)
  }, [])

  return { scrollPosition, scrollDirection }
}

