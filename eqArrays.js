const assertEqual = require('./assertEqual');

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
    // console.log("comparing two arrays", arrA[i], arrB[i]);
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


/* const eqArrays = (arrA, arrB) => {
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
}; */


module.exports = eqArrays;
 