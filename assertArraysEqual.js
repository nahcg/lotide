// import eqArrays to compare arrays
const eqArrays = require('./eqArrays');

// uses eqArray function to compare arrays , sserts equal if given array equal expected array
const assertArraysEqual = function(input, input2) {
  if (eqArrays(input, input2)) {
    return `Arrays are the same: [${input}] === [${input2}]`;
  } else {
    return `Arrays are not the same: ${input} !== ${input2}]`;
  }
};

// export function to use for mocha tests
module.exports = assertArraysEqual;