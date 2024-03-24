import styles from './index.module.scss';

const PostLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.postLayout}>{children}</main>;
};

export default PostLayout;
