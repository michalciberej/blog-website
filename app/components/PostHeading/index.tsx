import { Post } from '@/.contentlayer/generated';
import styles from './index.module.scss';
import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/components';

//! CHANGE FOR VARIABLE IMPORTS FROM SCSS FILE
const easyClr = '0, 242, 188';
const intermediateClr = '251, 149, 45';
const advancedClr = '230, 69, 79';
let difficultyClr = 'transparent';

const PostHeading = ({ post }: { post: Post }) => {
  const {
    title,
    description,
    publishDate,
    liveDemo,
    sourceCode,
    readTime,
    difficulty,
  } = post;
  const diffToLower = post.difficulty.toLowerCase();
  if (difficulty === 'easy') difficultyClr = easyClr;
  else if (difficulty === 'intermediate') difficultyClr = intermediateClr;
  else if (difficulty === 'advanced') difficultyClr = advancedClr;

  return (
    <header className={styles.container}>
      <Link
        href={'/posts/'}
        className={styles.link}>
        <ArrowLeftIcon className={styles.icon} />
        <span className={styles.linkText}>Posts</span>
      </Link>
      <h1 className={styles.heading}>{title}</h1>
      <div className={styles.subContainer}>
        <span>{publishDate}</span>
        <span>|</span>
        <div className={styles.difficulty}>
          <div
            style={{ backgroundColor: `rgb(${difficultyClr})` }}
            className={styles.difficultyIcon}
          />
          <span>
            {diffToLower.slice(0, 1).toUpperCase() + diffToLower.slice(1)}
          </span>
        </div>
        <span>|</span>
        <div className={styles.clock}>
          <ClockIcon className={styles.clockIcon} />
          <span>{readTime} min</span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.linkContainer}>
        {liveDemo && (
          <li>
            <Button
              link
              href={liveDemo}>
              Live Demo
            </Button>
          </li>
        )}
        {sourceCode && (
          <li>
            <Button
              link
              href={sourceCode}>
              Source Code
            </Button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default PostHeading;
