import { Box, ChakraProvider } from '@chakra-ui/react';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Box w="container.xl" m="auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
