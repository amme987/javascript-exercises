const findTheOldest = function (arr) {
  for (item of arr) {
    console.log(item.name);
    if (!item.hasOwnProperty("yearOfDeath")) {
      item.yearOfDeath = new Date().getFullYear();
    }
  }
  const sort = arr.sort((a, b) => {
    return a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth);
  });
  return sort[sort.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
