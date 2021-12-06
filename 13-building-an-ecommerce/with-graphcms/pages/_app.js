import { useState } from 'react';
import { Box, Flex, ChakraProvider } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import CartContext from '../lib/context/Cart';

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState({});

  return (
    <ChakraProvider>
      <CartContext.Provider value={{ items, setItems }}>
        <Flex w="full" minH="100vh" bgColor="gray.100">
          <NavBar />
          <Box maxW="70vw" m="auto">
            <Component {...pageProps} />
          </Box>
        </Flex>
      </CartContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
