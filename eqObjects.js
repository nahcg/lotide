const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  //check if key lengths are the same
  if (keys1.length !== keys2.length) {
    return false;
  } else {
  // check if values are the same
    for (const key of keys1) {
      // check if values are an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        } else {
          return true;
        }
      } else {
        // if values not arrays
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
};

module.exports = eqObjects;