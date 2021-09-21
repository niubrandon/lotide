
const findKeyByValue = function(obj, str) {
  let result = undefined;
  let arr = Object.entries(obj);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === str) {
      result = arr[i][0];
    }
  }

  return result;
};

module.exports = findKeyByValue;