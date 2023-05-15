const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns 'something' for ['something', 'thing2', 10]", () => {
    assert.strictEqual(head(['something', 'thing2', 10]), 'something');
  });
  it("returns 10 for [10, 'thing2', 100]", () => {
    assert.strictEqual(head([10, 'thing2', 100]), 10);
  });
});