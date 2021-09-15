'use strict';
let results = process.argv.slice(2);
console.log(results);
for (let j = 0; j < results.length; j++) {
  if (typeof results[j] === "number") {
    console.log(results[j]);
  } else if (typeof results[j] === "string") {
    let reversedString = "";
    for (let i = results[j].length - 1; i >= 0; i--) {
      reversedString += results[j][i];
    }
    console.log(reversedString);
  }
  
}