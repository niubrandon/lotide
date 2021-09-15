const tail = function(arr) {
  if (arr === []) {
    return [];
  } else if (arr.length === 1) {
    return [];
  } else {
    return arr.slice(1);

  }
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
  // console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
  // console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const result = tail([1, 2, 3]);
assertArraysEqual(result.length, 2);
assertArraysEqual(result[0], 2);
assertArraysEqual(result[1], 3);

const words = tail(["Hello", "Brandon", "Jason"]);
assertArraysEqual(words.length, 3);
assertArraysEqual(words[0], "Brandon");
assertArraysEqual(words[1], "Daisy");

const emptyArray = tail([]);
assertArraysEqual(emptyArray.length, 0);

const singleElementArray = tail([1]);
assertArraysEqual(singleElementArray.length, 0);