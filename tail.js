const tail = function(arr) {
  if (arr === []) {
    return [];
  } else if (arr.length === 1) {
    return [];
  } else {
    return arr.slice(1);

  }
};

module.exports = tail;