import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from '@/components/storyblok/page';
import SectionIntro from '@/components/storyblok/sectionintro/sectionintro';
import SectionNumbers from '@/components/storyblok/sectionnumbers/sectionnumbers';
import BlokNumbers from '@/components/storyblok/bloknumbers/bloknumbers';
import SectionIssues from '@/components/storyblok/sectionissues/sectionissues';
import BlokText from '@/components/storyblok/bloktext/bloktext';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN || 'demo-token',
  components: {
    page: Page,
    sectionintro: SectionIntro,
    sectionnumbers: SectionNumbers,
    sectionissues: SectionIssues,
    bloknumbers: BlokNumbers,
    bloktext: BlokText,
  },
  use: [apiPlugin],
  apiOptions: {
    region: 'us', // Make sure this matches your Storyblok space region
  },
});
