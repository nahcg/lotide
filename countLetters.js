const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// counts occurance of each letter in a string and returns key value pairs in dictionary
const countLetters = function (inputstring) {
  let dict = {};
  for (const s of inputstring) {
    if (s in dict && s !== " ") {
      dict[s] += 1;
    } else if (s !== " ") {
      dict[s] = 1;
    }
  }
  return dict;
};

const result = countLetters("lighthouse house");

console.log(assertEqual(result["l"], 1));
console.log(assertEqual(result["i"], 1));
console.log(assertEqual(result["g"], 1));
console.log(assertEqual(result["h"], 3));
console.log(assertEqual(result["t"], 1));
console.log(assertEqual(result["o"], 2));
console.log(assertEqual(result["u"], 2));
console.log(assertEqual(result["s"], 2));
console.log(assertEqual(result["e"], 2));

module.exports = countLetters;
