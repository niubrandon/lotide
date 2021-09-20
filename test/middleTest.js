const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

/* assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); */

//using Mocha Chai unit testing
describe("testing middle function", () => {

  it("return [] from []", () => {
    assert.deepEqual(middle([]), []);
  });
  
  it("return [] from [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("return [] from [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("return [2] from [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("return [2, 3] from [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("return [3] from [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("return [3, 4] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });


});