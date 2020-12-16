import { expect } from 'chai';
import { getBitAddCommand, getDefaultComponent, getFileName } from '../src/build-component';
import { GenericObject } from '../src/compiler-types';

describe('build component functions', function() {
  it('getFileName - should return the correct file name', function() {
    expect(getFileName('src/components/button.tsx')).to.equal('button.tsx');
    expect(getFileName('src/components/button.jsx')).to.equal('button.jsx');
    expect(getFileName('src/components/button.js')).to.equal('button.js');
    expect(getFileName('src/components/button.spec.ts')).to.equal('button.spec.ts');
    expect(getFileName('src/components/assets/data.json')).to.equal('data.json');
  });
  it('getBitAddCommand - should work with default component object', function() {
    const files: Array<string> = Object.keys(getDefaultComponent());
    let compId: string = getFileName(files[0]);
    compId = compId.substring(0, compId.indexOf('.'));
    const command = getBitAddCommand(files, compId);
    expect(command).to.equal(
      'bit add src/comp.tsx src/test.css src/types.d.ts src/try.svg --main src/comp.tsx --id comp --tests ""'
    );
  });
  it('getBitAddCommand - should work with custom component object', function() {
    const component: GenericObject = {
      'src/comp.js': '',
      'src/comp.css': ''
    };
    const files: Array<string> = Object.keys(component);
    let compId: string = getFileName(files[0]);
    compId = compId.substring(0, compId.indexOf('.'));
    const command = getBitAddCommand(files, compId);
    expect(command).to.equal('bit add src/comp.js src/comp.css --main src/comp.js --id comp --tests ""');
  });
  it('getBitAddCommand - should work with custom component object and test files', function() {
    const component: GenericObject = {
      'src/button.tsx': '',
      'src/style.css': '',
      'src/button.spec.ts': '',
      'src/button2.spec.ts': ''
    };
    const files: Array<string> = Object.keys(component);
    let compId: string = getFileName(files[0]);
    compId = compId.substring(0, compId.indexOf('.'));
    const command = getBitAddCommand(files, compId);
    expect(command).to.equal(
      'bit add src/button.tsx src/style.css --main src/button.tsx --id button --tests "src/button.spec.ts,src/button2.spec.ts"'
    );
  });
});
