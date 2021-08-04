import { Box, Image } from '@chakra-ui/react';

export default function Nav() {
  return (
    <Box w="full" p="2" bgColor="linkedin.700">
      <Box w="container.xl" margin="auto">
        <Image src="/icons/suitcase.png" w="10" />
      </Box>
    </Box>
  );
}
