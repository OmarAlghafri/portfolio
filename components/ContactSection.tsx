'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/omar-alghafri-2583412b7',
    color: 'hover:text-blue-400 hover:border-blue-400/40',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/96891280628',
    color: 'hover:text-[#25D366] hover:border-[#25D366]/40',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001 20.063c-1.502 0-2.97-.391-4.252-1.13l-3.045.798.812-2.967c-.812-1.341-1.242-2.883-1.242-4.469 0-4.661 3.791-8.452 8.452-8.452 2.259 0 4.383.879 5.978 2.475s2.475 3.72 2.475 5.978c-.001 4.663-3.792 8.453-8.453 8.453H12l.001.015zM21 12.004c0-4.962-4.038-9-9-9s-9 4.038-9 9c0 1.564.407 3.085 1.179 4.423l-1.254 4.586 4.693-1.231c1.291.703 2.748 1.074 4.232 1.076 4.962 0 9-4.038 9-9z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:omarmattar080@gmail.com',
    color: 'hover:text-cyan-400 hover:border-cyan-400/40',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#16213e]/10 to-[#0a0a0f]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/40 to-transparent" />

      <div className="relative container mx-auto px-6 max-w-5xl">
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
          <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">{t('build_together')}</p>
        </motion.div>

        <div className="flex flex-col items-center">
          {/* info + socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl flex flex-col gap-8 text-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">{t('touch_title')}</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {t('touch_desc')}
              </p>

              <div className="flex flex-col items-center gap-5">
                <a href="mailto:omarmattar080@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
                  <span className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-lg">omarmattar080@gmail.com</span>
                </a>
                <a href="https://wa.me/96891280628" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[#25D366] transition-colors group">
                  <span className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all shadow-[0_0_15px_rgba(37,211,102,0.1)] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001 20.063c-1.502 0-2.97-.391-4.252-1.13l-3.045.798.812-2.967c-.812-1.341-1.242-2.883-1.242-4.469 0-4.661 3.791-8.452 8.452-8.452 2.259 0 4.383.879 5.978 2.475s2.475 3.72 2.475 5.978c-.001 4.663-3.792 8.453-8.453 8.453H12l.001.015zM21 12.004c0-4.962-4.038-9-9-9s-9 4.038-9 9c0 1.564.407 3.085 1.179 4.423l-1.254 4.586 4.693-1.231c1.291.703 2.748 1.074 4.232 1.076 4.962 0 9-4.038 9-9z" />
                    </svg>
                  </span>
                  <span className="text-lg">+968 91280628</span>
                </a>
                <div className="flex items-center gap-4 text-gray-300">
                  <span className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-lg">{t('location')}</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-8 border-t border-white/5">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">{t('find_me')}</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl border border-white/[0.07] text-gray-400 transition-all duration-300 ${s.color} hover:bg-white/[0.04]`}
                  >
                    {s.icon}
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
