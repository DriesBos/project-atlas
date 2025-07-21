import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from '@/components/storyblok/page';
import SectionIntro from '@/components/storyblok/sectionintro/sectionintro';
import SectionNumbers from '@/components/storyblok/sectionnumbers/sectionnumbers';
import BlokNumbers from '@/components/storyblok/bloknumbers/bloknumbers';
import SectionIssues from '@/components/storyblok/sectionissues/sectionissues';
import BlokText from '@/components/storyblok/bloktext/bloktext';
import SectionSolutions from '@/components/storyblok/sectionsolutions/sectionsolutions';
import BlokSolutions from '@/components/storyblok/bloksolutions/bloksolutions';
import SectionOhio from '@/components/storyblok/sectionohio/sectionohio';
import BlokOhio from '@/components/storyblok/blokohio/blokohio';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN || 'demo-token',
  components: {
    page: Page,
    sectionintro: SectionIntro,
    sectionnumbers: SectionNumbers,
    sectionissues: SectionIssues,
    sectionsolutions: SectionSolutions,
    sectionohio: SectionOhio,
    bloknumbers: BlokNumbers,
    bloktext: BlokText,
    bloksolutions: BlokSolutions,
    blokohio: BlokOhio,
  },
  use: [apiPlugin],
  apiOptions: {
    region: 'us', // Make sure this matches your Storyblok space region
  },
});
