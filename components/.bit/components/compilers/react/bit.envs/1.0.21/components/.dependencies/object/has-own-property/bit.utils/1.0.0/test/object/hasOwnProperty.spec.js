import { expect } from 'chai';

import hasOwnProperty from '../../src/object/hasOwnProperty';
const mock = { foo: 'bar' };

describe('#hasOwnProperty()', () => {
  it('should return false as given object do not contain key `bar`', () => {
    expect(hasOwnProperty(mock, 'bar')).to.equal(false);
  });

  it('should return true as given object contains key `foo`', () => {
    expect(hasOwnProperty(mock, 'foo')).to.equal(true);
  });

  it('should return false if key is null', () => {
    expect(hasOwnProperty(mock, null)).to.equal(false);
  });
});