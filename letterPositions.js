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

const countPositions = function(str) {
  let result = {};
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = [i];
    } else {
      result[str[i]].push(i);
    }
  }

  return result;
};

const resultObj = countPositions('hello');

assertArraysEqual(resultObj['h'], [0]);

assertArraysEqual(resultObj['e'], [1]);

assertArraysEqual(resultObj['l'], [2, 3]);

assertArraysEqual(resultObj['o'], [4]);