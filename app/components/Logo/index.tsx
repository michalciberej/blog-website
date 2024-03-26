import Link from 'next/link';
import styles from './index.module.scss';

import React from 'react';

const Logo = () => {
  return (
    <Link
      href={'/'}
      aria-label='Logo'
      className={styles.logo}>
      <div className={styles.logoEl1} />
      <div className={styles.logoEl2} />
      <div className={styles.logoEl3} />
      <div className={styles.logoEl4} />
    </Link>
  );
};

export default Logo;
