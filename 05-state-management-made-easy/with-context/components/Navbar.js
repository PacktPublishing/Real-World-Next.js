import { useContext } from 'react';
import Link from 'next/link';
import cartContext from '../components/context/cartContext';

function Navbar() {
  const { items } = useContext(cartContext);
  const totalItemsAmount = Object.values(items).reduce((x, y) => x + y, 0);

  return (
    <div className="w-full bg-purple-600 p-4 text-white">
      <div className="w-9/12 m-auto flex justify-between">
        <div className="font-bold">
          <Link href="/" passHref>
            <a> My e-commerce </a>
          </Link>
        </div>
        <div className="font-bold underline">
          <Link href="/cart" passHref>
            <a>{totalItemsAmount} items in cart</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
