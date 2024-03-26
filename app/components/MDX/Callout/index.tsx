import { FC } from 'react';
import styles from './index.module.scss';
import {
  InformationCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

interface CalloutProps {
  children: React.ReactNode;
  type: 'INFO' | 'DANGER' | 'SUCCES' | 'WARNING';
}

const infoClr = '70, 85, 166';
const succesClr = '0, 242, 188';
const warningClr = '251, 149, 45';
const dangerClr = '230, 69, 79';
let clr = 'transparent';

const Callout: FC<CalloutProps> = ({ children, type }) => {
  if (type === 'INFO') clr = infoClr;
  else if (type === 'SUCCES') clr = succesClr;
  else if (type === 'WARNING') clr = warningClr;
  else if (type === 'DANGER') clr = dangerClr;

  return (
    <div
      className={styles.callout}
      style={{
        backgroundColor: `rgba(${clr}, 0.3)`,
        border: `2px solid rgba(${clr}, 1)`,
      }}>
      <div
        className={styles.iconContainer}
        style={{
          border: `2px solid rgba(${clr}, 1)`,
        }}>
        {type === 'DANGER' || type === 'WARNING' ? (
          <ExclamationCircleIcon className={styles.icon} />
        ) : (
          <InformationCircleIcon className={styles.icon} />
        )}
      </div>
      {children}
    </div>
  );
};

export default Callout;
