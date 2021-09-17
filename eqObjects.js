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

const eqObjects = function(object1, object2) {
  let result = true;
  //check if length are same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //console.log(object1.length);
    return result = false;
  }
  //looping throught each value and check if they are object, arrays, string & number
  for (let item of Object.keys(object1)) {
    //check both object1 and object2 value if they are sub-object
    if (typeof object1[item] === "object" && typeof object2[item] === "object") {
      //check if both object are array, if both are array, use eqArray for comparison
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        result = eqArrays(object1[item], object2[item]);
        //then check if one of them is object and one of them is array
      } else if ((Array.isArray(object1)[item] && !Array.isArray(object2)[item]) || (!Array.isArray(object1)[item] && Array.isArray(object2)[item])) {
        return result = false;
      } else {
        //both are objects, use recursion to check, pass new object to eqObjects
        return eqObjects(object1[item], object2[item]);
            
      }
    } else {
      // then compare if both them are not object
      if (object1[item] !== object2[item]) {
        return result = false;
      }
    }
  }
  return result;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);

eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);

eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);