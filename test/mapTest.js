const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4,5,6];

describe("#map", () => {
 it("returns [ 'g', 'c', 't', 'm', 't' ] for (words, word => word[0])", () => {
  assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
 });
 it("returns [ 1, 4, 9, 16, 25, 36 ] for (nums, num => num ** 2)", () => {
  assert.deepEqual(map(nums, num => num ** 2), [ 1, 4, 9, 16, 25, 36 ])
 });
 it("returns [ 'grounds', 'controls', 'tos', 'majors', 'toms' ] for (words, word => word += 's')", () => {
  assert.deepEqual(map(words, word => word += 's'), [ 'grounds', 'controls', 'tos', 'majors', 'toms' ])
 });
});
