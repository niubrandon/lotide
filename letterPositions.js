const letterPositions = function(str) {
  let result = {};
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = [i];
    } else {
      result[str[i]].push(i);
    }
  }

  return result;
};

const resultObj = letterPositions('hello');


module.exports = letterPositions;