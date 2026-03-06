'use client';
import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';

export default function WebsitePreviewSection() {
    const t = useTranslations('Projects');
    const locale = useLocale();
    const [iframeSrc, setIframeSrc] = useState('');

    useEffect(() => {
        // Website Section Routing Logic
        // In the cardio website folder: Arabic -> login.html, English -> login_en.html
        const websiteLangCode = locale === 'ar' ? 'ar' : 'en';
        localStorage.setItem('cardio_website_lang', websiteLangCode);

        if (websiteLangCode === 'ar') {
            setIframeSrc('/websites/cardio/login.html');
        } else {
            setIframeSrc('/websites/cardio/login_en.html');
        }
    }, [locale]);

    return (
        <section id="website-preview" className="py-24 relative scroll-mt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a14] via-[#2a1a3e]/15 to-[#0f0a14]" />
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
                        <span className="gradient-text-purple">{t('website_preview_title') || 'Website Preview'}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base mb-10">
                        {t('website_preview_desc') || 'A comprehensive preview of the Cardio Website in your preferred language.'}
                    </p>

                    <div className="relative w-full max-w-5xl mx-auto bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl h-[800px]">
                        {iframeSrc && (
                            <iframe
                                src={iframeSrc}
                                title="Cardio Website Preview"
                                loading="lazy"
                                className="absolute inset-0 w-full h-full border-none"
                            />
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
