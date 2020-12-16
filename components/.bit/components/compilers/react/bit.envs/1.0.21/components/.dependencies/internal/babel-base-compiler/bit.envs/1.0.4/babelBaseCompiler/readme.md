# Base babel compiler

All compilers using babel follow the same algorithm:
1. get babel options from the `.babelrc` file in the compiler directory.
2. compile (`babel.transform`) only certain file types.
3. Return all component files as dist files - both those that were compiled and those that weren't.

Therefore, the base compiler expects the following arguments:
1. `files` - files array sent by bit to compiler.
2. `distPath` - dist path sent by bit compiler.
3. `compilerPath` - path of the concrete compiler.
4. `compiledFileTypes` - an array of file types to compile.

## Example

Here's an example for a compiler that uses the `babel-base-compiler`:

```js
import baseCompile from '@bit/bit.envs.utils.babel-base-compiler';

const compiledFileTypes = ['js', 'jsx', 'ts'];

const compile = (files, distPath) => {
  return baseCompile(files, distPath, __dirname, compiledFileTypes);
}

export default compile;
```
