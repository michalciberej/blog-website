import Link from 'next/link';
import Logo from '../Logo';
import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav>
          <ul className={styles.linkList}>
            <li>
              <Link href='https://www.michalciberej.com'>About me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
