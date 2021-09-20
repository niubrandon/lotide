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

module.exports = middle;