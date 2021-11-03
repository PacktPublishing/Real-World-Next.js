import { useUser } from '@auth0/nextjs-auth0';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    return (
      <div>
        <h1> Welcome back! </h1>
        <p> You're logged in with the following email address: {user.email}!</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return (
    <div>
      <h1> Welcome, stranger! </h1>
      <p>
        Please <a href="/api/auth/login">Login</a>.
      </p>
    </div>
  );
}
