import { withIronSession } from 'next-iron-session';

async function handler(req, res) {
  const { username, password } = req.body;

  // This is just a shallow example; you typically want to use an encrypted username and password from a database or some service.
  if (username !== 'John-Doe' || password !== 'mystrongpassword') {
    res.status(401).json({
      success: false,
      reason: `Invalid credentials`,
    });
    return;
  }

  // You typically want to get the data from the database. That's just a mock.
  req.session.set('user', {
    id: '17c56d2a931c0f7402a4f508affd56939b79263d3cc4315f59eabdca30fb2a8e',
    name: {
      username: 'John-Doe',
      first: 'John',
      last: 'Doe',
    },
    description:
      'Ipsam explicabo eligendi occaecati debitis et saepe eum dicta. Eaque enim ipsum inventore debitis libero aspernatur deserunt quam. A velit provident velit eligendi nostrum ipsam qui. Repellendus fugiat velit sit aperiam placeat fuga doloribus. Placeat ullam minima ducimus temporibus modi aut architecto. Totam voluptates explicabo exercitationem ut quis.',
    work: {
      openToWork: true,
      resume: [
        {
          image: 'http://placeimg.com/640/480/business',
          company: 'Packt Publishing',
          title: 'Author',
          phrase: 'Writing and learning at Packt!',
          date: {
            start: '2020-11-01T11:25:05.174Z',
            end: '2021-11-12T23:11:27.684Z',
          },
        },
      ],
    },
    images: {
      profile: 'https://cdn.fakercloud.com/avatars/oskamaya_128.jpg',
      cover: 'http://placeimg.com/640/480/abstract',
    },
  });
  await req.session.save();

  return res.json({
    success: true,
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
