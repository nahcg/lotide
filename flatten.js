const assertArraysEqual = function(input, input2) {
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
  if (result === true) {
    return "arrays are equal";
  } else {
    return "arrays are not equal";
  }
};

const flatten = function(inputarray) {
  let result = [];
  for (const item of inputarray) {
    if (Array.isArray(item) === true) {
      for (const i of item) {
        result.push(i);
      }
    } else {
      result.push(item);
    }
  }
  return result;
};

console.log(flatten([1, 2, ['thing', 'thing2'], 5, [7, 10], 11]));
console.log(assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6])); // arrays are equal