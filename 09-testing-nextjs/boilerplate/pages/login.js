import { useState } from 'react';
import { Box, Button, Input, VStack, Text, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import withSession from '../lib/withSession';

export const getServerSideProps = withSession(({ req }) => {
  const user = req.session.get('user');

  if (user !== undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }

  return {
    props: {},
  };
});

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = () => {
    setError(false);
    setLoading(true);
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then(({ success }) => {
        if (!success) setError(true);
        else window.location.href = '/my-profile';
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box w="container.sm" m="auto" mt="16" p="6" boxShadow="lg">
      <VStack spacing="4">
        <Text fontWeight="bold" fontSize="lg" textColor="gray.600">
          Login
        </Text>
        <Input
          placeholder="Username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Input
          placeholder="Password"
          value={password}
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Invalid credentials</AlertTitle>
          </Alert>
        )}
        <Button
          colorScheme="purple"
          disabled={!username || !password}
          onClick={onSubmit}
          isLoading={loading}
          isFullWidth>
          Login
        </Button>
      </VStack>
    </Box>
  );
}
