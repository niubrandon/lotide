const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("testing eqArray function", () => {

  it("return true from comparing [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("return true from comparing [] and []", () => {
    assert.isTrue(eqArrays([], []));
  });

  it("return false from comparing [1, 2, 3] and [1, 2]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2]));
  });

  it("return false from comparing [1] and [2]", () => {
    assert.isFalse(eqArrays([1], [2]));
  });

  it("return true from comparing [\"hi\", 2, 3] and [\"hi\", 2, 3]", () => {
    assert.isTrue(eqArrays(["hi", 2, 3], ["hi", 2, 3]));
  });

  it("return true from comparing [1, 2, [3, 4]] and [1, 2, [3, 4]]", () => {
    assert.isTrue(eqArrays([1, 2, [3, 4]], [1, 2, [3, 4]]));
  });


});