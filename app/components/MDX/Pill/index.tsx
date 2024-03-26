import { FC } from 'react';
import styles from './index.module.scss';

interface PillProps {
  children: React.ReactNode;
  type: 'INFO' | 'SUCCES' | 'WARNING' | 'DANGER' | 'NORMAL';
}

const infoClr = '70, 85, 166';
const succesClr = '0, 242, 188';
const warningClr = '251, 149, 45';
const dangerClr = '230, 69, 79';
const normalClr = '47, 51, 60';
let clr = 'transparent';

const Pill: FC<PillProps> = ({ children, type }) => {
  if (type === 'INFO') clr = infoClr;
  if (type === 'SUCCES') clr = succesClr;
  if (type === 'WARNING') clr = warningClr;
  if (type === 'DANGER') clr = dangerClr;
  if (type === 'NORMAL') clr = normalClr;

  return (
    <span
      className={styles.pill}
      style={{
        backgroundColor: `rgba(${clr}, 0.3)`,
        borderColor: `rgba(${clr}, 1)`,
      }}>
      {children}
    </span>
  );
};

export default Pill;
