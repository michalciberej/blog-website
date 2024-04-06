import getSocials from '@/app/lib/getSocials';
import styles from './index.module.scss';

const Footer = () => {
  const socials = getSocials();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.linkList}>
          {socials.map(({ title, href }, index) => (
            <li key={index}>
              <a href={href}>{title}</a>
            </li>
          ))}
        </ul>
        <span>Created by Michal Ciberej @2024</span>
      </div>
    </footer>
  );
};

export default Footer;
