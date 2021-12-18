import { stripe } from '../../../lib/stripe';
import graphql from '../../../lib/graphql';
import getProductsDetailsById from '../../../lib/graphql/queries/getProductDetailsById';

export default async function handler(req, res) {
  const { items } = req.body;

  const { products } = await graphql.request(getProductsDetailsById, {
    ids: Object.keys(items),
  });

  const line_items = products.map((product) => ({
    adjustable_quantity: {
      enabled: true,
      minimum: 1,
    },
    price_data: {
      currency: 'EUR',
      product_data: {
        name: product.name,
        images: product.images.map((img) => img.url),
      },
      unit_amount: product.price,
    },
    quantity: items[product.id],
  }));

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items,
    payment_method_types: ['card'],
    success_url: `${process.env.URL}/success`,
    cancel_url: `${process.env.URL}/cancel`,
  });

  res.status(201).json({ session });
}
