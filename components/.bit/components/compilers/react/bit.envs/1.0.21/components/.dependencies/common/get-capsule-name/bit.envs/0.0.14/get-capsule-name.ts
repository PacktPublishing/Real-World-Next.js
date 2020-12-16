import path from 'path';
const os = require('os');

export function getCapsuleName(infix: string = '') {
  const uuidHack = `capsule-${infix ? `${infix}-` : ''}${Date.now()
    .toString()
    .slice(-5)}`;
  const targetDir = path.join(os.tmpdir(), 'bit', uuidHack);
  return targetDir;
}
