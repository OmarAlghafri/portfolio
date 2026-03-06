export interface Project {
  key: string;
  url?: string;
  path?: string;
  gradient?: string;
  accent?: string;
  mockColor?: string;
  type: 'web' | 'app';
  icon?: string;
}

export const WEB_PROJECTS: Project[] = [
  {
    key: 'cardio',
    url: 'https://cardio-detect.ai',
    path: '/websites/cardio/login_en.html',
    gradient: 'from-cyan-500/10 to-indigo-500/10',
    accent: 'from-cyan-400 to-indigo-500',
    mockColor: 'bg-cyan-900/20',
    type: 'web',
    icon: '🩺',
  },
  {
    key: 'website',
    url: 'https://legalai.website',
    path: '/apps/legal/en.html',
    gradient: 'from-amber-500/10 to-orange-500/10',
    accent: 'from-amber-400 to-orange-500',
    mockColor: 'bg-amber-900/20',
    type: 'web',
    icon: '💻',
  },
  {
    key: 'apartment',
    path: '/apps/apartment/index.html',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accent: 'text-cyan-400',
    type: 'app',
    icon: '🏙️',
  },
  {
    key: 'admin',
    path: '/apps/admin/index.html',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    accent: 'text-indigo-400',
    type: 'app',
    icon: '⚙️',
  },
  {
    key: 'legal',
    path: '/apps/legal/index.html',
    gradient: 'from-amber-500/20 to-orange-500/20',
    accent: 'text-amber-400',
    type: 'app',
    icon: '⚖️',
  },
  {
    key: 'cardio_app',
    path: '/apps/CardioAI/index.html',
    gradient: 'from-cyan-500/20 to-indigo-500/20',
    accent: 'text-cyan-400',
    type: 'app',
    icon: '🩺',
  },
  {
    key: 'hayat',
    path: '/apps/hayat/index.html',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-400',
    type: 'app',
    icon: '🌱',
  },
];
