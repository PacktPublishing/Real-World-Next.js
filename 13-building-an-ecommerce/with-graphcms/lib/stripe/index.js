import { loadStripe } from '@stripe/stripe-js';

const key = process.env.NEXT_PUBLIC_STRIPE_SHARABLE_KEY;

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

export default getStripe;
