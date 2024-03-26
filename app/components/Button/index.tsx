import Link from 'next/link';
import styles from './index.module.scss';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps {
  link?: boolean;
  href?: string;
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

const Button: FC<Props> = ({ link, href, ...props }) => {
  if (link)
    return (
      <Link
        href={href!}
        target='_blank'
        className={styles.button}>
        <span>{props.children}</span>
        <ArrowUpRightIcon className={styles.icon} />
      </Link>
    );

  return (
    <button
      {...props}
      className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
