import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { NavMenu, NavMenuItem } from '../NavMenu';
import styles from './Header.module.scss';

export const Header: React.FC<{}> = () => {
  return (
    <header className={styles.header}>
      <Image
        src='/assets/logos/hpc.png'
        alt='Highworth Physiotherapy Clinic'
        height={128}
        width={30}
        layout='intrinsic'
      />
      <h1>Highworth Physiotherapy Clinic</h1>
      <address>
        <h2>tel: <a href="tel:+441793763814">01793 763814</a></h2>
      </address>
      <NavMenu>
        <NavMenuItem text='Home' href='/' />
        <NavMenuItem text='Facilities' href='/facilities' />
        <NavMenuItem text='Physiotherapy' href='/physiotherapy' />
        <NavMenuItem text='Animals' href='/animals' />
        <NavMenuItem text='Meet the Team' href='/meet-the-team' />
        <NavMenuItem text="FAQ's" href='/faq' />
        <NavMenuItem text='Contact Us' href='/contact' />
      </NavMenu>
    </header>
  );
}

export default Header;
