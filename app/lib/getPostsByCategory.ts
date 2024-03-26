import { allPosts } from '@/.contentlayer/generated';
import { categories } from '@/app/content/postCategories';

interface PostsSortedByCategory {
  category: string;
  titles: string[];
}

const getPostsByCategory = (): PostsSortedByCategory[] => {
  const cp = categories;

  const byCategory = cp.map((category) => {
    const titles = allPosts
      .filter((post) => post.category === category)
      .map((post) => post.title);

    return {
      category,
      titles,
    };
  });

  return byCategory;
};

export default getPostsByCategory;
