import styles from './index.module.scss';

import React from 'react';

const List = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.list}>{children}</div>;
};

export default List;
