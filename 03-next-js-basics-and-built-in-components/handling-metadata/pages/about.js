import Head from 'next/head';
import Link from 'next/link';
import Widget from '../components/Widget';

function AboutPage() {
  return (
    <>
      <Head>
        <title> About this website </title>
      </Head>
      <div>
        <Link href="/" passHref>
          <a>Back to home</a>
        </Link>
      </div>
      <div>
        <Widget pageName="about" />
      </div>
    </>
  );
}

export default AboutPage;
