import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => null,
});

export default ThemeContext;
