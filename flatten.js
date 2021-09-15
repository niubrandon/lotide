const flatten = (arr, res = []) => {
//base case
  for (let element of arr) {
    if (!Array.isArray(element)) {
    // console.log("number", element);
      res.push(element);
    //  console.log('res', res);
    } else {
    //  console.log("array", element);
      flatten(element, res);
    }
  }
  return res;
//
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, [8, 9]], 5, [6, [10, 12]]]));
