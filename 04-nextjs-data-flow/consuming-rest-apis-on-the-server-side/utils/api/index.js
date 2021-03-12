import axios from 'axios';

const api = (path, authorize) => {
  const headers = authorize ? { authorization: 'realworldnextjs' } : null;

  return axios.create({
    baseURL: 'https://rwnjs.com',
    headers,
  });
};

export default api;
