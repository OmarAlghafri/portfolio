'use client';

import FlutterProjectsSection from '@/components/FlutterProjectsSection';
import WebsiteProjectsSection from '@/components/WebsiteProjectsSection';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';

export default function ProjectsPage() {
    const t = useTranslations('Projects');
    const router = useRouter();

    return (
        <main className="min-h-screen bg-[#0a0a0f] overflow-x-hidden text-white pt-24">
            {/* Back Button */}
            <div className="fixed top-6 left-6 z-50">
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
            <FlutterProjectsSection />
            <WebsiteProjectsSection />
        </main>
    );
}
