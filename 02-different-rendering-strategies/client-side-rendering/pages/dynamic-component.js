import dynamic from 'next/dynamic';
const Highlight = dynamic(() => import('../components/Highlight'), { ssr: false });
import styles from '../styles/Home.module.css';

function DynamicPage() {
  return (
    <div className={styles.main}>
      <Highlight code={`console.log('Hello, world! ')`} language="js" />
    </div>
  );
}

export default DynamicPage;
