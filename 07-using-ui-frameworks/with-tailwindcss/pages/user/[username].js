import Link from 'next/link';
import users from '../../data/users';

export function getStaticPaths() {
  const paths = users.map((user) => ({
    params: {
      username: user.username,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { username } = params;

  return {
    props: {
      user: users.find((user) => user.username === username),
    },
  };
}

function UserPage({ user }) {
  return (
    <div className="pt-0 sm:pt-16">
      <div className="dark:bg-gray-800 text-white w-12/12 shadow-lg sm:w-9/12 sm:m-auto">
        <div className="relative sm:w-full">
          <img
            src={user.cover_image}
            alt={user.username}
            className="w-full h-96 object-cover object-center"
          />
          <div className="bg-gray-800 bg-opacity-50 absolute flex items-end	w-full h-full top-0 left-0 p-8">
            <img
              src={user.avatar}
              alt={user.username}
              className="bg-gray-300 w-20 rounded-full mr-4"
            />
            <div>
              <h1 className="font-bold text-3xl">
                {user.first_name} {user.last_name}
              </h1>
              <p> {user.job_title} </p>
            </div>
          </div>
        </div>
        <div className="p-8">
          <p className="text-black dark:text-white">{user.description}</p>
          <Link href="/" passHref>
            <button className="dark:bg-green-400 dark:text-gray-800 bg-green-400 text-white font-semibold p-2 rounded-md mt-6">
              Back to all users
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
