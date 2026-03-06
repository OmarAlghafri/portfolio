import type { Metadata } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notokufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-noto-kufi" });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages: any = (await getMessages());
  const t = messages.Hero;

  return {
    title: {
      template: `%s | ${t.name}`,
      default: `${t.name} | ${t.title}`
    },
    description: messages.Hero.summary,
    keywords: ['Cyber Security', 'Network Engineer', 'CCNA', 'Azure', 'Deep Learning', 'Flutter', 'AI Research', 'Oman'],
    authors: [{ name: t.name }],
    openGraph: {
      title: `${t.name} | ${t.title}`,
      description: messages.Hero.summary,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.name} | ${t.title}`,
      description: messages.Hero.summary,
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const isRtl = locale === 'ar';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notokufi.variable} antialiased bg-[#0a0a0f] text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
