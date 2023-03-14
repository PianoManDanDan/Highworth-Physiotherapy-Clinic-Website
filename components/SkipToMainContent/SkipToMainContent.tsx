import Link from 'next/link';
import styles from './SkipToMainContent.module.scss';

export const SkipToMainContent: React.FC<{}> = () => {
  return (
    <Link href="#main-content" className={styles.skipContent}>
      Skip to main content
    </Link>
  );
}

export default SkipToMainContent;
