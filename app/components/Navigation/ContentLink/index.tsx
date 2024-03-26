import { MouseEvent } from 'react';
import styles from './index.module.scss';

const ContentLink = ({
  label,
}: // currentActive,
{
  label: string;
  // currentActive: string;
}) => {
  const href = label.split(' ').join('-').toLowerCase();

  const handleScroll = (e: MouseEvent) => {
    e.preventDefault();
    const targetEl = document.querySelector(`#${href}`);
    targetEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <li>
      <a
        href={`#${href}`}
        onClick={handleScroll}
        // style={{
        //   color: label === currentActive ? '#4654a5' : 'currentColor',
        // }}
        className={styles.link}>
        {label.slice(0, 1).toUpperCase() + label.slice(1)}
      </a>
    </li>
  );
};

export default ContentLink;
