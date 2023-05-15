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

module.exports = flatten;