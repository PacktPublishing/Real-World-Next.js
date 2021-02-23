const users = require('../data');

exports.handler = async ({ headers, pathParameters }) => {
  if (headers?.authorization !== 'realworldnextjs') {
    return {
      statusCode: 401,
      body: 'Unauthorized',
    };
  }

  const username = pathParameters?.username;
  const user = users.filter((user) => username === user.username)?.shift();

  if (!user) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: 'User not found',
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};
