import styles from './page.module.scss';
import { PreviewGroup, Header, Footer } from '../components';
import getRecentPosts from '../lib/getRecentPosts';

const HomePage = () => {
  const recentPosts = getRecentPosts();

  return (
    <>
      <Header />
      <main className={styles.page}>
        <section>
          <div className={styles.headingContainer}>
            <h1>
              Welcome to my blog <div className={styles.logo} /> I&apos;m Michal
              and here I document my explorations.
            </h1>
          </div>
        </section>
        <section>
          <PreviewGroup
            posts={recentPosts}
            title='Recent Posts'
            amount={8}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
