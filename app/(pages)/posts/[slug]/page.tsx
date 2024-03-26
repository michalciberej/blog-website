import { ContentSidebar, PostLayout, PostHeading } from '@/app/components';
import styles from './page.module.scss';
import getPostBySlug from '@/app/lib/getPostBySlug';
import Mdx from '@/app/components/MDX/mdx-components';
import '@/app/scss/code-highlight.scss';

interface PostPageProps {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostBySlug(params.slug);

  return (
    <>
      <div className={styles.container}>
        <PostLayout>
          <PostHeading post={post} />
          <Mdx code={post.body.code} />
        </PostLayout>
        <ContentSidebar post={post} />
      </div>
    </>
  );
};

export default PostPage;
