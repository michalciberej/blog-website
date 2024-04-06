'use client';

import styles from './page.module.scss';
import { categories, Category } from '@/app/content/postCategories';
import { useEffect, useState } from 'react';
import { PreviewGroup, Button } from '@/app/components';
import getRecentPosts from '@/app/lib/getRecentPosts';

const colorPrimary = '#4654a5';
const textPrimary = '#ededed';

const AllPostsWebsite = () => {
  const allPosts = getRecentPosts();
  const [currentCategory, setCurrentCategory] = useState<Category>('Recent');
  const [currentAmount, setCurrentAmount] = useState(9);
  const [posts, setPosts] = useState(allPosts);

  const handleSort = (c: Category) => {
    setCurrentCategory(c);
  };

  const handleShowMore = () => {
    setCurrentAmount(currentAmount + 9);
  };

  useEffect(() => {
    if (currentCategory === 'Recent') setPosts(allPosts);
    else setPosts(allPosts.filter((post) => post.category === currentCategory));
  }, [currentCategory, allPosts]);

  return (
    <div className={styles.page}>
      <ul className={styles.sortList}>
        {categories.map((category, index) => (
          <li key={index}>
            <button
              className={styles.sortEl}
              type='button'
              style={{
                borderColor:
                  currentCategory === category ? colorPrimary : undefined,
                color: currentCategory === category ? textPrimary : undefined,
              }}
              onClick={() => handleSort(category)}
              aria-label={`Sort by ${category}`}>
              {category}
            </button>
          </li>
        ))}
      </ul>
      <section>
        <h2>All Posts</h2>
        {posts && (
          <PreviewGroup
            posts={posts}
            amount={currentAmount}
          />
        )}
        <div className={styles.button}>
          {currentAmount < posts.length && (
            <Button onClick={handleShowMore}>Show More</Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllPostsWebsite;
