const assertArraysEqual = (arrA, arrB) => {
  
  let isEqual = eqArrays(arrA, arrB);
  
  return (isEqual ? console.log(`✅✅✅Assertion Passed: ${arrA} === ${arrB}`) : console.log(`🛑🛑🛑Assertion Failed: ${arrA} !== ${arrB}`));
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual(["hello", 2, 3], ["Hello", 2, 3]);
assertArraysEqual(["hello", 2, 3], ["hello", 2, 3]);
assertArraysEqual([], [1]);
assertArraysEqual([], []);
assertArraysEqual([1], [1]);