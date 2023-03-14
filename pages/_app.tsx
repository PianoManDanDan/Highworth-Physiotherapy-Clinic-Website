import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { SkipToMainContent } from 'components/SkipToMainContent';
import 'styles/_global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider disableTransitionOnChange>
      <SkipToMainContent />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
