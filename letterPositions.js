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

const letterPositions = function(sentence) {
  const results = {};
  for (const index in sentence) {
    if (sentence[index] !== ' ') {
      if (sentence[index] in results) {
        results[sentence[index]].push(Number(index));
      } else {
        results[sentence[index]] = [Number(index)];
      }
    }
  }
  return results;
};

console.log(assertArraysEqual(letterPositions("hello").h, [0]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));
console.log(assertArraysEqual(letterPositions("hello").o, [4]));

console.log(assertArraysEqual(letterPositions("random word").r, [0, 9]));
console.log(assertArraysEqual(letterPositions("random word").a, [1]));
console.log(assertArraysEqual(letterPositions("random word").n, [2]));
console.log(assertArraysEqual(letterPositions("random word").d, [3, 10]));
console.log(assertArraysEqual(letterPositions("random word").o, [4, 8]));
console.log(assertArraysEqual(letterPositions("random word").m, [5]));
console.log(assertArraysEqual(letterPositions("random word").w, [7]));
