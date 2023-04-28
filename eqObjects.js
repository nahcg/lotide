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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// same objects
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true)); // => true

// different length objects
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false)); // => false

// different keys
const anotherShirtObject2 = { size: "medium", somethingelse: "red" };
console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject2), false));

// different values (primitive)
const anotherShirtObject3 = { size: "medium", color: "black" };
console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject3), false));

// different values (array)
const anotherShirtObject4 = { size: "medium", color: ["red", "black"] };
const anotherShirtObject5 = { size: "medium", color: ["blue", "black"] };
console.log(assertEqual(eqObjects(anotherShirtObject4, anotherShirtObject5), false));

// same values (array)
const anotherShirtObject6 = { color: ["red", "blue"], size: "medium" };
const anotherShirtObject7 = { size: "medium", color: ["red", "blue"] };
console.log(assertEqual(eqObjects(anotherShirtObject6, anotherShirtObject7), true));
