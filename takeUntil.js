const eqArrays = function (input, input2) {
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

const assertArraysEqual = function (input, input2) {
  if (eqArrays(input, input2)) {
    return `Arrays are the same: [${input}] === [${input2}]`;
  } else {
    return `Arrays are not the same: ${input} !== ${input2}]`;
  }
};

const takeUntil = function (array, callback) {
  let results = [];
  for (const i of array) {
    if (callback(i) !== true) {
      results.push(i);
    } else {
      break;
    }
  }
  return results;
};

//[ 1, 2, 5, 7, 2 ]
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(
  assertArraysEqual(
    takeUntil(data1, (x) => x < 0),
    [1, 2, 5, 7, 2]
  )
);

//[ 'I\'ve', 'been', 'to', 'Hollywood' ]
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
console.log(
  assertArraysEqual(
    takeUntil(data2, (x) => x === ","),
    ["I've", "been", "to", "Hollywood"]
  )
);

module.exports = takeUntil;
