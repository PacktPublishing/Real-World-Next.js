import Head from 'next/head';
import BreadCrumbs from '../components/BreadCrumbs';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <BreadCrumbs />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
