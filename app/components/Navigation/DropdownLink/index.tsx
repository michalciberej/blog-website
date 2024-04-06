'use client';

import Link from 'next/link';
import styles from './index.module.scss';
import { usePathname } from 'next/navigation';

const DropdownLink = ({ link }: { link: { title: string; href: string } }) => {
  const path = usePathname().split('/').at(-1)!;
  const p = path
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Link
      href={link.href}
      style={{
        borderColor: p === link.title ? '#4654a5' : 'currentColor',
      }}
      className={styles.link}>
      {link.title}
    </Link>
  );
};

export default DropdownLink;
