import { useMDXComponent } from 'next-contentlayer/hooks';
import Heading from './Heading';
import CodeBlock from './CodeBlock';
import Callout from './Callout';
import CusImage from './CusImage';

const components = {
  Heading,
  CodeBlock,
  Callout,
  CusImage,
};

interface MdxProps {
  code: string;
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export default Mdx;
