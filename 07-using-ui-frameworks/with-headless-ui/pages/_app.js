import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 w-full min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
