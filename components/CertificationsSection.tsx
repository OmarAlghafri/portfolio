'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const CERT_COLORS = [
    'from-cyan-400 to-blue-500',
    'from-blue-400 to-indigo-500',
    'from-indigo-400 to-purple-500',
];

export default function CertificationsSection() {
    const t = useTranslations('Certifications');

    // We can't easily loop over many items in next-intl JSON without an array, 
    // but we can look for items until we hit an empty string if needed or just hardcode indices.
    // Given the structure I created, let's just use the indices.
    const certs = [0, 1, 2, 3, 4, 5];

    return (
        <section id="certifications" className="py-24 relative scroll-mt-20 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0f]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2" />

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
                    <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-6 rounded-2xl group hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${CERT_COLORS[i % 3]} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity`} />

                            <div className="flex flex-col h-full">
                                <div className="mb-4">
                                    <span className="text-2xl">🏅</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                                    {t(`items.${i}.name`)}
                                </h3>
                                <div className="mt-auto">
                                    <p className="text-cyan-400/80 text-sm font-medium">{t(`items.${i}.issuer`)}</p>
                                    <p className="text-gray-500 text-xs mt-1 font-mono uppercase tracking-wider">{t(`items.${i}.date`)}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
