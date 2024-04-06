import styles from './index.module.scss';
import { Logo, SelectNav } from '@/app/components';

const DemoHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav>
          <SelectNav />
        </nav>
      </div>
    </header>
  );
};

export default DemoHeader;
