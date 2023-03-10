import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'react-feather';
import { NavMenu, NavMenuItem } from '../NavMenu';
import styles from './Header.module.scss';

export const Header: React.FC<{}> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <Link href='/' className={styles.logo}>
          <Image
            src='/assets/logos/hpc.png'
            alt='Highworth Physiotherapy Clinic'
            height={128}
            width={30}
          />
        </Link>
        <div className={styles.textWrapper}>
          <Link href='/'>
            <h1 className={styles.title}>Highworth Physiotherapy Clinic</h1>
          </Link>
          <address>
            <h2>
              <a
                className={styles.contact}
                href="tel:+441793763814"
              >
                <Phone />
                <span className={styles.contactNumber}>01793 763814</span>
              </a>
            </h2>
          </address>
        </div>
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
