const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  let input2 = input;
  return input2.slice(1, input.length);
};

// Test Case: Check the original array
let words = ['test', 'test', 'test'];
tail(words);
assertEqual(words.length, 3);

// Test tails.js
const result = tail(["thing1", "thing2", "thing3"]);
assertEqual(result.length, 2);
assertEqual(result[0], "thing2");
assertEqual(result[1], "thing3");
const result2 = tail([1,2,3,4]);
assertEqual(result2.length, 3);
assertEqual(result2[0], 2);
assertEqual(result2[1], 3);
assertEqual(result2[2], 4);
