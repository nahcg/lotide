
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual([1,2,3], [1,2,'something']));
console.log(assertArraysEqual([1,2,3], [1,2,3]));
