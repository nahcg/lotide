const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => { 
  it("returns ['something', 4, 'thing'] for [1, 'something', 4, 'thing']", () => {
    assert.deepEqual(tail([1,'something', 4, 'thing']), ['something', 4, 'thing']);
  });
  it("returns [1, 3, 5] for [0, 1, 3, 5]", () => {
    assert.deepEqual(tail([0, 1, 3, 5]), [1, 3, 5]);
  });
  it("returns ['thing2', 'thing3', 4] for ['thing1', 'thing2', 'thing3', 4]", () => {
    assert.deepEqual(tail(['thing1', 'thing2', 'thing3', 4]), ['thing2', 'thing3', 4])
  });
});
