// function returns assertion pass or fail if given variable equals expected variable, does not work for arrays or objects
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertEqual;
