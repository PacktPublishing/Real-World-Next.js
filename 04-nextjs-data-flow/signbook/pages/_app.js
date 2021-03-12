import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState || {});

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
