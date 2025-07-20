import { getStoryblokApi } from '@/lib/storyblok';

export const fetchStory = async (
  version: 'draft' | 'published',
  slug?: string[]
) => {
  const storyblokApi = getStoryblokApi();
  const correctSlug = `${slug ? slug.join('/') : 'home'}`;
  console.log('FETCHSTORY', correctSlug, version);

  try {
    const { data } = await storyblokApi.get(`cdn/stories/${correctSlug}`, {
      version: version,
    });

    return { story: data.story };
  } catch (error) {
    console.error('Error fetching story:', error);
    throw error;
  }
};
