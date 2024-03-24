'use client';

import { ContentLink } from '@/app/components';
import styles from './index.module.scss';
import { Post } from '@/.contentlayer/generated';
import { useEffect, useState } from 'react';

const ContentSidebar = ({ post }: { post: Post }) => {
  const [testContent, setTestContent] = useState<string[]>([]);
  const [currentActive, setCurrentActive] = useState<string>('');

  //? EXTRACT AS A HOOK?
  //! DECIDE BETWEEN PROPS OR STATE

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        setCurrentActive(id.replaceAll('-', ' '));
      });
    },
    {
      threshold: 0.1,
      root: document.querySelector('main'),
    }
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const els = document.querySelectorAll('h2');
      setTestContent(Array.from(els).map((el) => el.innerText));
      document.querySelectorAll('h2').forEach((el) => observer.observe(el));
    }
  }, []);

  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.heading}>Table of content</h4>
      <nav>
        <ol className={styles.linkList}>
          {testContent!.map((el, index) => (
            <ContentLink
              key={index}
              currentActive={currentActive}
              label={el}
            />
          ))}
        </ol>
      </nav>
    </aside>
  );
};

export default ContentSidebar;
