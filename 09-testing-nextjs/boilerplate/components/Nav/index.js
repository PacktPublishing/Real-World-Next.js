import Link from 'next/link';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import useUser from '../../hooks/useUser';

export default function Nav() {
  const { user } = useUser();
  const isLoggedIn = user?.loggedIn;

  return (
    <Box w="full" p="2" bgColor="purple.500">
      <Flex w="container.xl" margin="auto" justifyContent="space-between" alignItems="center">
        <Link href="/" passHref>
          <Flex as="a" alignItems="flex-end">
            <Image src="/icons/handshake.png" w="10" mr="2" />
            <Text fontSize="2xl" textColor="gray.100" fontWeight="bold">
              Coworkers
            </Text>
          </Flex>
        </Link>
        <Box>
          {!isLoggedIn && (
            <Link href="/login">
              <Button size="sm" colorScheme="whiteAlpha">
                Login
              </Button>
            </Link>
          )}
          {isLoggedIn && (
            <Box>
              <Link href="/my-profile">
                <Button size="sm" colorScheme="whiteAlpha" mr="2">
                  My Profile
                </Button>
              </Link>
              <Link href="/api/logout">
                <Button size="sm" variant="outline" colorScheme="whiteAlpha" mr="2">
                  Logout
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
