import BreadCrumbs from '../components/BreadCrumbs';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BreadCrumbs />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
