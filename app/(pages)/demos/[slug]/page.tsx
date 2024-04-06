import { allPosts } from '@/.contentlayer/generated';
import styles from './page.module.scss';
import { Suspense } from 'react';

interface DemoPageParams {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  return allPosts.map(({ slugAsParams }) => {
    slug: slugAsParams;
  });
};

export const generateMetadata = ({ params }: DemoPageParams) => {
  const title = params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${title} | Michal Ciberej's Blog`,
  };
};

const DemoPage = ({ params }: DemoPageParams) => {
  const source = `https://michalciberej.github.io/${params.slug}`;

  return (
    <embed
      src={source}
      className={styles.embed}
    />
  );
};

export default DemoPage;
