export const fetchStory = async (
  version: 'draft' | 'published',
  slug?: string[]
) => {
  const correctSlug = `${slug ? slug.join('/') : 'home'}`;
  console.log('FETCHSTORY', correctSlug, version);

  // Use the appropriate token based on version
  const token = version === 'published' 
    ? process.env.NEXT_PUBLIC_STORYBLOK_TOKEN 
    : process.env.NEXT_PREVIEW_STORYBLOK_TOKEN;

  if (!token) {
    throw new Error(`Missing Storyblok token for version: ${version}`);
  }

  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${correctSlug}?version=${version}&token=${token}`,
      {
        next: { tags: ['cms'] },
        cache: version === 'published' ? 'default' : 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch story: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return { story: data.story };
  } catch (error) {
    console.error('Error fetching story:', error);
    throw error;
  }
};