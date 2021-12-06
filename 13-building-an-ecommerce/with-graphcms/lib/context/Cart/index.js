import { createContext } from 'react';

const CartContext = createContext({
  items: {},
  setItems: () => {},
});

export default CartContext;
