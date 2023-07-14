const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
const eqArrays = require('../eqArrays');

// use chai's deepEqual to compare objects
describe("#eqObjects", () => {
  //same objects
  it("returns true for eqObjects({ color: 'red', size: 'medium' }, { size: 'medium', color: 'red' })", () => {
    assert.deepEqual(eqObjects({ color: 'red', size: 'medium' }, { size: 'medium', color: 'red' }), true)
  });
  //different lengths
  it("returns false for eqObjects({ size: 'medium', color: 'red', sleeveLength: 'long' }, { size: 'medium', color: 'red' })", () => {
    assert.deepEqual(eqObjects({ color: 'red', size: 'medium' }, { size: 'medium', color: 'red', sleeveLength: 'long' }), false)
  });
  //different keys
  it("returns false for eqObjects({ size: 'medium', somethingelse: 'red' }, { size: 'medium', color: 'red' })", () => {
    assert.deepEqual(eqObjects({ size: "medium", somethingelse: "red" }, { color: 'red', size: 'medium' }), false)
  });
  // different values (primitive)
  it("returns false for eqObjects({ size: 'medium', color: 'black' }, { size: 'medium', color: 'red' })", () => {
    assert.deepEqual(eqObjects({ size: "medium", color: "black" }, { color: 'red', size: 'medium' }), false)
  });
  // different values (array)
  it("returns false for eqObjects({ size: 'medium', color: ['red', 'black'] }, { size: 'medium', color: ['blue', 'black'] })", () => {
    assert.deepEqual(eqObjects({ size: "medium", color: ["red", "black"] }, { size: "medium", color: ["blue", "black"] }), false)
  });
  // same values (array)
  it("returns true for eqObjects({ color: ['red', 'blue'], size: 'medium' }, { size: 'medium', color: ['red', 'blue'] })", () => {
    assert.deepEqual(eqObjects({ color: ["red", "blue"], size: "medium" }, { size: "medium", color: ["red", "blue"] }), true)
  });
});