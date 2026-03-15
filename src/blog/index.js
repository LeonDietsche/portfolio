import eigenmietwertPost from './posts/eigenmietwert';

const posts = [eigenmietwertPost];

export const getBlogPosts = (locale) =>
  posts.map((post) => ({
    slug: post.slug,
    date: post.date,
    ...post[locale]
  }));

export const getBlogPostBySlug = (slug, locale) => {
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) {
    return null;
  }

  return {
    slug: post.slug,
    date: post.date,
    ...post[locale]
  };
};
