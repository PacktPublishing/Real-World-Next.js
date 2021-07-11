import Link from 'next/link';
import {
  Avatar,
  Box,
  Center,
  Text,
  Image,
  Button,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import users from '../../data/users';

export function getStaticPaths() {
  const paths = users.map((user) => ({
    params: {
      username: user.username,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { username } = params;

  return {
    props: {
      user: users.find((user) => user.username === username),
    },
  };
}

function UserPage({ user }) {
  return (
    <Center marginTop={['0', '0', '8']} boxShadow="lg" minHeight="fit-content">
      <Box>
        <Box position="relative">
          <Image src={user.cover_image} width="fit-content" height="250px" objectFit="cover" />
          <Flex
            alignItems="flex-end"
            position="absolute"
            top="0"
            left="0"
            backgroundColor={useColorModeValue('blackAlpha.400', 'blackAlpha.600')}
            width="100%"
            height="100%"
            padding="8"
            color="white">
            <Avatar size="lg" src={user.avatar} />
            <Box marginLeft="6">
              <Text as="h1" fontSize="xx-large" fontWeight="bold">
                {user.first_name} {user.last_name}
              </Text>
              <Text as="p" fontSize="large" lineHeight="1.5">
                {user.job_title}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box
          maxW="container.xl"
          margin="auto"
          padding="8"
          backgroundColor={useColorModeValue('white', 'gray.700')}>
          <Text as="p">{user.description}</Text>
          <Link href="/" passHref>
            <Button marginTop="8" colorScheme="whatsapp" as="a">
              Back to all users
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}

export default UserPage;
