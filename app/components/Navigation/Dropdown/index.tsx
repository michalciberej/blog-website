'use client';

import styles from './index.module.scss';
import { DropdownLink } from '@/app/components';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  title: string;
  postList: string[];
}

const duration = 0.3;
const ease = 'power3.easeOut';

const Dropdown = ({ title, postList }: DropdownProps) => {
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
      tl.to(dropdown, { height: 0, duration, ease });
      tl.to(icon, { rotateZ: -90, duration, ease }, '<');
    } else {
      tl.to(dropdown, {
        height: 'auto',
        duration,
        ease,
      });
      tl.to(icon, { rotateZ: 0, duration, ease }, '<');
    }
  }, [isOpened]);

  return (
    <div
      className={styles.dropdown}
      style={{ display: !postList.length ? 'none' : 'flex' }}>
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
        {postList.map((postTitle, index) => (
          <li key={index}>
            <DropdownLink title={postTitle} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
