'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { WEB_PROJECTS } from '@/lib/projects';

export default function FlutterProjectsSection() {
  const t = useTranslations('Projects');
  const appProjects = WEB_PROJECTS.filter(p => p.type === 'app');

  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e]/15 to-[#0a0a0f]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 section-heading">
            <span className="gradient-text-cyan">{t('flutter')}</span>
          </h2>
          <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">Cross-platform apps</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {appProjects.map((proj, index) => {
            return (
              <motion.div
                key={proj.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="group flex flex-col"
              >
                {/* Phone mockup */}
                <Link href={`/projects/${proj.key}`} className="block">
                  <div
                    className="relative w-[200px] h-[420px] mx-auto mb-6 cursor-pointer"
                  >
                    <motion.div layoutId={`phone-glow-${proj.key}`} className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-b ${proj.gradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105`} />

                    {/* Phone frame */}
                    <motion.div
                      layoutId={`phone-frame-${proj.key}`}
                      className="relative w-full h-full bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-700 group-hover:border-gray-600 overflow-hidden transition-colors duration-300 shadow-2xl flex flex-col items-center"
                    >
                      {/* Screen content */}
                      <div className={`w-full h-full bg-gradient-to-b ${proj.gradient} bg-gray-950 flex flex-col items-center justify-center p-6 text-center pt-8`}>
                        {/* App icon */}
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-4xl mb-4 border border-white/10">
                          {proj.icon}
                        </div>

                        <div className="w-full space-y-2 mb-4">
                          <div className="h-2 bg-white/10 rounded-full w-3/4 mx-auto" />
                          <div className="h-2 bg-white/10 rounded-full w-1/2 mx-auto" />
                        </div>

                        <div className="space-y-2 w-full">
                          {[1, 2, 3].map((n) => (
                            <div key={n} className="h-8 bg-white/[0.05] rounded-lg border border-white/[0.06] flex items-center px-2 gap-2">
                              <div className="w-4 h-4 rounded bg-white/10" />
                              <div className="flex-1 h-1.5 bg-white/10 rounded-full" />
                            </div>
                          ))}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-900/80 border-t border-white/[0.06] flex items-center justify-around px-4">
                          {['⊞', '♡', '👤'].map((icon) => (
                            <span key={icon} className="text-white/30 text-sm">{icon}</span>
                          ))}
                        </div>
                      </div>
                      {/* Home indicator */}
                      <div className="absolute bottom-2 w-16 h-1 bg-gray-600 rounded-full" />
                    </motion.div>
                  </div>
                </Link>

                {/* Card info below phone */}
                <div className="glass card-shine rounded-2xl p-5 flex-1 border border-transparent group-hover:border-white/10 transition-all duration-300">
                  <h3 className={`text-lg font-bold mb-2 ${proj.accent}`}>
                    {t(`items.${proj.key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {t(`items.${proj.key}.summary`)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t(`items.${proj.key}.tech`).split(', ').map((tech: string) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-gray-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
