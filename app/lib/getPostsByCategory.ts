import { allPosts } from '@/.contentlayer/generated';
import { categories } from '@/app/content/postCategories';

interface PostsSortedByCategory {
  category: string;
  links: { title: string; href: string }[];
}

const getPostsByCategory = (): PostsSortedByCategory[] => {
  const cp = categories;

  const byCategory = cp.map((category) => {
    const links = allPosts
      .filter((post) => post.category === category)
      .map(({ title, slugAsParams }) => {
        return { title, href: `/posts/${slugAsParams}` };
      });

    return {
      category,
      links,
    };
  });

  return byCategory;
};

export default getPostsByCategory;
