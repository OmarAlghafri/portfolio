'use client';

import { useTranslations, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { WEB_PROJECTS, Project } from '@/lib/projects';
import { Link, useRouter } from '@/i18n/routing';

// Helper to find project by key
function getProject(id: string) {
  return WEB_PROJECTS.find((p) => p.key === id);
}

export default function ProjectClient({ id }: { id: string }) {
  const router = useRouter();
  const t = useTranslations('Projects');
  const locale = useLocale();
  const project = getProject(id);
  const [showPreview, setShowPreview] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  if (!project) {
    notFound();
  }

  const { key, type, path, gradient, accent, mockColor } = project;

  const resolvedPath = key === 'website' ? `/apps/legal/${locale}.html` : path;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5 shadow-xl"
        >
          <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>{t('back')}</span>
        </button>
      </div>

      <div className="container mx-auto px-6 py-20 min-h-screen flex flex-col lg:flex-row gap-12 items-center justify-center">

        {/* Left Side: Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8 max-w-2xl"
        >
          <div>
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono mb-6 border border-white/10 ${type === 'app' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
              {type === 'app' ? 'Mobile Application' : 'Web Application'}
            </span>
            <h1 className={`text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r ${accent || 'from-white to-gray-400'} bg-clip-text text-transparent leading-tight`}>
              {t(`items.${key}.title`)}
            </h1>

            <div className="space-y-6">
              {t(`items.${key}.desc`).split('\n').map((line: string, i: number) => {
                if (!line.trim()) return null;

                // Handle highlights and bullet points
                const stylizedLine = line.split(/(\*\*.*?\*\*|•)/g).map((part, index) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={index} className="text-white font-semibold">{part.replace(/\*\*/g, '')}</strong>;
                  }
                  if (part === '•') {
                    return <span key={index} className="text-cyan-400 mr-2 text-xl leading-none select-none">•</span>;
                  }
                  return part;
                });

                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className={`text-lg md:text-xl text-gray-300 leading-relaxed flex items-start ${line.startsWith('•') ? 'pl-2' : ''}`}
                  >
                    <span>{stylizedLine}</span>
                  </motion.p>
                );
              })}

              {/* Show All Details Button */}
              {t(`items.${key}.full_desc`) && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => setShowFullDetails(true)}
                  className="mt-4 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group"
                >
                  <span className="border-b border-transparent group-hover:border-cyan-300">{t('show_all_details')}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">{t('tech_stack')}</h3>
            <div className="flex flex-wrap gap-2">
              {t(`items.${key}.tech`).split(', ').map((tech: string, index: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (index * 0.05) }}
                  className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 font-mono text-xs hover:border-white/20 hover:text-white transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <motion.button
              whileHover={key === 'hayat' ? { scale: 1 } : { scale: 1.02 }}
              whileTap={key === 'hayat' ? { scale: 1 } : { scale: 0.98 }}
              onClick={() => {
                if (key === 'hayat') return;
                setShowDisclaimer(true);
              }}
              disabled={key === 'hayat'}
              className={`group px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all ${key === 'hayat' ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : `bg-gradient-to-r ${accent || 'from-white to-gray-400'} text-black`} flex items-center gap-4`}
            >
              <span>{key === 'hayat' ? t('coming_soon') : (type === 'app' ? t('launch_app') : t('launch_web'))}</span>
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Preview/Frame */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex-1 w-full flex justify-center ${type === 'app' ? 'max-w-xs' : 'max-w-xl'}`}
        >
          <div
            className={`relative overflow-hidden shadow-2xl bg-[#0a0a0f] group w-full flex items-center justify-center ${key === 'hayat' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${type === 'app' ? 'aspect-[9/19] rounded-[2.5rem] border-[6px] border-gray-800 max-w-[300px]' : 'aspect-video rounded-2xl border border-white/10'
              }`}
            onClick={() => {
              if (key === 'hayat') return;
              setShowDisclaimer(true);
            }}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`} />

            {/* Icon or Content */}
            <div className="relative z-10 text-center">
              <div className="text-6xl mb-4">
                {type === 'app' ? '📱' : '💻'}
              </div>
              <span className="text-white/50 text-sm font-mono uppercase tracking-widest">
                {key === 'hayat' ? t('coming_soon') : 'Click to Launch'}
              </span>
            </div>

            {/* Hover Effect */}
            {key !== 'hayat' && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Preview Modal (Same Mechanism) */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-8 bg-black/95 backdrop-blur-xl"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className={`relative bg-[#0a0a0f] shadow-2xl flex flex-col overflow-hidden ${type === 'app'
                ? 'rounded-[2.5rem] border-[8px] border-gray-800 w-full'
                : 'rounded-[2rem] border border-gray-700 w-full h-full max-w-[95vw] max-h-[95vh]'
                }`}
              style={type === 'app' ? { maxWidth: '412px', height: '892px', maxHeight: '90vh' } : undefined}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="h-12 bg-[#1a1a2e] flex items-center px-4 gap-3 border-b border-gray-800 shrink-0">
                <button
                  onClick={() => setShowPreview(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex-1 text-center text-sm font-mono text-gray-400 truncate">
                  {t(`items.${key}.title`)} - Preview
                </div>
                <a
                  href={project.url || resolvedPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Open in new tab"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Iframe */}
              <div className="flex-1 w-full bg-white relative overflow-auto custom-scrollbar">
                {resolvedPath ? (
                  <iframe
                    src={resolvedPath}
                    className="w-full h-full border-0"
                    title={key}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-black">
                    Preview not available
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preview Disclaimer Modal */}
      <AnimatePresence>
        {showDisclaimer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
            onClick={() => setShowDisclaimer(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-[#0d0d12] rounded-[2rem] border border-white/10 shadow-2xl w-full max-w-xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mx-auto">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {t('preview_disclaimer_title')}
                  </h3>
                  <div className="text-gray-400 leading-relaxed text-sm md:text-base text-right rtl:text-right ltr:text-left space-y-2">
                    {t('preview_disclaimer_desc').split('\n').map((line: string, i: number) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setShowDisclaimer(false);
                      setShowPreview(true);
                    }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold hover:shadow-lg hover:shadow-orange-500/20 transition-all"
                  >
                    {t('preview_disclaimer_btn')}
                  </button>
                  <button
                    onClick={() => setShowDisclaimer(false)}
                    className="w-full py-3 text-gray-400 hover:text-white transition-colors"
                  >
                    {t('cancel') || 'Cancel'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Details Modal */}
      <AnimatePresence>
        {showFullDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
            onClick={() => setShowFullDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-[#0d0d12] rounded-[2rem] border border-white/10 shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {t(`items.${key}.title`)} - {t('show_all_details')}
                </h3>
                <button
                  onClick={() => setShowFullDetails(false)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="space-y-6 text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {t(`items.${key}.full_desc`).split('\n').map((line: string, i: number) => {
                    if (!line.trim()) return <div key={i} className="h-4" />;

                    // Simple styling for the full desc
                    const isHeader = line.includes(':') && line.length < 50 && !line.startsWith(' ');
                    const isBullet = line.trim().startsWith('-') || /^\d+\./.test(line.trim());

                    return (
                      <p
                        key={i}
                        className={`${isHeader ? 'text-white font-bold text-lg mt-8 mb-4' : ''} ${isBullet ? 'pl-4 relative before:content-[""] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-cyan-500/50 before:rounded-full' : ''}`}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/5 bg-white/[0.02] flex justify-end">
                <button
                  onClick={() => setShowFullDetails(false)}
                  className="px-6 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
                >
                  {t('close')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main >
  );
}
