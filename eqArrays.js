// eqArray function used to compare arrays
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

module.exports = eqArrays;