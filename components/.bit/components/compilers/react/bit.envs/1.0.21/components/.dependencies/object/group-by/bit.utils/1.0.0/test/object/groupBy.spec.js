import chai from 'chai';
import groupBy from '../../src/object/groupBy';
const should = chai.should();

describe('group-by', () => {
  it('the groupBy function should exist', () => {
    return should.exist(groupBy);
  });

  it('should group by the floored value (4, 6)', () => {
    groupBy([6.1, 4.2, 6.3], Math.floor).should.be.deep.equal({ '4': [4.2], '6': [6.1, 6.3] });
  });
});
