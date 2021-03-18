import { createContext } from 'react';

const ShoppingContext = createContext({
  items: {},
  setItems: () => null,
});

export default ShoppingContext;
