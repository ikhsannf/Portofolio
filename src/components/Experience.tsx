'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Landmark, Megaphone, Camera, Trophy, LucideIcon } from 'lucide-react'

interface TimelineItem {
    id: number
    year: string
    title: string
    organization: string
    description: string
    type: 'education' | 'organization' | 'achievement'
    icon: LucideIcon
    certificateUrl?: string
}

export default function Experience() {
    const timeline: TimelineItem[] = [
        {
            id: 1,
            year: "2023 - Sekarang",
            title: "Information Technology Student",
            organization: "Telkom University",
            description: "Menempuh pendidikan S1 di jurusan Teknologi Informasi dengan fokus pada pengembangan perangkat lunak dan desain UI/UX.",
            type: "education",
            icon: GraduationCap
        },
        {
            id: 2,
            year: "2024",
            title: "Staff Muda — Divisi Minat dan Bakat",
            organization: "Himpunan Mahasiswa Information Technology (HMIT)",
            description: "Aktif sebagai Staff Muda di Divisi Minat dan Bakat HMIT, membantu merancang dan mengelola program pengembangan bakat mahasiswa di lingkungan jurusan.",
            type: "organization",
            icon: Landmark
        },
        {
            id: 3,
            year: "2025",
            title: "Staff Ahli — Divisi Komunikasi dan Informasi",
            organization: "Himpunan Mahasiswa Information Technology (HMIT)",
            description: "Dipercaya sebagai Staff Ahli di Divisi Komunikasi dan Informasi HMIT, bertanggung jawab dalam pengelolaan komunikasi, publikasi, dan penyebaran informasi himpunan.",
            type: "organization",
            icon: Megaphone
        },
        {
            id: 4,
            year: "2025",
            title: "PDDT — Ospek Jurusan HMIT",
            organization: "Himpunan Mahasiswa Information Technology (HMIT)",
            description: "Berperan sebagai bagian dari Public Documentation & Design Team (PDDT) dalam kegiatan orientasi jurusan yang diselenggarakan oleh HMIT, bertanggung jawab atas dokumentasi dan desain visual acara.",
            type: "organization",
            icon: Camera
        },
        {
            id: 5,
            year: "2025",
            title: "NetDevelopment 2025",
            organization: "Adaptive Network Lab",
            description: "Berhasil menyelesaikan program NetDevelopment 2025 yang diselenggarakan oleh Adaptive Network Lab, memperdalam pemahaman tentang pengembangan jaringan dan teknologi terkait.",
            type: "achievement",
            icon: Trophy,
            certificateUrl: "/certificate/MUH. IKHSAN FAHMI.pdf"
        },
    ]

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'education':
                return 'from-blue-500 to-cyan-500'
            case 'organization':
                return 'from-purple-500 to-indigo-500'
            case 'achievement':
                return 'from-yellow-500 to-orange-500'
            default:
                return 'from-gray-500 to-gray-600'
        }
    }

    const getTypeBadge = (type: string) => {
        switch (type) {
            case 'education':
                return { label: 'Pendidikan', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' }
            case 'organization':
                return { label: 'Organisasi', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' }
            case 'achievement':
                return { label: 'Pencapaian', color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' }
            default:
                return { label: 'Lainnya', color: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400' }
        }
    }

    return (
        <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Pengalaman & Pendidikan
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Perjalanan saya melalui pendidikan, organisasi, dan pencapaian
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                                {/* Top: Icon + Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-200`}>
                                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium ${getTypeBadge(item.type).color}`}>
                                        {getTypeBadge(item.type).label}
                                    </span>
                                </div>

                                {/* Year */}
                                <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                                    {item.year}
                                </span>

                                {/* Title & Organization */}
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                                    {item.organization}
                                </p>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">
                                    {item.description}
                                </p>

                                {/* Certificate link */}
                                {item.certificateUrl && (
                                    <a
                                        href={item.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Lihat Sertifikat
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
