import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Client-Side rendering strategies with Next.js</h1>

          <div className={styles.grid}>
            <Link href="/use-effect">
              <div className={styles.card}>
                <h3>useEffect &rarr;</h3>
                <p>
                  Learn how <code>useEffect</code> can help you with rendering your code on
                  client-side only
                </p>
              </div>
            </Link>
            <Link href="/process-browser">
              <div className={styles.card}>
                <h3>process.browser &rarr;</h3>
                <p>
                  Learn how <code>process.browser</code> can help you with rendering your code on
                  client-side only
                </p>
              </div>
            </Link>
            <Link href="/dynamic-component">
              <div className={styles.card}>
                <h3>dynamic component &rarr;</h3>
                <p>
                  Learn how <code>process.browser</code> can help you with rendering your code on
                  client-side only
                </p>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
