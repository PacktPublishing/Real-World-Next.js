import { createContext } from 'react';

const ShoppingCartContext = createContext({
  items: {},
  setItems: () => null,
});

export default ShoppingCartContext;
