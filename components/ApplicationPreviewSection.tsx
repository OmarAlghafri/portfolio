'use client';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ApplicationPreviewSection() {
    const t = useTranslations('Projects');
    const [activeApp, setActiveApp] = useState<'cardio' | 'flutter'>('cardio');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <section id="app-preview" className="py-24 relative scroll-mt-20">
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
                        <span className="gradient-text-cyan">{t('application_preview_title') || 'Application Preview'}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                        {t('application_preview_desc') || 'Explore the live previews of my applications below.'}
                    </p>

                    <div className="flex justify-center space-x-4 rtl:space-x-reverse mb-8">
                        <button
                            onClick={() => setActiveApp('cardio')}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${activeApp === 'cardio' ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.5)]' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                        >
                            {t('cardio_ai') || 'CardioAI'}
                        </button>
                        <button
                            onClick={() => setActiveApp('flutter')}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${activeApp === 'flutter' ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.5)]' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                        >
                            {t('flutter_app') || 'Flutter App'}
                        </button>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="relative bg-[#0a0a0f] rounded-[2.5rem] overflow-hidden border-[8px] border-gray-800 shadow-2xl" style={{ width: '412px', height: '892px', maxWidth: '100%' }}>
                            <iframe
                                src="/apps/CardioAI/index.html"
                                title="Cardio AI Preview"
                                loading="lazy"
                                className={`absolute inset-0 w-full h-full border-none transition-opacity duration-500 bg-black ${activeApp === 'cardio' ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            />
                            {/* Only lazy load the second iframe when it's requested or just keep it in DOM but hidden */}
                            {activeApp === 'flutter' && (
                                <iframe
                                    src="/apps/flutter_app/index.html"
                                    title="Flutter App Preview"
                                    loading="lazy"
                                    className={`absolute inset-0 w-full h-full border-none transition-opacity duration-500 bg-black opacity-100 z-10`}
                                />
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
