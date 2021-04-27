import React from 'react';
import styles from './NavMenu.module.scss';

export const NavMenu: React.FC<{}> = ({ children }) => {
  return (
    <nav>
      {children}
    </nav>
  );
}

export default NavMenu;
