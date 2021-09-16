const takeUntil = function(array, callback) {
//loop through elemtn
  let result = [];
  for (let i = 0; i < array.length; i++) {
    //slice the array to a subarray
  // const arr = array.slice(0,i);
  //  console.log(arr);
    if (callback(array[i])) {
      return result;
    } else {
      result.push(array[i]);
    }
    //console.log(callback(array[i]));
 
  }
 
};

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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','),['I\'ve', 'been', 'to', 'Hollywood']);

