// returns a dictionary of keys and values of items and counts of those items which are present in given array
const countOnly = function(allItems, itemsToCount) {
  let dict = {};
  for (const name of allItems) {
    let val = itemsToCount[name];
    if (val === true) {
      if (name in dict) {
        dict[name] += 1;
      } else {
        dict[name] = 1;
      }
    }
  }
  return dict;
};

module.exports = countOnly;