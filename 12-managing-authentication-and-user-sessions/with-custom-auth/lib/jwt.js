import jwt from 'jsonwebtoken';

const JWT_SECRET = 'my_jwt_password';

export function encode(payload) {
  return jwt.sign(payload, JWT_SECRET);
}

export function decode(token) {
  return jwt.verify(token, JWT_SECRET);
}
