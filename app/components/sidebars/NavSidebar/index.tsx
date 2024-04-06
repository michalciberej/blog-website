import styles from './index.module.scss';
import { Dropdown } from '@/app/components';
import getPostsByCategory from '@/app/lib/getPostsByCategory';
import getTabs from '@/app/lib/getTabs';

const NavSidebar = async () => {
  const categories = getPostsByCategory();
  const tabs = getTabs();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navigation}>
        <Dropdown
          title='Pages'
          linkList={tabs}
        />
        {categories.map(({ category, links }, index) => (
          <Dropdown
            key={index}
            title={category}
            linkList={links}
          />
        ))}
      </nav>
    </aside>
  );
};

export default NavSidebar;
