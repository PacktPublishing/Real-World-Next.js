const users = require('../data');

exports.handler = async () => {
  const filteredFields = users.map((user) => ({
    id: user.id,
    username: user.username,
  }));

  return {
    statusCode: 200,
    body: JSON.stringify(filteredFields)
  }
};
