const assertArraysEqual = function (input, input2) {
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

const without = function (source, itemsToRemove) {
  let source2 = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    source2 = source2.filter((item) => item !== itemsToRemove[i]);
  }
  return source2;
};

console.log(without([1, 2, 3], [1, 2])); // => [3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(
  without(["thing1", "thing2", 1, 3, "5", "8"], [1, "3", "thing2", "5", 8])
); // => ["thing1", 3, '8']

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

module.exports = without;
