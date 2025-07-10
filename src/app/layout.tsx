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
import SectionIntro from '@/components/section-intro/section-intro';
import SectionNumbers from '@/components/section-numbers/section-numbers';

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

export const metadata: Metadata = {
  title: 'Atlas Project',
  description: 'A New Grid for a New Amerika',
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
            <body className={`${roopert.variable} ${spaceMono.variable}`}>
              <ScrollReset />
              <StaggerAnimation />
              <main>
                <Header />
                <Landing />
                <SectionIntro />
                <SectionNumbers />
                {children}
                <SectionOhio />
                <MainScrollTrigger />
              </main>
              <div className="footerSpacer" />
              <Footer />
            </body>
          </SectionCounterProvider>
        </ThemeStoreProvider>
      </StoryblokProvider>
    </html>
  );
}
