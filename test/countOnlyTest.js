//require assert and countOnly function
const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Joe",
  "Agouhanna",
  "Joe",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//using chai's deepequal to compare objects
describe("#countOnly", () => {
  it("returns {Jason: 1, Fang: 2} for countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {"Jason": 1, "Fang": 2});
  });
  it("returns {Joe: 3, Salima: 2, Karl: 1} for countOnly(firstNames, { Jason: false, Karima: false, Joe: true, Anna: false, Salima: true, Karl: true })", () => {
    assert.deepEqual(countOnly(firstNames, { Jason: false, Karima: false, Joe: true, Anna: false, Salima: true, Karl: true }), {Joe: 3, Salima: 2, Karl: 1});
  });
});

