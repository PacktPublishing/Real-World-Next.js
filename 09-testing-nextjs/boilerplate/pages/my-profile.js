import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import withSession from '../lib/withSession';

export const getServerSideProps = withSession(({ req }) => {
  const user = req.session.get('user');

  if (typeof user === 'undefined') {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    };
  }

  return {
    props: {
      user,
    },
  };
});

export default function MyProfile({ user }) {
  const currentPosition = user.work.resume[0];

  return (
    <Box w="full" mt="12" boxShadow="xl" p="8">
      <Flex>
        <Box mr="4">
          <Image src={user.images.profile} />
        </Box>
        <Box maxW="container.sm">
          <Text as="h1" fontSize="3xl" fontWeight="bold" textColor="gray.700">
            {user.name.first} {user.name.last}
          </Text>
          <Text as="h2" fontSize="xl" textColor="gray.600">
            {currentPosition.title} at {currentPosition.company}
          </Text>
          <Divider mt="2" mb="2" />
          <Text fontSize="small" textColor="gray.600">
            {user.description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
