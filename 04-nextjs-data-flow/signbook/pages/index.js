import { useQuery } from '@apollo/client';
import GET_LATEST_SIGNS from '../lib/apollo/queries/getLatestSigns';
import Sign from '../components/Sign';
import Loading from '../components/Loading';

function HomePage() {
  const { loading, error, data } = useQuery(GET_LATEST_SIGNS);

  if (loading) {
    return <Loading />;
  }

  console.log(error);

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl mb-10">Real-World Next.js signbook</h1>
      <div>
        {data.signs.map((sign) => (
          <Sign key={sign.id} {...sign} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
