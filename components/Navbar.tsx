'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (pathname.startsWith('/projects')) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // More accurate active section detection
      const sections = ['hero', 'about', 'experience', 'certifications', 'research', 'projects', 'contact'];
      const viewportHeight = window.innerHeight;

      let currentSection = activeSection;
      let minDistance = Infinity;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Distance from the center of the element to the center of the viewport
          const elementCenter = rect.top + rect.height / 2;
          const viewportCenter = viewportHeight / 2.5; // Upward biased for better UX
          const distance = Math.abs(elementCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            currentSection = id;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, activeSection]);

  if (pathname.startsWith('/projects')) {
    return null;
  }

  const navLinks = [
    { name: t('hero'), href: '#hero', id: 'hero' },
    { name: t('about'), href: '#about', id: 'about' },
    { name: t('experience'), href: '#experience', id: 'experience' },
    { name: t('research'), href: '#research', id: 'research' },
    { name: t('projects'), href: '/projects', id: 'projects' },
    { name: t('contact'), href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3 shadow-xl shadow-black/20' : 'py-6 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative group invisible sm:visible">
            <span className="text-xl font-bold font-mono text-cyan-400 group-hover:text-white transition-colors duration-300">
              Omar.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href.startsWith('#') ? `/${link.href}` as any : link.href as any}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === link.id
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-cyan-400/10 rounded-lg border border-cyan-400/20"
                    transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side: Lang toggle + hamburger */}
          <div className="flex items-center gap-3 rtl:gap-3">
            <Link
              href={pathname}
              locale={locale === 'en' ? 'ar' : 'en'}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-cyan-900/60 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <span className="text-base leading-none">{locale === 'en' ? '🇴🇲' : '🇬🇧'}</span>
              {t('lang')}
            </Link>

            {/* Hamburger - mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors gap-1.5 ${menuOpen ? 'ham-open' : ''}`}
              aria-label="Toggle menu"
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 z-40 pt-20 pb-6 px-6 glass-nav md:hidden border-b border-white/10 shadow-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={`/${link.href}` as any}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={pathname}
                locale={locale === 'en' ? 'ar' : 'en'}
                className="mt-2 px-4 py-3 rounded-xl text-base font-medium text-cyan-400 bg-cyan-400/5 border border-cyan-900/50 text-center hover:bg-cyan-400/10 transition-all"
              >
                {t('lang')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
