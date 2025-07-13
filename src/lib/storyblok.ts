import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from '@/components/storyblok/page';
import PagePlay from '@/components/storyblok/pageplay';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN || 'demo-token',
  components: {
    page: Page,
    pageplay: PagePlay,
  },
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
  },
});
