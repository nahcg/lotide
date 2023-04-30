const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `Assertion Failed: ${actual} !== ${expected}`;
  }
};

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

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays(['a', 'b', 'c'], ['a', 'b', 'c']), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false));
console.log(assertEqual(eqArrays(['1', 2, 3], [1, 2, 3]), false));
console.log(assertEqual(eqArrays([1, 2, 3, 'thing'], [1, 2, 3, 'thing2']), false));