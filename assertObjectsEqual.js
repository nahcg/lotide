// function that compares if two arrays are equal
const eqArrays = function(input, input2) {
  let result = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input2[i]) {
      result = false;
    } else if (input[i] === input2[i] && result === false) {
      result = false;
    } else if (input[i] === input2[i]) {
      result = true;
    }
  }
  return result;
};

// function that compares if two objects are equal
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  //check if key lengths are the same
  if (keys1.length !== keys2.length) {
    return false;
  } else {
  // check if values are the same
    for (const key of keys1) {
      // check if values are an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        } else {
          return true;
        }
      } else {
        // if values not arrays
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

// asserts if two objects are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return `Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

// tests for assertObjectEqual function
console.log(assertObjectsEqual({a: 'string', b: ['a', 2,'c']}, {a: 'string', b: ['a', 2, 'c']}));

console.log(assertObjectsEqual({a: 2, b: ['a', 2,'c']}, {a: 1, b: ['a', 2, 'c']}));

console.log(assertObjectsEqual({a: 2, b: ['a', 2,'c']}, {a: 2, b: ['a', 2, 'd']}));