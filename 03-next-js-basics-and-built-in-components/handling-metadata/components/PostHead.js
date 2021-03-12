import Head from 'next/head';

function PostMeta(props) {
  return (
    <Head>
      <title> {props.title} </title>
      <meta name="description" content={props.subtitle} />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.subtitle} />
      <meta property="og:image" content={props.image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
    </Head>
  );
}

export default PostMeta;
