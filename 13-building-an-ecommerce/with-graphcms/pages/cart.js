import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import graphql from '../lib/graphql';
import getProductsById from '../lib/graphql/queries/getProductsById';
import cartContext from '../lib/context/Cart';
import loadStripe from '../lib/stripe';

export default function Cart() {
  const { items } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const hasProducts = Object.keys(items).length;

  useEffect(() => {
    if (!hasProducts) return;

    graphql
      .request(getProductsById, {
        ids: Object.keys(items),
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.error(err));
  }, [JSON.stringify(products)]);

  function getTotal() {
    if (!products.length) return 0;

    return Object.keys(items)
      .map((id) => products.find((product) => product.id === id).price * (items[id] / 100))
      .reduce((x, y) => x + y)
      .toFixed(2);
  }

  async function handlePayment() {
    const stripe = await loadStripe();

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        success_url: `${window.location.origin}/success`,
      }),
    });

    const { session } = await res.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  }

  return (
    <Box rounded="xl" boxShadow="2xl" w="container.lg" p="16" bgColor="white">
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Cart
      </Text>
      <Divider my="10" />
      <Box>
        {!hasProducts ? (
          <Text>The cart is empty.</Text>
        ) : (
          <>
            {products.map((product) => (
              <Flex key={product.id} justifyContent="space-between" mb="4">
                <Box>
                  <Link href={`/product/${product.slug}`} passHref>
                    <Text
                      as="a"
                      fontWeight="bold"
                      _hover={{ textDecoration: 'underline', color: 'blue.500' }}>
                      {product.name}
                      <Text as="span" color="gray.500">
                        {' '}
                        x{items[product.id]}
                      </Text>
                    </Text>
                  </Link>
                </Box>
                <Box>€{(items[product.id] * (product.price / 100)).toFixed(2)}</Box>
              </Flex>
            ))}
            <Divider my="10" />
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="xl" fontWeight="bold">
                Total: €{getTotal()}
              </Text>
              <Button colorScheme="blue" onClick={handlePayment}>
                Pay now
              </Button>
            </Flex>
          </>
        )}
      </Box>
    </Box>
  );
}
