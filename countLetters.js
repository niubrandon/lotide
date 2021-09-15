const assertEqual = function(actual, expected) {
  if (actual === expected) {
  // console.log("✅✅✅Assertion Passed: " + actual + " === " + expected);
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
  // console.log("🛑🛑🛑Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let result = {};
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = 1;
    } else {
      result[str[i]] += 1;
    }
  }

  return result;
};

const resultObj = countLetters('LHLABBBAAAA');

assertEqual(resultObj['L'], 2);

assertEqual(resultObj['H'], 1);

assertEqual(resultObj['A'], 5);

assertEqual(resultObj['B'], 3);