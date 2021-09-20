const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); 
eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
 
eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
 
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([0], [1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["hi", 2, 3], ["hi", 2, 3]), true);
assertEqual(eqArrays([1, 2, "hi"], [1, 2, 3]), false);