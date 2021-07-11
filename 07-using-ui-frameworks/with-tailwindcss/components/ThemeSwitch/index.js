import { useTheme } from 'next-themes';

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const dark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(dark ? 'light' : 'dark');
  };

  if (typeof window === 'undefined') return null;

  return (
    <button
      onClick={toggleTheme}
      className="dark:bg-green-900 dark:bg-opacity-20 dark:text-gray-50 bg-green-100 text-gray-500 pl-2 pr-2 rounded-md text-xs p-1">
      Toggle theme
    </button>
  );
}

export default ThemeSwitch;
