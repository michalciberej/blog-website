import {
  ContentSidebar,
  PostLayout,
  PostHeading,
  PreviewGroup,
} from '@/app/components';
import styles from './page.module.scss';
import getPostBySlug from '@/app/lib/getPostBySlug';
import Mdx from '@/app/components/MDX/mdx-components';
import { allPosts } from '@/.contentlayer/generated';
import '@/app/scss/code-highlight.scss';
import getRandomPosts from '@/app/lib/getRandomPosts';

interface PostPageParams {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  return allPosts.map(({ slugAsParams }) => {
    slug: slugAsParams;
  });
};

export const generateMetadata = ({ params }: PostPageParams) => {
  const title = params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${title} | Michal Ciberej's Blog`,
  };
};

const PostPage = async ({ params }: PostPageParams) => {
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
