'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
    Puzzle, 
    Film, 
    ClipboardList, 
    Code2, 
    Shirt, 
    Target, 
    LayoutGrid, 
    Laptop,
    Wallet,
    LucideIcon 
} from 'lucide-react'

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
    icon: LucideIcon
    gradient: string
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'extension'>('all')
    const [showAll, setShowAll] = useState(false)

    const projects: Project[] = [
        {
            id: 1,
            title: "SisaDuit",
            description: "Aplikasi pelacak keuangan pribadi (personal finance tracker) berbasis AI yang membantu pencatatan & analisis transaksi secara otomatis menggunakan AI Consultant berbasis LLM.",
            category: "web",
            type: "Fullstack Web Application",
            liveUrl: "https://sisaduit.my.id",
            status: "live",
            icon: Wallet,
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            id: 6,
            title: "KIAR",
            description: "Website fashion yang menampilkan koleksi pakaian dengan desain modern dan elegan. Dilengkapi dengan katalog produk, tampilan yang menarik, dan pengalaman belanja yang menyenangkan.",
            category: "web",
            type: "Web Application",
            liveUrl: "https://dikiar.vercel.app/",
            status: "live",
            icon: Shirt,
            gradient: "from-pink-500 to-rose-500"
        },
        {
            id: 2,
            title: "Dyslexi-Read",
            description: "Proyek PKM (Program Kreativitas Mahasiswa) berupa ekstensi browser yang dirancang untuk membantu penyandang disleksia. Ekstensi ini menyesuaikan tampilan teks di website agar lebih mudah dibaca, dengan fitur font khusus, pengaturan spasi, dan kontras warna.",
            category: "extension",
            type: "Browser Extension",
            proposalUrl: "/proposals/Proposal-Dyslexi-Read.pdf",
            status: "development",
            icon: Puzzle,
            gradient: "from-indigo-500 to-purple-600"
        },
        {
            id: 7,
            title: "RentStuff",
            description: "Aplikasi penyewaan perlengkapan hobi yang memungkinkan pengguna untuk menyewa berbagai peralatan hobi dengan mudah. Proyek tugas kuliah yang masih dalam pengembangan aktif bersama tim.",
            category: "web",
            type: "Application",
            status: "ongoing",
            icon: Target,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 3,
            title: "movInfo",
            description: "Website informasi film yang menampilkan rating, ulasan, dan berita terkini seputar dunia perfilman. Pengguna dapat mencari film, melihat detail, dan mendapatkan update berita film terbaru.",
            category: "web",
            type: "Web Application",
            status: "development",
            icon: Film,
            gradient: "from-red-500 to-orange-500"
        },
        {
            id: 4,
            title: "TaskFlow",
            description: "Aplikasi web manajemen tugas (to-do list) yang memudahkan pengguna dalam mengorganisir, memprioritaskan, dan melacak pekerjaan sehari-hari dengan antarmuka yang bersih dan intuitif.",
            category: "web",
            type: "Web Application",
            status: "development",
            icon: ClipboardList,
            gradient: "from-green-500 to-teal-500"
        },
        {
            id: 5,
            title: "Snippex",
            description: "Platform kompilasi template kode yang memungkinkan developer menyimpan, mengorganisir, dan berbagi snippet kode. Membantu mempercepat workflow pengembangan dengan koleksi template siap pakai.",
            category: "web",
            type: "Web Application",
            status: "development",
            icon: Code2,
            gradient: "from-slate-600 to-slate-800"
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

    const filters = [
        { id: 'all', label: 'Semua Proyek', icon: LayoutGrid },
        { id: 'web', label: 'Web Apps', icon: Laptop },
        { id: 'extension', label: 'Ekstensi', icon: Puzzle },
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
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        Proyek Pilihan
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                            className={`flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-150 ${activeFilter === filter.id
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <filter.icon className="w-4 h-4" />
                            {filter.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                                    {/* Project Header */}
                                    <div className={`relative h-28 sm:h-44 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}>
                                        <div className="text-white opacity-80 group-hover:scale-110 transition-transform duration-200">
                                            <project.icon className="w-12 h-12 sm:w-14 sm:h-14" />
                                        </div>

                                        {/* Status badge top-right */}
                                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/30 text-white backdrop-blur-sm">
                                            {getStatusBadge(project.status).label}
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-4 sm:p-5 flex flex-col flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150">
                                                {project.title}
                                            </h3>
                                            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide">
                                                {project.category === 'extension' ? 'Ekstensi' : 'Web'}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                                            {project.description}
                                        </p>

                                        {/* Action Buttons & Type */}
                                        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium rounded-md">
                                                    {project.type}
                                                </span>
                                                
                                                <div className="flex items-center gap-1.5">
                                                    {project.liveUrl && (
                                                        <a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
                                                        >
                                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                            Demo
                                                        </a>
                                                    )}
                                                    {project.proposalUrl && (
                                                        <a
                                                            href={project.proposalUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-600 text-white text-xs font-bold rounded-lg shadow-sm hover:bg-purple-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
                                                        >
                                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                            Proposal
                                                        </a>
                                                    )}
                                                    {project.githubUrl && (
                                                        <a
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 px-3 py-1 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg hover:bg-gray-105 dark:hover:bg-gray-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
                                                        >
                                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                            </svg>
                                                            GitHub
                                                        </a>
                                                    )}
                                                    {!project.liveUrl && !project.proposalUrl && !project.githubUrl && (
                                                        <span className="px-2 py-1 bg-gray-50 dark:bg-gray-850 text-gray-400 dark:text-gray-500 text-xs font-medium rounded-lg">
                                                            Segera Hadir
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More / Show Less Toggle Button */}
                {filteredProjects.length > 3 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center mt-10 sm:mt-12"
                    >
                        <motion.button
                            onClick={() => {
                                setShowAll(!showAll);
                                if (showAll) {
                                    const section = document.querySelector('#projects');
                                    if (section) {
                                        section.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 shadow-md shadow-blue-500/5 hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Proyek Lainnya'}</span>
                            <svg 
                                className={`w-4 h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.button>
                    </motion.div>
                )}

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
