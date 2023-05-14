const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true for eqArrays(['a', 'b', 'c'], ['a', 'b', 'c'])", () => {
    assert.deepEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true);
  });
  it("returns false for eqArrays([1, 2, 3], [1, 4, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
  });
  it("returns false for eqArrays(['1', 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays(['1', 2, 3], [1, 2, 3]), false);
  });
  it("returns false for eqArrays([1, 2, 3, 'thing'], [1, 2, 3, 'thing2'])", () => {
    assert.deepEqual(eqArrays([1, 2, 3, 'thing'], [1, 2, 3, 'thing2']), false);
  });
});

