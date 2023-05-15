const findKey = function(object, callback) {
  var keys = Object.keys(object);
  for (const k of keys) {
    if (callback(object[k]) === true) {
      return k;
    }
  }
};

module.exports = findKey;