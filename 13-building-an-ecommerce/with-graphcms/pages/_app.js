import { Box, Flex, ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex w="full" minH="100vh" bgColor="gray.100">
        <Box maxW="70vw" m="auto">
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
