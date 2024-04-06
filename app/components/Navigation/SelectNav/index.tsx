'use client';

import styles from './index.module.scss';
import { allPosts } from '@/.contentlayer/generated';
import { useRouter } from 'next/navigation';

const SelectNav = () => {
  const router = useRouter();

  return (
    <select
      name='Page'
      className={styles.select}
      onChange={(e) => {
        router.push(`/demos/${e.currentTarget.value}`);
      }}>
      <option value={'/'}>All Demos</option>
      {allPosts.map(({ title, slugAsParams, _id }) => (
        <option
          value={slugAsParams}
          key={_id}>
          {title}
        </option>
      ))}
    </select>
  );
};

export default SelectNav;
