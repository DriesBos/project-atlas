import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from '@/components/storyblok/page';
import SectionIntro from '@/components/storyblok/sectionintro/sectionintro';
import SectionNumbers from '@/components/storyblok/sectionnumbers/sectionnumbers';
import BlokNumbers from '@/components/storyblok/bloknumbers/bloknumbers';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN || 'demo-token',
  components: {
    page: Page,
    sectionintro: SectionIntro,
    sectionnumbers: SectionNumbers,
    bloknumbers: BlokNumbers,
  },
  use: [apiPlugin],
  apiOptions: {
    region: 'us', // Make sure this matches your Storyblok space region
  },
});
