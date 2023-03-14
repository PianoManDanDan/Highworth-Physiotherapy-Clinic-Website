import { Facebook } from 'react-feather';
import styles from './Footer.module.scss';

export const Footer: React.FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.socialMedia}>
          <p>Find us on Social Media</p>
          <div className={styles.socialMediaLinks}>
            <a
              href='https://www.facebook.com/HighworthPhysio/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Facebook'
            >
              <Facebook size={32} />
            </a>
          </div>
        </div>
        <div className={styles.externalLinks}>
          <p>
            All of our physios are registered with at least one of the following regulatory bodies:
          </p>
          <ul>
            <li>
              <a
                href='https://www.csp.org.uk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <abbr title='Chartered Society of Physiotherapists'>CSP</abbr>
              </a>
            </li>
            <li>
              <a
                href='https://www.hcpc-uk.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <abbr title='Health and Care Professions Council'>HCPC</abbr>
              </a>
            </li>
            <li>
              <a
                href='https://www.physiofirst.org.uk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Physio First
              </a>
            </li>
            <li>
              <a
                href='https://www.aacp.org.uk/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <abbr title='Acupuncture Association of Chartered Physiotherapists'>AACP</abbr>
              </a>
            </li>
            <li>
              <a
                href='https://www.acpat.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <abbr title='Association of Chartered Physiotherapists in Animal Therapy'>ACPAT</abbr>
              </a>
            </li>
            <li>
              <a
                href='https://www.rampregister.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <abbr title='Register of Animal Musculoskeletal Practitioners'>RAMP</abbr>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
