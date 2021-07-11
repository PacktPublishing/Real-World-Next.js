import { ThemeProvider } from 'next-themes';
import TopBar from '../components/TopBar';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-gray-900 w-full min-h-screen">
        <TopBar />
        <div className="w-9/12 m-auto pt-16 pb-16">
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
