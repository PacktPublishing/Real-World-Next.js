import Post from '../../components/Post';
import posts from '../../data/feed';

export function getServerSideProps({ params }) {
  const { username } = params;
  const userPosts = posts.filter((post) => post.author.username === username);

  return {
    props: {
      username,
      userPosts,
    },
  };
}

function User(props) {
  return (
    <div>
      <h1 className="text-2xl font-bold"> Posts by {props.username} </h1>
      <div>
        {props.userPosts.map((data) => (
          <Post key={data.image} {...data} />
        ))}
      </div>
    </div>
  );
}

export default User;
