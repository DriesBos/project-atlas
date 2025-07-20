import { apiPlugin, storyblokInit, SbReactComponentsMap } from '@storyblok/react/rsc';

import Page from '@/components/storyblok/page';
import SectionIntro from '@/components/storyblok/section-intro';

const components: SbReactComponentsMap = {
  page: Page,
  'section-intro': SectionIntro,
};

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN || 'demo-token',
  components,
  use: [apiPlugin],
  apiOptions: {
    region: 'us', // Make sure this matches your Storyblok space region
  },
});
