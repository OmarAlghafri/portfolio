'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ResearchSection() {
    const t = useTranslations('Research');
    const publications = [0, 1, 2];

    return (
        <section id="research" className="py-24 relative scroll-mt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#111119] to-[#0a0a0f]" />

            <div className="relative container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold mb-4 section-heading">
                        <span className="gradient-text-cyan">{t('title')}</span>
                    </h2>
                    <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">{t('academic_sub')}</p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {/* Grant Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-cyan-500/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <svg className="w-24 h-24 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
                            </svg>
                        </div>

                        <div className="relative">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-400/20">
                                {t('grant_title')}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                {t('grant_desc')}
                            </h3>
                            <p className="text-gray-400 leading-relaxed max-w-2xl text-lg italic">
                                "{t('grant_quote')}"
                            </p>
                        </div>
                    </motion.div>

                    {/* Publications */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm italic">P</span>
                            {t('publications_title')}
                        </h3>

                        <div className="grid gap-6">
                            {publications.map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-300 transition-colors">
                                                {t(`items.${i}.title`)}
                                            </h4>
                                            <p className="text-gray-500 text-sm flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                                {t(`items.${i}.venue`)}
                                            </p>
                                        </div>
                                        <div className="hidden md:block">
                                            <span className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-400 text-xs font-mono group-hover:bg-indigo-500 group-hover:text-white transition-all cursor-pointer">
                                                IEEE EXPLORE
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
