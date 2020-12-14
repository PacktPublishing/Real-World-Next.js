import { useEffect, useState } from 'react';
import Highlight from '../components/Highlight';
import styles from '../styles/Home.module.css';

const codeExample = `import { useEffect } from 'react';
import Head from 'next/head';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

function Highlight({ code, language = 'js' }) {

  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.initHighlighting();
  }, []);

  return (
    <>
      <Head>
        <link rel='stylesheet' href='/highlight.css' />
      </Head>
      <pre>
        <code className={language}>
          {code}
        </code>
      </pre>
    </>
  )
}

export default Highlight;
`;

function UseEffectPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <h1> React.useEffect hook </h1>
        <p className={styles.pageDescription}>
          Highlight.js uses the global <code>document</code> keyword for highlighting code. <br />
          Using the <code>React.useEffect</code> hook will make it highlight the desired content on
          the client side, once the component has been mounted.
        </p>
        {isClient && <Highlight code={codeExample} language="js" />}
      </main>
    </>
  );
}

export default UseEffectPage;
