import { allPosts } from '@/.contentlayer/generated';

const getRecentPosts = () => {
  const recentPosts = allPosts.sort((a, b) => {
    let ra = a.publishDate
      .split(/[\s,]+/)
      .reverse()
      .join();
    let rb = b.publishDate
      .split(/[\s,]+/)
      .reverse()
      .join();

    return ra > rb ? -1 : ra < rb ? 1 : 0;
  });

  return recentPosts;
};

export default getRecentPosts;
