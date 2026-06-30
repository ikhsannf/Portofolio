'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [activeSection, setActiveSection] = useState('#home')
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect active section based on scroll position
  useEffect(() => {
    const sections = ['#home', '#about', '#projects', '#experience', '#skills', '#contact']

    const handleScroll = () => {
      let currentSection = '#home'
      const scrollPosition = window.scrollY
      const triggerLine = scrollPosition + window.innerHeight / 3 // ~33% of viewport height from top

      for (const section of sections) {
        const element = document.querySelector(section)
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop - 100 // Subtracting header height/buffer
          if (triggerLine >= offsetTop) {
            currentSection = section
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    // Run once on mount to set initial state
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items dengan ikon SVG
  const navItems = [
    {
      name: 'Beranda',
      href: '#home',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'Tentang',
      href: '#about',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'Proyek',
      href: '#projects',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      name: 'Pengalaman',
      href: '#experience',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Keahlian',
      href: '#skills',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'Kontak',
      href: '#contact',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ]

  const handleNavClick = (section: string, e: React.MouseEvent) => {
    e.preventDefault()
    setActiveSection(section)
    const element = document.querySelector(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
      >
        <div className="container mx-auto max-w-6xl py-2 sm:py-3">
          <nav className="flex justify-between items-center">
            {/* Brand Logo - Left */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick('#home', e)}
              className="flex items-center space-x-2 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3
              }}
            >
              {/* Brand Text */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-150 font-[family-name:var(--font-poppins)]">
                  Sann
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1 tracking-wider">
                  PORTFOLIO
                </p>
              </div>
            </motion.a>

            {/* Right Side: Nav Items + Theme Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Nav Items */}
              <motion.div
                className="hidden md:flex items-center space-x-0.5 sm:space-x-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg sm:rounded-xl p-0.5 sm:p-1"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.4
                }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`relative flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg font-medium text-[10px] sm:text-xs transition-all duration-150 ${activeSection === item.href
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-gray-700/50'
                      }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.5 + (index * 0.1)
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Ikon */}
                    <motion.span
                      className={`transition-colors duration-150 ${activeSection === item.href ? 'text-white' : 'text-current'
                        }`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.span>

                    {/* Text - Hidden on mobile and tablet */}
                    <span className="hidden lg:block">{item.name}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.1
                }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation */}
      <motion.div
        className="md:hidden fixed bottom-4 left-4 right-4 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center justify-between bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] p-2 border border-gray-200 dark:border-gray-700 gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl transition-all duration-300 ${activeSection === item.href
                ? 'bg-blue-600 text-white shadow-md font-semibold text-xs scale-105 flex-grow'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 flex-shrink-0'
                }`}
            >
              <span className={activeSection === item.href ? 'text-white flex-shrink-0' : 'text-current flex-shrink-0'}>
                {item.icon}
              </span>
              {activeSection === item.href && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  transition={{ duration: 0.2 }}
                  className="text-[10px] sm:text-xs tracking-tight whitespace-nowrap overflow-hidden"
                >
                  {item.name}
                </motion.span>
              )}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  )
}