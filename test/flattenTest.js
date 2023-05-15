const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  });
  it("returns [1, 2, thing, thing2, 5, 7, 10, 12, 11] for [1, 2, ['thing', 'thing2'], 5, [7, 10, 12], 11]", () => {
    assert.deepEqual(flatten([1, 2, ['thing', 'thing2'], 5, [7, 10, 12], 11]), [1, 2, 'thing', 'thing2', 5, 7, 10, 12, 11])
  });
});
