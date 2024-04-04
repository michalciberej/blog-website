
import {
  ContentSidebar,
  PostLayout,
  PostHeading,
  PreviewGroup,
} from '@/app/components';
import styles from './page.module.scss';
import getPostBySlug from '@/app/lib/getPostBySlug';
import Mdx from '@/app/components/MDX/mdx-components';
import { allPosts, Post } from '@/.contentlayer/generated';
import '@/app/scss/code-highlight.scss';
import getRandomPosts from '@/app/lib/getRandomPosts';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  return allPosts.map((post: Post) => {
    slug: post.slugAsParams;
  });
};

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostBySlug(params.slug);
  const randomPosts = getRandomPosts(params.slug, 3);

  return (
    <div className={styles.container}>
      <PostLayout>
        <PostHeading post={post} />
        <Mdx code={post.body.code} />
        <PreviewGroup
          posts={randomPosts}
          title='Other Posts'
          amount={3}
        />
      </PostLayout>
      <ContentSidebar post={post} />
    </div>
  );
};

export default PostPage;
