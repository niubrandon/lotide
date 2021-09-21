
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
  // console.log(item);
    if (!(item in itemsToCount)) {
    //  console.log("name is in not in ", item);
    } else {
    //  console.log('name is on the list check true, false', item);
      if (itemsToCount[item] === true) {
        if (item in results) {
          results[item] += 1;
        } else {
          results[item] = 1;
        }
       
      }
    }
  }
  return results;
};

module.exports = countOnly;