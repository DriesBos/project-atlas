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
import SectionMail from '@/components/storyblok/sectionmail/sectionmail';
import SectionTerms from '@/components/storyblok/sectionterms/sectionterms';
import GlobalData from '@/components/storyblok/globaldata/globaldata';
import SectionLanding from '@/components/storyblok/sectionlanding/sectionlanding';

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN || 'demo-token',
  components: {
    page: Page,
    sectionlanding: SectionLanding,
    sectionintro: SectionIntro,
    sectionnumbers: SectionNumbers,
    sectionissues: SectionIssues,
    sectionsolutions: SectionSolutions,
    sectionohio: SectionOhio,
    sectionmail: SectionMail,
    sectionterms: SectionTerms,
    bloknumbers: BlokNumbers,
    bloktext: BlokText,
    bloksolutions: BlokSolutions,
    blokohio: BlokOhio,
    globaldata: GlobalData,
  },
  use: [apiPlugin],
  apiOptions: {
    region: 'us', // Make sure this matches your Storyblok space region
  },
});
