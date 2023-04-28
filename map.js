const words = ["ground", "control", "to", "major", "tom"];

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

const assertArraysEqual = function(input, input2) {
  if (eqArrays(input, input2)) {
    return `Arrays are the same: [${input}] === [${input2}]`;
  } else {
    return `Arrays are not the same: ${input} !== ${input2}]`;
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));

const results2 = map(words, word => word += 's');
console.log(assertArraysEqual(results2, [ 'grounds', 'controls', 'tos', 'majors', 'toms' ]));

const nums = [1,2,3,4,5,6];
const results3 = map(nums, num => num ** 2);
console.log(assertArraysEqual(results3, [ 1, 4, 9, 16, 25, 36 ]));