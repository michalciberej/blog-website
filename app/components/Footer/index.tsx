import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.linkList}>
          <li>
            <a href='#linkedin'>Linkedin</a>
          </li>
          <li>
            <a href='#github'>Github</a>
          </li>
        </ul>
        <span>Created by Michal Ciberej @2024</span>
      </div>
    </footer>
  );
};

export default Footer;
