// finds key that matches given value in a nested key value pair
const findKey = function(object, callback) {
  var keys = Object.keys(object);
  for (const k of keys) {
    if (callback(object[k]) === true) {
      return k;
    }
  }
};

// export function for testing
module.exports = findKey;