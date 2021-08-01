const fastify = require('fastify')();

fastify.register(require('fastify-nextjs')).after(() => {
  fastify.next('/');
  fastify.next('/about');
  fastify.next('/greet/:user');
});

fastify.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
