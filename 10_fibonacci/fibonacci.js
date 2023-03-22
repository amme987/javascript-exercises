const fibonacci = function (num) {
  let first = 1,
    second = 1;
  let sum;
  if (num < 0) {
    return "OOPS";
  }
  if (num == 0) {
    return 0;
  }
  if (num == 1 || num == 2) {
    return 1;
  }
  for (let i = 3; i <= num; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
