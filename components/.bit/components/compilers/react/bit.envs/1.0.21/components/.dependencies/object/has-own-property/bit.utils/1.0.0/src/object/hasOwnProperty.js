/** @flow */

/**
 * Determines whether the object has the specified property.
 * @name hasOwnProperty
 * @param {object} obj
 * @param {string|number} prop property to test
 * @returns {boolean}
 * @example
 *  hasOwnProperty({foo: 'bar'}, 'foo') // => true
 *  hasOwnProperty({foo: 'bar'}, 'bar') // => false
 */
export default function hasOwnProperty(obj: {}, prop: string|number): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};