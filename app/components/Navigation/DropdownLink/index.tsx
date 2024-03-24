'use client';

import Link from 'next/link';
import styles from './index.module.scss';
import { usePathname } from 'next/navigation';

const DropdownLink = ({ title }: { title: string }) => {
  const href = title.toLocaleLowerCase().split(' ').join('-');
  const path = usePathname().split('/').at(-1)!;
  const p = path
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Link
      href={`/posts/${href}`}
      style={{
        color: p === title ? '#4654a5' : 'currentColor',
        borderColor: p === title ? '#4654a5' : 'currentColor',
      }}
      className={styles.link}>
      {title}
    </Link>
  );
};

export default DropdownLink;
