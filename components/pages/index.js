import Navbar from '../components/organisms/Navbar';

export default function Home() {
  return (
    <>
      <Navbar
        items={[
          {
            link: '/',
            text: 'home',
          },
          {
            link: '/',
            text: 'about',
          },
          {
            link: '/',
            text: 'buy',
          },
        ]}
      />
    </>
  );
}
