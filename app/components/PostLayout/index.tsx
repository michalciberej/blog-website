import styles from './index.module.scss';

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return <article className={styles.postLayout}>{children}</article>;
};

export default PostLayout;
