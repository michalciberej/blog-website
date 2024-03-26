import { useMDXComponent } from 'next-contentlayer/hooks';
import Heading from './Heading';
import CodeBlock from './CodeBlock';
import Callout from './Callout';
import CusImage from './CusImage';
import Pill from './Pill';
import List from './List';

const components = {
  Heading,
  CodeBlock,
  Callout,
  CusImage,
  Pill,
  List
};

interface MdxProps {
  code: string;
}

const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
};

export default Mdx;
