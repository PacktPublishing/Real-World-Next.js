import feed from '../data/feed';
import Post from '../components/Post';

function Home() {
  return (
    <div className="w-3/4 m-auto p-10">
      {feed.map((data) => (
        <Post key={data.image} {...data} />
      ))}
    </div>
  );
}

export default Home;
