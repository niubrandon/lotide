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

const assertArraysEqual = (arrA, arrB) => {
  
  let isEqual = eqArrays(arrA, arrB);
  
  return (isEqual ? console.log(`✅✅✅Assertion Passed: ${arrA} === ${arrB}`) : console.log(`🛑🛑🛑Assertion Failed: ${arrA} !== ${arrB}`));
};

const middle = (arr) => {
  let length = arr.length;
  let mid = Math.floor(arr.length / 2) - 1;
  if (length <= 2) {
    return [];
  } else {
    if (length % 2 !== 0) {
    //odd length
      return [arr[mid + 1]];
    } else {
      //even length
      return [arr[mid], arr[mid + 1]];
    }
  }

};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);