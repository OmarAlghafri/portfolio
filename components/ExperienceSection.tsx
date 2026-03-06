'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const JOB_COLORS = [
  { dot: 'bg-cyan-400', badge: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20' },
  { dot: 'bg-indigo-400', badge: 'bg-indigo-400/10 text-indigo-300 border-indigo-400/20' },
  { dot: 'bg-purple-400', badge: 'bg-purple-400/10 text-purple-300 border-purple-400/20' },
];

export default function ExperienceSection() {
  const t = useTranslations('Experience');
  const jobs = ['exp1', 'exp2', 'exp3'];

  return (
    <section id="experience" className="py-24 relative scroll-mt-20">
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
          <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">{t('journey')}</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute ltr:left-0 rtl:right-0 md:ltr:left-1/2 md:rtl:right-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-900/60 to-transparent ltr:translate-x-4 rtl:-translate-x-4 md:ltr:-translate-x-0.5 md:rtl:translate-x-0.5" />

          <div className="space-y-10">
            {jobs.map((job, i) => {
              const color = JOB_COLORS[i % JOB_COLORS.length];
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={job}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start gap-8 md:gap-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute ltr:left-0 rtl:right-0 md:ltr:left-1/2 md:rtl:right-1/2 top-6 z-10 ltr:-translate-x-[3px] rtl:translate-x-[3px] md:ltr:-translate-x-1/2 md:rtl:translate-x-1/2">
                    <span className={`block w-5 h-5 rounded-full ${color.dot} border-4 border-[#0a0a0f] ${i === 0 ? 'timeline-dot-active' : ''}`} />
                  </div>

                  {/* Content card — uses half-width on desktop */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ltr:pl-10 rtl:pr-10 md:ltr:pl-0 md:rtl:pr-0 ${isEven ? 'md:ltr:pr-8 md:rtl:pl-8 md:ltr:ml-0 md:rtl:mr-0' : 'md:ltr:pl-8 md:rtl:pr-8 md:ltr:ml-auto md:rtl:mr-auto'}`}>
                    <div className="glass card-shine rounded-2xl p-6 hover:bg-white/[0.0] border border-transparent hover:border-white/10 transition-all duration-300 group">
                      {/* Period badge */}
                      <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border ${color.badge} mb-3`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {t(`items.${job}.period`)}
                      </span>

                      {/* Role */}
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {t(`items.${job}.role`)}
                      </h3>

                      {/* Company */}
                      <h4 className="flex items-center gap-1.5 text-sm text-gray-400 mb-3">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {t(`items.${job}.company`)}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {t(`items.${job}.desc`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
