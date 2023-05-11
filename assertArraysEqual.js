const eqArrays = require('./eqArrays');

const assertArraysEqual = function(input, input2) {
  if (eqArrays(input, input2)) {
    return `Arrays are the same: [${input}] === [${input2}]`;
  } else {
    return `Arrays are not the same: ${input} !== ${input2}]`;
  }
};

module.exports = assertArraysEqual;