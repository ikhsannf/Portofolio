'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {


  const infoCards = [
    {
      title: "Nama",
      content: "Muh. Ikhsan Fahmi",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Domisili",
      content: "Bandung, Indonesia",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Email",
      content: "ikhsan.f3105@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Telepon",
      content: "+62 822-4658-5832",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Pendidikan",
      content: "Telkom University",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
        </svg>
      )
    },
    {
      title: "Status",
      content: "Mahasiswa",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  const interests = [
    "Frontend Development",
    "UI/UX Design",
    "Graphic Design"
  ]

  return (
    <>
      {/* About Section */}
      <section id="about" className="min-h-screen bg-white dark:bg-gray-800 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Tentang Saya
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Bersemangat dalam menciptakan solusi inovatif melalui teknologi
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center lg:items-start">
            {/* Left Column - Photo Card */}
            <div className="lg:w-1/2 flex justify-center lg:justify-start w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative group"
              >
                {/* Main Photo Card */}
                <motion.div
                  className="w-48 h-60 sm:w-64 sm:h-80 md:w-72 md:h-[22rem] lg:w-80 lg:h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden relative"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src="/assets/myphoto.jpg"
                    alt="Muh. Ikhsan Fahmi"
                    fill
                    className="object-cover transition-transform duration-200"
                    priority
                  />

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -left-2 w-10 h-10 sm:w-20 sm:h-20 bg-yellow-400 rounded-full opacity-80"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute -bottom-3 -right-3 w-14 h-14 sm:w-24 sm:h-24 bg-pink-400 rounded-full opacity-70"
                    animate={{
                      y: [0, 15, 0],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  ></motion.div>

                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-200"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Single Card containing all content */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 lg:p-6"
              >
                {/* Hello There Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-4 sm:mb-5"
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Halo Semua!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Saya adalah mahasiswa Teknologi Informasi di Telkom University yang memiliki passion dalam Graphic Design, dan UI/UX Design. Saya senang mempelajari hal-hal baru seperti saat ini, saya tertarik memahami Frontend Development dan selalu berusaha untuk mengembangkan kemampuan saya dalam bidang desain, khususnya dalam Graphic Design dan UI/UX design.
                  </p>
                </motion.div>

                {/* Info Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5"
                >
                  {infoCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2.5 sm:p-3 shadow-sm hover:shadow-md transition-all duration-150 cursor-pointer group border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-800 dark:bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors duration-100">
                          <div className="text-white flex items-center justify-center">
                            {card.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-0.5">
                            {card.title}
                          </h3>
                          <p className="text-gray-900 dark:text-white text-sm sm:text-base font-semibold leading-tight break-words">
                            {card.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Interests & Focus */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-3 sm:mb-4"
                >
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Minat & Fokus
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {interests.map((interest, index) => (
                      <motion.span
                        key={interest}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * index + 0.6 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-100"
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 dark:border-gray-600 my-3 sm:my-4"></div>

                  {/* View CV Button */}
                  <motion.a
                    href="/cv/CV ATS_MUH. IKHSAN FAHMI.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden group w-full"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Lihat CV Saya
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      initial={false}
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}