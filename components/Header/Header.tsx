import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'react-feather';
import { NavMenu, NavMenuItem } from '../NavMenu';
import styles from './Header.module.scss';
import logoImage from 'public/assets/logos/hpc.png';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header: React.FC<{}> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoWrapper}>
          <Link href='/' className={styles.logo}>
            <Image
              src={logoImage}
              alt=''
              className={styles.logoImage}
            />
            <h1 className={styles.logoTitle}>Highworth Physiotherapy Clinic</h1>
          </Link>
        </div>
        <address className={styles.phoneLink}>
          <Link
            className={styles.contact}
            href='tel:+441793763814'
            aria-label='Call us on 01793 763814'
          >
            <span className={styles.contactNumber}>01793 763814</span>
            <Phone className={styles.contactIcon} />
          </Link>
        </address>
        <ThemeSwitcher />
      </div>
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
};

export default Header;
