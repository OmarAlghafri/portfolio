'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { WEB_PROJECTS } from '@/lib/projects';

function BrowserMockup({ url, gradient, mockColor, accent, title, desc, tech, layoutId, projectKey }: {
  url: string;
  gradient: string;
  mockColor: string;
  accent: string;
  title: string;
  desc: string;
  tech: string;
  layoutId: string;
  projectKey: string;
}) {
  return (
    <Link href={`/projects/${projectKey}`}>
      <motion.div
        layoutId={layoutId}
        className={`relative rounded-xl overflow-hidden border border-gray-700/60 shadow-2xl bg-[#0a0a0f] group hover:border-white/20 transition-colors duration-300 cursor-pointer`}
      >
        {/* Browser chrome */}
        <div className="h-10 bg-[#1a1a2e] flex items-center px-4 gap-2 border-b border-gray-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-3 flex-1 bg-[#0a0a0f] h-6 rounded-md flex items-center px-3 gap-2">
            <svg className="w-3 h-3 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs text-gray-500 font-mono truncate">{url}</span>
          </div>
        </div>

        {/* Screen / mockup */}
        <div className={`aspect-video w-full bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          {/* Mock webpage layout */}
          <div className="absolute inset-0 p-4 flex flex-col gap-3">
            {/* Mock nav */}
            <div className="h-8 bg-white/[0.04] rounded-lg border border-white/[0.05] flex items-center px-3 gap-3">
              <div className="w-16 h-2 bg-white/20 rounded-full" />
              <div className="flex-1" />
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="w-10 h-1.5 bg-white/10 rounded-full" />
              ))}
            </div>
            {/* Mock hero */}
            <div className="flex gap-3 flex-1">
              <div className="flex-1 flex flex-col justify-center gap-2 p-4">
                <div className={`h-4 bg-gradient-to-r ${accent} rounded-full w-3/4 opacity-70`} />
                <div className="h-2.5 bg-white/10 rounded-full w-full" />
                <div className="h-2.5 bg-white/10 rounded-full w-5/6" />
                <div className="flex gap-2 mt-2">
                  <div className={`h-6 w-20 bg-gradient-to-r ${accent} rounded-full opacity-80`} />
                  <div className="h-6 w-20 bg-white/10 rounded-full border border-white/10" />
                </div>
              </div>
              <div className={`w-1/3 ${mockColor} rounded-xl border border-white/[0.05] flex items-center justify-center`}>
                <div className="text-white/20 text-4xl">✦</div>
              </div>
            </div>
            {/* Mock cards row */}
            <div className="grid grid-cols-3 gap-2 pb-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-16 bg-white/[0.03] rounded-lg border border-white/[0.04] p-2 flex flex-col gap-1.5">
                  <div className="w-6 h-6 rounded-md bg-white/10" />
                  <div className="h-1.5 bg-white/10 rounded-full w-full" />
                  <div className="h-1.5 bg-white/10 rounded-full w-2/3" />
                </div>
              ))}
            </div>
          </div>

          {/* Hover overlay with info */}
          <div className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-center items-center p-8 text-center">
            <div className="mb-4">
              <span className="px-4 py-1.5 bg-cyan-500 rounded-full text-black text-xs font-bold uppercase tracking-wider">
                View Details
              </span>
            </div>
            <h3 className={`text-2xl font-extrabold mb-3 bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>{title}</h3>
            <p className="text-gray-300 mb-5 max-w-sm text-sm leading-relaxed">{desc}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {tech.split(', ').map((t: string) => (
                <span key={t} className="text-xs font-mono px-3 py-1 rounded-full border border-white/20 text-gray-300 bg-white/5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function WebsiteProjectsSection() {
  const t = useTranslations('Projects');
  const webProjects = WEB_PROJECTS.filter(p => p.type === 'web');

  return (
    <section className="py-24 relative scroll-mt-20">
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 section-heading">
            <span className="gradient-text-cyan">{t('web')}</span>
          </h2>
          <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">Web platforms & sites</p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          {webProjects.map((proj, i) => (
            <motion.div
              key={proj.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <BrowserMockup
                layoutId={`browser-${proj.key}`}
                projectKey={proj.key}
                url={proj.url || ''}
                gradient={proj.gradient || ''}
                mockColor={proj.mockColor || ''}
                accent={proj.accent || ''}
                title={t(`items.${proj.key}.title`)}
                desc={t(`items.${proj.key}.summary`)}
                tech={t(`items.${proj.key}.tech`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
