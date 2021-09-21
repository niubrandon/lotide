const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

describe("testing eqObject function", () => {

  it(`return true from comparing object ${cd} and ${dc}`, () => {
    assert.isTrue(eqObjects(cd, dc));
  });
  it(`return false from comparing object ${ab} and ${abc}`, () => {
    assert.isFalse(eqObjects(ab, abc));
  });
  it(`return false from comparing object ${cd} and ${cd2}`, () => {
    assert.isFalse(eqObjects(cd, cd2));
  });
  it(`return true from comparing object ${cd} and ${dc}`, () => {
    assert.isTrue(eqObjects(cd, dc));
  });

  it(`return true from comparing object ${ab} and ${ba}`, () => {
    assert.isTrue(eqObjects(ab, ba));
  });
  it(`return true from comparing object { a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 } `, () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it(`return false from comparing { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 } `, () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

});