import styles from '../styles/Home.module.css';

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    console.log(email.value, password.value);
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
