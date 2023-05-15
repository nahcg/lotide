const findKeyByValue = function(someobject, valuetofind) {
  for (const key of Object.keys(someobject)) {
    if (someobject[key] === valuetofind) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
