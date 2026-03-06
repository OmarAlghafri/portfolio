'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from '@/i18n/routing';

// Social links
const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/omar-alghafri-2583412b7',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/omar_alghafry/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:omarmattar080@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayed;
}

export default function HeroSection() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isAr = locale === 'ar';

  const roles = isAr
    ? ['مهندس شبكات وأمن', 'خبير سحابي معتمد', 'مطور تطبيقات فلاتر', 'باحث في الذكاء الاصطناعي']
    : ['Network & Security Engineer', 'Azure Cloud Certified', 'Flutter Developer', 'AI Researcher'];

  const typedText = useTypingEffect(roles);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl float-shape" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl float-shape-2" />
      </div>

      <div className="relative container mx-auto px-6 pt-24 pb-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center md:text-start"
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {t('welcome')}
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight gradient-text">
            {t('name')}
          </h1>

          {/* Typing effect role */}
          <div className="text-2xl md:text-3xl font-mono mb-6 h-10 flex items-center justify-center md:justify-start gap-2">
            <span className="gradient-text-cyan">{typedText}</span>
            <span className="cursor-blink text-cyan-400 text-3xl leading-none">|</span>
          </div>

          {/* Summary */}
          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {t('summary')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
            <Link
              href="/projects"
              className="group relative px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 rounded-full font-semibold text-black transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105"
            >
              {t('cta_projects')}
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              {t('cta_contact')}
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 justify-center md:justify-start">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 border border-white/10 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-transparent blur-2xl scale-110" />
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-cyan-400/20 animate-spin" style={{ animationDuration: '20s' }} />
            {/* Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 glow-cyan">
              <Image
                src="/images/profile.jpeg"
                alt={t('name')}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-2 -right-2 md:bottom-4 md:-right-8 glass px-4 py-2 rounded-xl text-xs font-mono text-cyan-300 border border-cyan-400/20 shadow-xl"
            >
              <span className="text-green-400">▶</span> {t('status')}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 scroll-bounce">
        <span className="text-xs font-mono tracking-widest uppercase">{t('scroll')}</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
