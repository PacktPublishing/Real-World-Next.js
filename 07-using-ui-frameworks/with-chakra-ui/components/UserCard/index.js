import Link from 'next/link';
import { Box, Text, Avatar, Center, VStack, useColorModeValue } from '@chakra-ui/react';

function UserCard(props) {
  return (
    <Link href={`/user/${props.username}`} passHref>
      <a>
        <VStack
          spacing="4"
          borderRadius="md"
          boxShadow="xl"
          padding="5"
          backgroundColor={useColorModeValue('gray.50', 'gray.700')}>
          <Center>
            <Avatar size="lg" src={props.avatar} />
          </Center>
          <Center>
            <Box textAlign="center">
              <Text fontWeight="bold" fontSize="xl">
                {props.first_name} {props.last_name}
              </Text>
              <Text fontSize="xs"> {props.job_title}</Text>
            </Box>
          </Center>
        </VStack>
      </a>
    </Link>
  );
}

export default UserCard;
