import { withIronSession } from 'next-iron-session';

async function handler(req, res) {
  const user = req.session.get('user');

  return res.json({
    loggedIn: !!user,
    user,
  });
}

export default withIronSession(handler, {
  // Never commit this data! Use environment variables instead.
  // This is just an example.
  password: 'hsabMv3<F#@B&[cd!Z@u}dZMNZu,W:mH',
  cookieName: 'chapter9cookie',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
