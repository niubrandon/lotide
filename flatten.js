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

module.exports = flatten;