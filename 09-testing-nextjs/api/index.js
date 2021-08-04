const data = require('./data.json');

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest() {
  return new Response(JSON.stringify(data), {
    headers: { 'content-type': 'application/json;charset=UTF-8' },
  });
}
