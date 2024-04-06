import { Header, NavSidebar, Footer } from '../../components';
import styles from './layout.module.scss';

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className={styles.mainContainer}>
        <NavSidebar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PostsLayout;
