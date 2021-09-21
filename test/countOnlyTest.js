const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("testing countOnly function", () => {
  it("return {Jason: 1, Fang: 2}  from { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false } ", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {Jason: 1, Fang: 2});
  });

});
