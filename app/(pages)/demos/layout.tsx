import { DemoHeader } from '@/app/components';
import styles from './layout.module.scss';

const DemosLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DemoHeader />
      <main className={styles.mainContainer}>{children}</main>
    </div>
  );
};

export default DemosLayout;
