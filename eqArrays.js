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
  //first, check if both array has same length
  if (arrA.length !== arrB.length) {
  // console.log("two array has different length", arrA, arrB);
    return isEqual = false;
  }
  //loop throught each element
  for (let i = 0; i < arrA.length; i++) {
  //check if element is array
  // console.log("looping thourgh", i , arrA[i], arrB[i]);
    if (Array.isArray(arrA[i]) && Array.isArray(arrB[i])) {
    //recursive call
      console.log("comparing two arrays", arrA[i], arrB[i]);
      isEqual = eqArrays(arrA[i], arrB[i]);

    } else if ((!Array.isArray(arrA[i]) && Array.isArray(arrB[i])) || (Array.isArray(arrA[i]) && !Array.isArray(arrB[i]))) {
    // console.log("one of them is not array", arrA[i], arrB[i]);
      return isEqual = false;
      
    } else {
      if (arrA[i] !== arrB[i]) {
      // console.log("two value are not same", arrA[i], arrB[i]);
        return isEqual = false;
      }
    }
  }
  return isEqual;
};

eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); 
eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
 
eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([0], [1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["hi", 2, 3], ["hi", 2, 3]), true);
assertEqual(eqArrays([1, 2, "hi"], [1, 2, 3]), false);
 