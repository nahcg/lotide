const eqArrays = function(input, input2) {
  var result = true;
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

const assertArraysEqual = function(input, input2) {
  if (eqArrays(input, input2)) {
    return `Arrays are the same: [${input}] === [${input2}]`;
  } else {
    return `Arrays are not the same: ${input} !== ${input2}]`;
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    return array.slice(Math.floor(array.length / 2), Math.floor(array.length / 2) + 1);
  } else {
    return array.slice(Math.floor(array.length / 2) - 1, Math.floor(array.length / 2) + 1);
  }
};


console.log(assertArraysEqual(middle([1]), [])) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]