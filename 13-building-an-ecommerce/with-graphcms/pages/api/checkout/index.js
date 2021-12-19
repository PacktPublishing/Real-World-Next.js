import Stripe from 'stripe';
import graphql from '../../../lib/graphql';
import getProductsDetailsById from '../../../lib/graphql/queries/getProductDetailsById';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const shipping_address_collection = {
  allowed_countries: ['IT', 'US'],
};

export const shipping_options = [
  {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 0,
        currency: 'EUR',
      },
      display_name: 'Free Shipping',
      delivery_estimate: {
        minimum: {
          unit: 'business_day',
          value: 3,
        },
        maximum: {
          unit: 'business_day',
          value: 5,
        },
      },
    },
  },
  {
    shipping_rate_data: {
      type: 'fixed_amount',
      fixed_amount: {
        amount: 499,
        currency: 'EUR',
      },
      display_name: 'Next day air',
      delivery_estimate: {
        minimum: {
          unit: 'business_day',
          value: 1,
        },
        maximum: {
          unit: 'business_day',
          value: 1,
        },
      },
    },
  },
];

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
    payment_method_types: ['card', 'sepa_debit'],
    shipping_address_collection,
    shipping_options,
    success_url: `${process.env.URL}/success`,
    cancel_url: `${process.env.URL}/cancel`,
  });

  res.status(201).json({ session });
}
