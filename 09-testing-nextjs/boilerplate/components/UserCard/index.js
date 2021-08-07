import Image from 'next/image';
import Link from 'next/link';
import { Box, Text, Divider, Avatar, Flex, Badge } from '@chakra-ui/react';

export default function UserCard(user) {
  const currentPosition = user.work.resume[0];

  return (
    <Link href={`/u/${user.name.username}`} passHref>
      <Box rounded="sm" boxShadow="xl" as="a" pb="2">
        <Box pos="relative" w="full" h="24">
          <Image
            key={user.id}
            src={user.images.cover}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <Flex
            pos="absolute"
            w="full"
            h="full"
            bgColor="blackAlpha.500"
            justifyContent="center"
            alignItems="flex-end">
            {user.work.openToWork && (
              <Badge pos="absolute" top="4" right="4" colorScheme="whatsapp">
                Open to work
              </Badge>
            )}
            <Avatar pos="relative" size="lg" transform="translateY(26px)" boxShadow="lg">
              <Image
                src={user.images.profile}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Avatar>
          </Flex>
        </Box>
        <Box p="2" pt="10">
          <Text fontWeight="bold" textColor="linkedin.900">
            {user.name.first} {user.name.last}
          </Text>
          <Text fontSize="small" textColor="gray.600">
            {currentPosition.title} at {currentPosition.company}
          </Text>
          <Divider mt="2" mb="2" />
          <Text fontSize="small">{user.description}</Text>
        </Box>
      </Box>
    </Link>
  );
}
