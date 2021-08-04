import { Box, Grid, Text } from '@chakra-ui/react';
import UserCard from '../components/UserCard';

export async function getServerSideProps() {
  const dataReq = await fetch('https://chapter-9-api.rwnjs.workers.dev');
  const data = await dataReq.json();

  return {
    props: {
      users: data,
    },
  };
}

export default function Home({ users }) {
  const usersList = users;

  return (
    <Box>
      <Text
        fontSize="5xl"
        fontWeight="black"
        textAlign="center"
        mt="12"
        mb="12"
        bgGradient="linear(to-l, cyan.600, yellow.500, red.500)"
        bgClip="text">
        FIND YOUR NEXT CO-WORKER
      </Text>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gap="8">
        {usersList.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </Grid>
    </Box>
  );
}
