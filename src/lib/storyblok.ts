import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from '@/components/storyblok/page';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN || 'demo-token',
  components: {
    page: Page,
  },
  use: [apiPlugin],
  apiOptions: {
    region: 'us', // Make sure this matches your Storyblok space region
  },
});
