const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  console.log('array: ', array);
  console.log('callback:', callback);
  const results = [];
  for (let item of array) {
    console.log('item BEFORE:', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }

  
  return results;
};


const results1 = map(words, word => word[0]);
console.log(results1);

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

assertArraysEqual(map(["hello", "wrold", "brandon"],word => word[0]), ["h", "w", "b"]);


