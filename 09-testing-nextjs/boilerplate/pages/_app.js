import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
