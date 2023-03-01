import React, { useState } from 'react';
import cn from 'classnames';
import { Menu, X } from 'react-feather';
import styles from './NavMenu.module.scss';

export const NavMenu: React.FC<{}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn({
        [styles.menu]: true,
        [styles['menu--open']]: isOpen,
      })}
    >
      <Menu
        className={cn({
          [styles.menu__icon]: true,
          [styles['menu__icon--hide']]: isOpen,
        })}
        onClick={() => setIsOpen(true)}
      />
      <X
        className={cn({
          [styles.menu__icon]: true,
          [styles['menu__icon--hide']]: !isOpen,
        })}
        onClick={() => setIsOpen(false)}
      />
      {children}
    </nav>
  );
};

export default NavMenu;
