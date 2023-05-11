const tail = function(input) {
  let input2 = input;
  return input2.slice(1, input.length);
};

module.exports = tail;