import styles from './index.module.scss';
import { Dropdown } from '@/app/components';
import getPostsByCategory from '@/lib/getPostsByCategory';

const NavSidebar = async () => {
  const categories = getPostsByCategory();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navigation}>
        {categories.map(({ category, titles }, index) => (
          <Dropdown
            key={index}
            title={category}
            postList={titles}
          />
        ))}
      </nav>
    </aside>
  );
};

export default NavSidebar;
