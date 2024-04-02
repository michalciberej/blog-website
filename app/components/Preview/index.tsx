import { Post } from '@/.contentlayer/generated';
import { ImageWithFallback } from '../../components';
import styles from './index.module.scss';
import Link from 'next/link';

const Preview = ({ post }: { post: Post }) => {
  const { title, category, publishDate, description, slugAsParams } = post;

  return (
    <div className={styles.container}>
      <Link
        href={`/posts/${slugAsParams}`}
        className={styles.button}
        aria-label={`Link to ${title} post`}>
        <ImageWithFallback
          src={`/${slugAsParams}.webp`}
          alt={`Thumbnail of ${title} post`}
          width={400}
          height={225}
          className={styles.image}
        />
      </Link>
      <div className={styles.textContainer}>
        <div className={styles.upperpart}>
          <p>{publishDate}</p>
          <p className={styles.category}>{category}</p>
        </div>
        <Link
          href={`/posts/${slugAsParams}`}
          className={styles.title}>
          <h3>{title}</h3>
        </Link>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Preview;
