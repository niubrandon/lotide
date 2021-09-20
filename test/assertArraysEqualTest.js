const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual(["hello", 2, 3], ["Hello", 2, 3]);
assertArraysEqual(["hello", 2, 3], ["hello", 2, 3]);
assertArraysEqual([], [1]);
assertArraysEqual([], []);
assertArraysEqual([1], [1]);