import React from 'react';
import Link from 'next/link';
import { NavMenuItemProps } from './NavMenuItemProps';
import styles from './NavMenuItem.module.scss';

export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  text,
  href,
}) => {
  return (
    <Link href={href}>
      <a className={styles.navMenuItem}>{text}</a>
    </Link>
  );
};
