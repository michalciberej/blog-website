'use client';

import { ComponentPropsWithoutRef } from 'react';
import styles from './index.module.scss';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';

const CodeBlock = (props: ComponentPropsWithoutRef<'code'>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    const codeContainer = containerRef.current?.querySelector('code');

    if (!codeContainer) return;

    const code = codeContainer?.innerText;
    await navigator.clipboard.writeText(code);
  };

  return (
    <div
      {...props}
      ref={containerRef}
      className='mdx-codeblock'>
      <button
        type='button'
        onClick={handleCopy}
        className={styles.copyButton}
        aria-label='Copy code'>
        <DocumentDuplicateIcon className={styles.icon} />
      </button>
      {props.children}
    </div>
  );
};

export default CodeBlock;
