'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
    id: number
    title: string
    description: string
    category: 'web' | 'extension'
    type: string
    liveUrl?: string
    githubUrl?: string
    proposalUrl?: string
    status: 'live' | 'ongoing' | 'development'
    icon: string
    gradient: string
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'extension'>('all')

    const projects: Project[] = [
        {
            id: 1,
            title: "Dyslexi-Read",
            description: "Proyek PKM (Program Kreativitas Mahasiswa) berupa ekstensi browser yang dirancang untuk membantu penyandang disleksia. Ekstensi ini menyesuaikan tampilan teks di website agar lebih mudah dibaca, dengan fitur font khusus, pengaturan spasi, dan kontras warna.",
            category: "extension",
            type: "Browser Extension",
            proposalUrl: "/proposals/Proposal-Dyslexi-Read.pdf",
            status: "development",
            icon: "🧩",
            gradient: "from-indigo-500 to-purple-600"
        },
        {
            id: 2,
            title: "movInfo",
            description: "Website informasi film yang menampilkan rating, ulasan, dan berita terkini seputar dunia perfilman. Pengguna dapat mencari film, melihat detail, dan mendapatkan update berita film terbaru.",
            category: "web",
            type: "Web Application",
            status: "development",
            icon: "🎬",
            gradient: "from-red-500 to-orange-500"
        },
        {
            id: 3,
            title: "TaskFlow",
            description: "Aplikasi web manajemen tugas (to-do list) yang memudahkan pengguna dalam mengorganisir, memprioritaskan, dan melacak pekerjaan sehari-hari dengan antarmuka yang bersih dan intuitif.",
            category: "web",
            type: "Web Application",
            status: "development",
            icon: "✅",
            gradient: "from-green-500 to-teal-500"
        },
        {
            id: 4,
            title: "Snippex",
            description: "Platform kompilasi template kode yang memungkinkan developer menyimpan, mengorganisir, dan berbagi snippet kode. Membantu mempercepat workflow pengembangan dengan koleksi template siap pakai.",
            category: "web",
            type: "Web Application",
            status: "development",
            icon: "💾",
            gradient: "from-slate-600 to-slate-800"
        },
        {
            id: 5,
            title: "KIAR",
            description: "Website fashion yang menampilkan koleksi pakaian dengan desain modern dan elegan. Dilengkapi dengan katalog produk, tampilan yang menarik, dan pengalaman belanja yang menyenangkan.",
            category: "web",
            type: "Web Application",
            liveUrl: "https://dikiar.vercel.app/",
            status: "live",
            icon: "👗",
            gradient: "from-pink-500 to-rose-500"
        },
        {
            id: 6,
            title: "RentStuff",
            description: "Aplikasi penyewaan perlengkapan hobi yang memungkinkan pengguna untuk menyewa berbagai peralatan hobi dengan mudah. Proyek tugas kuliah yang masih dalam pengembangan aktif bersama tim.",
            category: "web",
            type: "Application",
            status: "ongoing",
            icon: "🎯",
            gradient: "from-blue-500 to-cyan-500"
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    const filters = [
        { id: 'all', label: 'Semua Proyek', icon: '🗂️' },
        { id: 'web', label: 'Web Apps', icon: '💻' },
        { id: 'extension', label: 'Ekstensi', icon: '🧩' },
    ]

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'live':
                return { label: '● Live', color: 'bg-green-500 text-white' }
            case 'ongoing':
                return { label: '● Ongoing', color: 'bg-yellow-500 text-white' }
            default:
                return { label: '● In Dev', color: 'bg-blue-500 text-white' }
        }
    }

    return (
        <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-800 scroll-mt-20">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Proyek Pilihan
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Kumpulan proyek nyata yang telah saya kerjakan — dari ekstensi browser hingga web app
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 px-2"
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id as 'all' | 'web' | 'extension')}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-150 ${activeFilter === filter.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="mr-1.5">{filter.icon}</span>
                            {filter.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                                {/* Project Header */}
                                <div className={`relative h-36 sm:h-44 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
                                    <span className="text-5xl sm:text-6xl opacity-80 group-hover:scale-110 transition-transform duration-200">
                                        {project.icon}
                                    </span>

                                    {/* Status badge top-right */}
                                    <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${getStatusBadge(project.status).color}`}>
                                        {getStatusBadge(project.status).label}
                                    </div>

                                    {/* Hover overlay with links */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 flex-wrap px-4">
                                        {project.liveUrl && (
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-150 flex items-center gap-1.5"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Demo Langsung
                                            </motion.a>
                                        )}
                                        {project.proposalUrl && (
                                            <motion.a
                                                href={project.proposalUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors duration-150 flex items-center gap-1.5"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                Lihat Proposal
                                            </motion.a>
                                        )}
                                        {project.githubUrl && (
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-700 transition-colors duration-150"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                GitHub
                                            </motion.a>
                                        )}
                                        {!project.liveUrl && !project.proposalUrl && !project.githubUrl && (
                                            <span className="px-4 py-2 bg-white/20 text-white rounded-lg text-xs sm:text-sm font-medium">
                                                Segera Hadir
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-4 sm:p-5 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
                                            {project.title}
                                        </h3>
                                        <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">
                                            {project.category === 'extension' ? 'Ekstensi' : 'Web'}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* Type label */}
                                    <div>
                                        <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[10px] sm:text-xs font-medium rounded-md">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16 sm:py-20"
                    >
                        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
                            Tidak ada proyek di kategori ini
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
