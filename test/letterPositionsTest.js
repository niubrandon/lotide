const assert = require('chai').assert;
const letterPositons = require('../letterPositions');


describe("testing countPositions function", () => {
  it("return {h: [0], e: [1], l: [2, 3], o: [4]} from 'hello'", () => {
    assert.deepEqual(letterPositons('hello'), {h: [0], e: [1], l: [2, 3], o: [4]});
  });

});

