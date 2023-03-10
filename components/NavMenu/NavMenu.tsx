import { useState } from 'react';
import cn from 'classnames';
import { Menu, X } from 'react-feather';
import styles from './NavMenu.module.scss';
import { NavMenuProps } from './NavMenuProps';

export const NavMenu: React.FC<NavMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={cn({
        [styles.menu]: true,
        [styles.menu__open]: isOpen,
      })}
    >
      <Menu
        className={cn({
          [styles.menuIcon]: true,
          [styles.menuIcon__hide]: isOpen,
        })}
        onClick={() => setIsOpen(true)}
      />
      <X
        className={cn({
          [styles.menuIcon]: true,
          [styles.menuIcon__hide]: !isOpen,
        })}
        onClick={() => setIsOpen(false)}
      />
      {children}
    </nav>
  );
};

export default NavMenu;
