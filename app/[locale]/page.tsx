import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import ResearchSection from '@/components/ResearchSection';
import PreviewProjectsSection from '@/components/PreviewProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] overflow-x-hidden text-white">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <CertificationsSection />
      <ResearchSection />
      <PreviewProjectsSection />
      <ContactSection />
    </main>
  );
}
