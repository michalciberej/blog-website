'use client';

import styles from './index.module.scss';
import { DropdownLink } from '@/app/components';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  title: string;
  linkList: { title: string; href: string }[];
}

const duration = 1;
const ease = 'elastic.out';

const Dropdown = ({ title, linkList }: DropdownProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const iconRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const icon = iconRef.current;
    const dropdown = dropdownRef.current;
    const navlinkEls = document.querySelectorAll('[data-navlink]');
    const els = navlinkEls && dropdown && icon;

    if (!els) return;

    const tl = gsap.timeline();

    if (!isOpened) {
      tl.to(dropdown, { height: 0, duration: 0.3, ease: 'power3.out.' });
      tl.to(icon, { rotateZ: -90, duration, ease }, '<');
    } else {
      tl.to(dropdown, {
        height: 'auto',
        duration: 0.3,
        ease: 'power3.out',
      });
      tl.to(icon, { rotateZ: 0, duration, ease }, '<');
    }
  }, [isOpened]);

  return (
    <div
      className={styles.dropdown}
      style={{ display: !linkList.length ? 'none' : 'flex' }}>
      <button
        type='button'
        onClick={() => setIsOpened(!isOpened)}
        className={styles.button}
        aria-label='Open/Close dropdown menu'>
        <span className={styles.title}>{title}</span>
        <ChevronDownIcon
          className={styles.icon}
          ref={iconRef}
        />
      </button>
      <ul
        className={styles.linkContainer}
        ref={dropdownRef}>
        {linkList.map((postTitle, index) => (
          <li key={index}>
            <DropdownLink link={postTitle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
