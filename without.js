const assertArraysEqual = (arrA, arrB) => {
  
  let isEqual = true;
  if (arrA.length !== arrB.length) {
    isEqual = false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      isEqual = false;
    }
  }
  return (isEqual ? console.log(`✅✅✅Assertion Passed: ${arrA} === ${arrB}`) : console.log(`🛑🛑🛑Assertion Failed: ${arrA} !== ${arrB}`));
};

const without = (source, itemsToRemove) => {
  console.log("source", source, "itemstoremove", itemsToRemove);
  let newArr = source.slice(0);
  for (let item of itemsToRemove) {
    if (newArr.includes(item)) {
      console.log("source has this element", item);

      newArr.splice(newArr.indexOf(item), 1);

      console.log("updated source is", newArr);
    } else {
      console.log("source doesn't has this element", item);
    }
    
  }
  return newArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);