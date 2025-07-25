import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Space_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
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
import FooterSpacer from '@/components/footer-spacer';
import { GlobalDataProvider } from '@/providers/global-data-provider';
import { fetchGlobalData } from '@/utils/fetchGlobalData';
import SectionPositionInitializer from '@/components/section-position-initializer';
import StickyPositionManager from '@/components/sticky-position-manager';

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

export async function generateMetadata(): Promise<Metadata> {
  // Fetch global data for dynamic metadata
  const globalData = await fetchGlobalData('published');

  return {
    title: globalData.companyname || 'American Transmission',
    description:
      globalData.slogan || 'Powering the New American Industrial Base.',
    openGraph: {
      title: globalData.companyname || 'American Transmission',
      description:
        globalData.slogan || 'Powering the New American Industrial Base.',
      images: [
        {
          url: 'https://project-atlas-prototype.netlify.app//ogimage.jpg',
          width: 1200,
          height: 630,
          alt: `${globalData.companyname || 'American Transmission'} - ${
            globalData.slogan || 'Powering the New American Industrial Base.'
          }`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: globalData.companyname || 'American Transmission',
      description:
        globalData.slogan || 'Powering the New American Industrial Base.',
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch global data on the server
  const globalData = await fetchGlobalData('published');

  return (
    <html lang="en">
      <StoryblokProvider>
        <ThemeStoreProvider>
          <SectionCounterProvider>
            <GlobalDataProvider initialData={globalData}>
              <body
                className={`${roopert.variable} ${spaceMono.variable} ${teetee.variable}`}
              >
                <SectionPositionInitializer />
                <StickyPositionManager />
                <ScrollReset />
                <StaggerAnimation />
                <main>
                  <Header />
                  {children}
                  <MainScrollTrigger />
                </main>
                <FooterSpacer />
                <Footer />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
              </body>
            </GlobalDataProvider>
          </SectionCounterProvider>
        </ThemeStoreProvider>
      </StoryblokProvider>
    </html>
  );
}
