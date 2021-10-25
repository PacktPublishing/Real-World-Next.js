import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/hooks/auth';
import styles from '../styles/app.module.css';

async function handleLogin(email, password) {
  const resp = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await resp.json();

  if (data.success) {
    return;
  }

  throw new Error('Wrong email or password');
}

export default function Home() {
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);
  const { loading, loggedIn } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    setLoginError(null);
    handleLogin(email.value, password.value)
      .then(() => router.push('/protected-route'))
      .catch((err) => setLoginError(err.message));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && loggedIn) {
    router.push('/protected-route');
    return null;
  }

  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>

        {loginError && <div className={styles.formError}> {loginError} </div>}
      </form>
    </div>
  );
}
