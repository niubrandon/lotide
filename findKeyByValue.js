const assertEqual = function(actual, expected) {
  if (actual === expected) {
  // console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
  // console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, str) {
  let result = undefined;
  let arr = Object.entries(obj);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === str) {
      result = arr[i][0];
    }
  }

  return result;
};



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);