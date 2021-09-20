const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');
const assert = require('chai').assert;


describe("Testing tail function ", () => {
  it("return ['Brandon', 'Jason'] with ['Hello', 'Brandon', 'Jason']", () => {
    assert.deepEqual(tail(["Hello", "Brandon", "Jason"]),["Brandon", "Jason"]);
  });

  it("return [] with []", () => {
    assert.deepEqual(tail([]),[]);
  });

  it("return [] with ['Hello']", () => {
    assert.deepEqual(tail(["Hello"]),[]);
  });

});




