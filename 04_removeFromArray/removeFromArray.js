const removeFromArray = function (array, ...args) {
  let newArray = [];
  //  for(let i = 0; i < array.length; i++){
  //     if(array[i] !== args){
  //         array2.push(array[i]);
  //     }
  //   }

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
