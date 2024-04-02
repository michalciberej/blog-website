import styles from './page.module.scss';
import { PreviewGroup } from '../components';
import getRecentPosts from '../lib/getRecentPosts';

const HomePage = () => {
  const recentPosts = getRecentPosts();

  return (
    <div className={styles.page}>
      <section>
        <div className={styles.headingContainer}>
          <h1>
            Welcome to my blog <div className={styles.logo} /> Im Michal and
            here I document my explorations.
          </h1>
        </div>
      </section>
      <section>
        <PreviewGroup
          posts={recentPosts}
          title='Recent Titles'
          amount={6}
        />
      </section>
    </div>
  );
};

export default HomePage;
