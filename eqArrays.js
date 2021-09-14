const assertEqual = function(actual, expected) {
  if (actual === expected) {
  // console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
  // console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrA, arrB) => {
  let isEqual = true;
  if (arrA.length !== arrB.length) {
    isEqual = false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      isEqual = false;
    }
  }
  return isEqual;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([0], [1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["hi", 2, 3], ["hi", 2, 3]), true);
assertEqual(eqArrays([1, 2, "hi"], [1, 2, 3]), false);
console.log(eqArrays([1, 2, 3], [1, 2, 3]),eqArrays([1, 2, 3], [3, 2, 1]),eqArrays(["1", "2", "3"], ["1", "2", "3"]),eqArrays(["1", "2", "3"], ["1", "2", 3]));

