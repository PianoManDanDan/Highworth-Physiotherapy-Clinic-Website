import Head from 'next/head';
import Image from 'next/image';

export const PageNotFound = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Oops... | Highworth Physiotherapy Clinic</title>
      </Head>
      <main id="main-content">
        <Image
          src='/assets/men-at-work.jpg'
          alt='Construction workers building a spine'
          height={448}
          width={336}
        />
        <h1>Oops...</h1>
        <p>
          It looks like we can't find the page you are looking for. Please try 
          navigating to a different page.
          </p>
      </main>
    </>
  );
}

export default PageNotFound;
