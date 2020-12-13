import fs from 'fs';

export const getComponentAsString = (componentName) =>
  fs.readSync(`../components/${componentName}.js`);
