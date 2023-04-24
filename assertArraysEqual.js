const assertArraysEqual = function(input, input2) {
  var result = true;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input2[i]) {
      result = false;
    } else if (input[i] === input2[i] && result == false) {
      result = false;
    } else if (input[i] === input2[i]) {
      result = true;
    }
  }
  if (result == true) {
    return "arrays are equal";
  } else {
    return "arrays are not equal";
  }
};
