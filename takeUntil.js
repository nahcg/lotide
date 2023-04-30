const takeUntil = function(array, callback) {
  let results = [];
  for (const i of array) {
    if (callback(i) !== true) {
      results.push(i);
    } else {
      break;
    }
  }
  return results;
};

//[ 1, 2, 5, 7, 2 ]
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

//[ 'I\'ve', 'been', 'to', 'Hollywood' ]
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
