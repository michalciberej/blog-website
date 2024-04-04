import { Post } from '@/.contentlayer/generated';
import styles from './index.module.scss';
import Link from 'next/link';
import { Preview } from '@/app/components';

const PreviewGroup = ({
  posts,
  amount,
  title,
}: {
  posts: Post[];
  amount: number;
  title?: string;
}) => {
  return (
    <div className={styles.previewContainer}>
      {title && (
        <div className={styles.previewHeading}>
          <h3>{title}</h3>
          <Link href='/posts/'>See All</Link>
        </div>
      )}
      <div className={styles.previewContent}>
        {posts.map(
          (post, index) =>
            index < amount && (
              <Preview
                key={post.title + index}
                post={post}
              />
            )
        )}
      </div>
    </div>
  );
};

export default PreviewGroup;
