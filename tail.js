const tail = function(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return [];
  } else {
    return arr.slice(1);

  }
};

module.exports = tail;