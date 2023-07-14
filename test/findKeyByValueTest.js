const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  reality: "The Circle"
};

//using chai's strictEqual to compare strings
describe("#findKeyByValue", () => {
  it("returns 'drama' for 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });
  it("returns undefined for 'That 70's Show'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined)
  });
  it("returns 'reality' for 'The Circle'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Circle"), "reality")
  });
});

