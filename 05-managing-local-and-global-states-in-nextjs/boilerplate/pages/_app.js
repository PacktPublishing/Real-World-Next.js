import Head from 'next/head';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className="w-9/12 m-auto pt-10">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
