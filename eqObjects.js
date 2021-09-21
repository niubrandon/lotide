const eqArrays = require('./eqArrays');

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




module.exports = eqObjects;