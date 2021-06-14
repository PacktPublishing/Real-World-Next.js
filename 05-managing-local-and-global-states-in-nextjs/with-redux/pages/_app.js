import Head from 'next/head';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <Provider store={store}>
        <Navbar />
        <div className="w-9/12 m-auto pt-10">
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  );
}

export default MyApp;
