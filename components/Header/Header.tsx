import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { NavMenu } from '../NavMenu';
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
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/facilities'>
          <a>Facilities</a>
        </Link>
        <Link href='/physiotherapy'>
          <a>Physiotherapy</a>
        </Link>
        <Link href='/animals'>
          <a>Animals</a>
        </Link>
        <Link href='/meet-the-team'>
          <a>Meet the Team</a>
        </Link>
        <Link href='/faq'>
          <a>FAQ's</a>
        </Link>
        <Link href='/contact'>
          <a>Contact Us</a>
        </Link>
      </NavMenu>
    </header>
  );
}

export default Header;
