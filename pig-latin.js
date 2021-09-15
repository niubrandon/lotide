'use strict';
let results = process.argv.slice(2);

for (let i = 0; i < results.length; i++) {
  let result = results[i].substring(1) + results[i][0] + "ay";
  console.log(result);
}