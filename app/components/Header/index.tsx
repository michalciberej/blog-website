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
              <a href=''>About me</a>
            </li>
            <li>
              <a href=''>Demos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
