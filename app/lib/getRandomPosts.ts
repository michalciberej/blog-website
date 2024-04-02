import { allPosts } from '@/.contentlayer/generated';

const getRandomPosts = (slug: string, amount: number) => {
  const randomPosts = Array(amount);

  let i = 0;
  while (i < randomPosts.length) {
    const randomIndex = Math.floor(Math.random() * allPosts.length);
    const el = allPosts[randomIndex];

    if (el.slugAsParams !== slug && !randomPosts.includes(el)) {
      randomPosts[i] = el;
      i++;
    }
  }

  return randomPosts;
};

export default getRandomPosts;
