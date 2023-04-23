const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(input) {
  return input.shift();
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(['something', 'thing2', 10]), 'something');
assertEqual(head([10, 'thing2', 100]), 'thing');