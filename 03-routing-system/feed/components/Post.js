import Link from 'next/link';

function Post(data) {
  return (
    <div className="w-96 mb-5 rounded-bl-xl rounded-br-xl bg-gray-100 m-auto">
      <img src={data.image} alt={`Shot by ${data.author.name}`} />
      <div className="p-3">
        Picture by{' '}
        <Link href={`/user/${data.author.username}`}>
          <a className="text-blue-700">{data.author.name}</a>
        </Link>{' '}
        on{' '}
        <a
          className="text-blue-700"
          href={`https://unsplash.com/${data.author.username}`}
          target="_blank"
          rel="noreferrer">
          Unsplash
        </a>
      </div>
    </div>
  );
}

export default Post;
