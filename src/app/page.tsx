'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'

import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function Home() {
  const skills: { name: string; icon: ReactNode }[] = [
    // Tools
    {
      name: "Figma",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      )
    },
    {
      name: "Canva",
      icon: <img src="/assets/canva-icon.svg" alt="Canva" className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      name: "CapCut",
      icon: <img src="/assets/capcut.svg" alt="CapCut" className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
    },
    {
      name: "Antigravity IDE",
      icon: <img src="/assets/antigravity-color.svg" alt="Antigravity IDE" className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    // Tech Stack
    {
      name: "React / Next.js",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#61DAFB">
          <circle cx="12" cy="12" r="2.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
        </svg>
      )
    },
    {
      name: "TypeScript",
      icon: <img src="/assets/typescript-icon-svgrepo-com.svg" alt="TypeScript" className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 54 33" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#06B6D4"/>
        </svg>
      )
    },
    {
      name: "HTML",
      icon: <img src="/assets/html-5-svgrepo-com.svg" alt="HTML" className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      name: "CSS",
      icon: <img src="/assets/css-3-svgrepo-com.svg" alt="CSS" className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      name: "JavaScript",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M6.5 18.2l1.8-1.1c.35.63.67 1.16 1.43 1.16.73 0 1.19-.29 1.19-1.4v-7.6h2.2v7.7c0 2.3-1.35 3.35-3.33 3.35-1.78 0-2.82-.93-3.35-2.04zm8-.3l1.8-1.05c.46.75 1.05 1.3 2.1 1.3.88 0 1.44-.44 1.44-1.05 0-.73-.58-.99-1.55-1.41l-.53-.23c-1.54-.65-2.56-1.47-2.56-3.21 0-1.6 1.22-2.81 3.12-2.81 1.35 0 2.33.47 3.03 1.71L20.4 12.3c-.4-.7-.82-.97-1.49-.97-.68 0-1.1.43-1.1.97 0 .68.43.96 1.43 1.38l.53.23c1.81.78 2.83 1.57 2.83 3.35 0 1.92-1.51 2.97-3.54 2.97-1.99 0-3.27-.95-3.9-2.18z" fill="#333"/>
        </svg>
      )
    },
    {
      name: "Git",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#F05032">
          <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 11-1.103 1.06l-2.48-2.48v6.53a1.838 1.838 0 11-1.513-.07V8.73a1.838 1.838 0 01-.998-2.412L7.629 3.586.453 10.762a1.55 1.55 0 000 2.188l10.48 10.477a1.55 1.55 0 002.186 0l10.427-10.31a1.55 1.55 0 000-2.187z"/>
        </svg>
      )
    },
    {
      name: "REST APIs",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
        </svg>
      )
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden w-full relative">
      <Header />
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Experience Timeline */}
      <Experience />

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24 scroll-mt-20">
        <AnimatedSection>
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Keahlian & Kemampuan
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="group"
                >
                  <div className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-150 cursor-default">
                    <span className="flex-shrink-0">{skill.icon}</span>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>


      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8 pb-24 md:pb-8">
        <AnimatedSection>
          <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-3"
            >
              <div className="inline-flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base text-green-400 font-bold tracking-wide">Muh. Ikhsan Fahmi</span>
              </div>
            </motion.div>
            
            <motion.p
              className="text-gray-400 text-xs sm:text-sm font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Made with Antigravity IDE
            </motion.p>
          </div>
        </AnimatedSection>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}