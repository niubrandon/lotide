const tail = function(arr) {
  if (arr === []) {
    return [];
  } else if (arr.length === 1) {
    return [];
  } else {
    return arr.slice(1);

  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
  // console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
  // console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
const result = tail([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);

const words = tail(["Hello", "Brandon", "Jason"]);
assertEqual(words.length, 3);
assertEqual(words[0], "Brandon");
assertEqual(words[1], "Daisy");

const emptyArray = tail([]);
assertEqual(emptyArray.length, 0);

const singleElementArray = tail([1]);
assertEqual(singleElementArray.length, 0);