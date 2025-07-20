import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Space_Mono } from 'next/font/google';
import '@/styles/reset.css';
import '@/styles/vars.sass';
import '@/styles/typography.sass';
import '@/styles/globals.sass';
import StoryblokProvider from '@/providers/storyblok-provider';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import ScrollReset from '@/components/scroll-reset';
import MainScrollTrigger from '@/components/main-scroll-trigger';
import StaggerAnimation from '@/components/stagger-animation';
import { SectionCounterProvider } from '@/components/section-counter';
import { ThemeStoreProvider } from '@/providers/theme-store-provider';
import Landing from '@/components/landing/landing';
import SectionOhio from '@/components/section-ohio/section-ohio';
import SectionNumbers from '@/components/section-numbers/section-numbers';
import SectionProblems from '@/components/section-problems/section-problems';
import SectionSolutions from '@/components/section-solutions/section-solutions';
import SectionMail from '@/components/section-mail/section-mail';
import FooterSpacer from '@/components/footer-spacer';

const spaceMono = Space_Mono({
  weight: '400',
  variable: '--font-space-mono',
  subsets: ['latin'],
});

const roopert = localFont({
  src: [
    {
      path: './../fonts/roobert/RoobertTRIAL-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-roopert',
});

const teetee = localFont({
  src: [
    {
      path: './../fonts/teetee/teetee.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-teetee',
});

export const metadata: Metadata = {
  title: 'American Transmission',
  description: 'Powering the New American Industrial Base.',
  openGraph: {
    title: 'American Transmission',
    description: 'Powering the New American Industrial Base.',
    images: [
      {
        url: 'https://project-atlas-prototype.netlify.app//ogimage.jpg',
        width: 1200,
        height: 630,
        alt: 'American Transmission - Powering the New American Industrial Base.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'American Transmission',
    description: 'Powering the New American Industrial Base.',
    images: ['https://project-atlas-prototype.netlify.app//ogimage.jpg'],
  },
  appleWebApp: {
    title: 'ATLAS',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon/favicon-light.ico',
        href: '/favicon/favicon-light.ico',
        type: 'image/x-icon',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon/favicon.ico',
        href: '/favicon/favicon-dark.ico',
        type: 'image/x-icon',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoryblokProvider>
        <ThemeStoreProvider>
          <SectionCounterProvider>
            <body
              className={`${roopert.variable} ${spaceMono.variable} ${teetee.variable}`}
            >
              <ScrollReset />
              <StaggerAnimation />
              <main>
                <Header />
                <Landing />
                {children}
                <SectionNumbers />
                <SectionProblems />
                <SectionSolutions />
                <SectionOhio />
                <SectionMail />
                <MainScrollTrigger />
              </main>
              <FooterSpacer />
              <Footer />
            </body>
          </SectionCounterProvider>
        </ThemeStoreProvider>
      </StoryblokProvider>
    </html>
  );
}
