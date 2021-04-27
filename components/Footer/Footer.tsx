import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

export const Footer: React.FC<{}> = () => {
  return (
    <footer>
      <div>
        <p>Find us on Facebook</p>
        <a 
          href="https://www.facebook.com/HighworthPhysio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src='/assets/logos/facebook.png'
            alt='Find us on Facebook'
            height={32}
            width={32}
            layout='intrinsic'
          />
        </a>
      </div>
      <div>
        <p>
          All of our physios are registered with at least one of the following regulatory bodies:
        </p>
        <ul>
          <li>
            <a
              href="https://www.csp.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <abbr title="Chartered Society of Physiotherapists">CSP</abbr>
            </a>
          </li>
          <li>
            <a
              href="https://www.hcpc-uk.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <abbr title="Health and Care Professions Council">HCPC</abbr>
            </a>
          </li>
          <li>
            <a
              href="https://www.physiofirst.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Physio First
            </a>
          </li>
          <li>
            <a
              href="https://www.aacp.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <abbr title="Acupuncture Association of Chartered Physiotherapists">AACP</abbr>
            </a>
          </li>
          <li>
            <a
              href="https://www.acpat.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <abbr title="Association of Chartered Physiotherapists in Animal Therapy">ACPAT</abbr>
            </a>
          </li>
          <li>
            <a
              href="https://www.rampregister.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <abbr title="Register of Animal Musculoskeletal Practitioners">RAMP</abbr>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
