'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const SKILLS = [
  { name: 'Networking (CCNA)', level: 95, color: 'from-cyan-400 to-blue-500' },
  { name: 'Cloud (Azure)', level: 88, color: 'from-blue-400 to-indigo-500' },
  { name: 'Flutter & Dart', level: 92, color: 'from-indigo-400 to-purple-500' },
  { name: 'Full-Stack (Next.js)', level: 85, color: 'from-purple-400 to-pink-500' },
  { name: 'Deep Learning', level: 80, color: 'from-orange-400 to-red-500' },
  { name: 'Cyber Security', level: 82, color: 'from-green-400 to-emerald-500' },
];

const TECH_BADGES = [
  'CCNA', 'Azure', 'Python', 'Dart', 'Flutter', 'Next.js',
  'React', 'TypeScript', 'Tailwind CSS', 'SQL', 'C++', 'Java',
  'Deep Learning', 'PyTorch/TF', 'Network Security'
];

export default function AboutSection() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-24 relative scroll-mt-20">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e]/20 to-[#0a0a0f]" />

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
          <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">{t('who_i_am')}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="glass card-shine rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-white">{t('bio_title')}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-base">{t('bio')}</p>

            {/* University / Education Section */}
            <div className="p-4 rounded-xl bg-cyan-400/5 border border-cyan-400/10">
              <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="text-lg">🎓</span> {t('education_title')}
              </h4>
              <p className="text-white font-semibold text-sm">{t('university')}</p>
              <p className="text-gray-400 text-xs">{t('degree')}</p>
            </div>

            {/* Quick info pills */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { icon: '🌍', label: t('location') },
                { icon: '🚀', label: t('it_club') },
                { icon: '🔬', label: t('research_pi') },
                { icon: '🌐', label: t('langs') },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-gray-400"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Tech badges */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">{t('skills')}</h4>
              <div className="flex flex-wrap gap-2">
                {TECH_BADGES.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-900/20 border border-cyan-900/40 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Proficiency Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass card-shine rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 rounded-xl bg-indigo-400/10 flex items-center justify-center text-indigo-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-white">{t('proficiency')}</h3>
            </div>

            <div className="space-y-5">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
