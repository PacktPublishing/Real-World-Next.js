import PostHead from '../../components/PostHead';
import posts from '../../data/posts';

export function getServerSideProps({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
}

function Post({ post }) {
  return (
    <div>
      <PostHead {...post} />
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
    </div>
  );
}

export default Post;
