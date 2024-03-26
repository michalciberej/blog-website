'use client';

import { ContentLink } from '@/app/components';
import styles from './index.module.scss';
import { Post } from '@/.contentlayer/generated';
import { useEffect, useState } from 'react';
import useIdOfCurrentSection from '@/app/hooks/useIdOfCurrentSection';

const ContentSidebar = ({ post }: { post: Post }) => {
  const [testContent, setTestContent] = useState<string[]>([]);

  //? EXTRACT AS A HOOK?
  //! DECIDE BETWEEN PROPS OR STATE

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const els = document.querySelectorAll('h2');
      setTestContent(Array.from(els).map((el) => el.innerText));
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
              label={el}
            />
          ))}
        </ol>
      </nav>
    </aside>
  );
};

export default ContentSidebar;
