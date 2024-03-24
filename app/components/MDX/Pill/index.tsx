import { FC } from 'react';
import styles from './index.module.scss';

interface PillProps {
  children: React.ReactNode;
  type: 'yep';
}

const Pill: FC<PillProps> = ({ children, type }) => {
  return <span className={styles.pill}>{children}</span>;
};

export default Pill;
