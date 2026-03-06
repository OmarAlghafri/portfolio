'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

export default function PreviewProjectsSection() {
    const t = useTranslations('Projects');

    return (
        <section id="projects" className="py-24 relative scroll-mt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e]/15 to-[#0a0a0f]" />
            <div className="absolute inset-0 grid-pattern opacity-10" />

            <div className="relative container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold mb-4 section-heading">
                        <span className="gradient-text-cyan">{t('title')}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                        {t('preview_desc')}
                    </p>

                    <div className="flex justify-center mt-12">
                        <Link
                            href="/projects"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]"
                        >
                            <span className="mr-2">{t('view_all')}</span>
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
