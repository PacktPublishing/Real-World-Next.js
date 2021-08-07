import Image from 'next/image';
import { Avatar, Box, Button, Flex, Grid, Text, VStack } from '@chakra-ui/react';
import dayjs from 'dayjs';

export async function getServerSideProps({ params }) {
  const { username } = params;

  const dataReq = await fetch('https://chapter-9-api.rwnjs.workers.dev');
  const data = await dataReq.json();
  const userData = data.find((user) => user.name.username === username);

  return {
    props: {
      user: userData,
    },
  };
}

export default function UserPage({ user }) {
  return (
    <Box w="full" mt="12" boxShadow="xl">
      <Box pos="relative" w="full" h="56">
        <Image src={user.images.cover} layout="fill" objectFit="cover" objectPosition="center" />
        <Flex pos="absolute" w="full" h="full" alignItems="flex-end" bgColor="blackAlpha.500">
          <Flex p="8">
            <Avatar pos="relative" size="lg" mr="4" boxShadow="dark-lg">
              <Image
                src={user.images.profile}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Avatar>
            <>
              <Text
                fontSize="4xl"
                fontWeight="bold"
                textColor="gray.100"
                textShadow="dark-lg"
                as="h1">
                {user.name.first} {user.name.last}
              </Text>
            </>
          </Flex>
        </Flex>
      </Box>
      <Grid mt="2" p="8" gridTemplateColumns="1fr 1fr" gap="8">
        <Box>
          <Text fontSize="3xl" mb="4">
            About me
          </Text>
          <Text> {user.description} </Text>
          <Button mt="4" colorScheme="linkedin" disabled={!user.work.openToWork}>
            {user.work.openToWork ? 'Hire me' : 'Not open to work'}
          </Button>
        </Box>
        <Box>
          <Text fontSize="3xl" mb="4">
            Resume
          </Text>
          <VStack alignItems="flex-start" spacing="4">
            {user.work.resume.map((job) => (
              <Flex key={job.company}>
                <Avatar pos="relative" mr="2" size="lg">
                  <Image src={job.image} layout="fill" objectFit="cover" objectPosition="center" />
                </Avatar>
                <Box>
                  <Text fontWeight="bold"> {job.company} </Text>
                  <Text> {job.title} </Text>
                  <Text fontSize="sm" textColor="gray.500">
                    From&nbsp;
                    <Text as="span" fontWeight="bold">
                      {dayjs(job.date.start).format('D MMM YYYY')}
                    </Text>
                    &nbsp;to&nbsp;
                    <Text as="span" fontWeight="bold">
                      {dayjs(job.date.end).format('D MMM YYYY')}
                    </Text>
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
}
