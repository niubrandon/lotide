const flatten = require('../flatten');
const assert = require('chai').assert;


describe("testing flatten function", () => {
  it("return [1, 2, 3, 4, 5, 6] from [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
  });

  it("return [1, 2, 3, 8, 9, , 5, 6, 10, 12] from [1, 2, [3, [8, 9]], 5, [6, [10, 12]]]", () => {
    assert.deepEqual(flatten([1, 2, [3, [8, 9]], 5, [6, [10, 12]]]),[1, 2, 3, 8, 9, 5, 6, 10, 12]);
  });
});