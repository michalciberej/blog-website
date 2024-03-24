import { notFound } from 'next/navigation';
import { allPosts } from '@/.contentlayer/generated';

const getPostBySlug = async (slug: string) => {
  const doc = allPosts.find((post) => slug === post.slugAsParams);

  if (!doc) notFound();

  return doc;
};

export default getPostBySlug;
