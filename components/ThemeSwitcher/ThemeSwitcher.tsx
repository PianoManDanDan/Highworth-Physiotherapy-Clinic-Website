import { Sun, Moon } from 'react-feather';
import { useTheme } from 'next-themes';
import styles from './ThemeSwitcher.module.scss';
import { useEffect, useState } from 'react';

export const ThemeSwitcher: React.FC<{}> = () => {
  const [ mounted, setMounted ] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const icon = resolvedTheme === 'light' ?
    <Moon className={styles.themeIcon} /> :
    <Sun className={styles.themeIcon} />

  return (
    <button
      className={styles.themeIconWrapper}
      aria-label={`Switch to ${resolvedTheme === 'light' ? 'dark': 'light'} mode`}
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {icon}
    </button>
  );
}

export default ThemeSwitcher;
