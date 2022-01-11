function average(array) {
  let reducer = (previousvalue, currentvalue) => previousvalue + currentvalue;
  return Math.floor((array.reduce(reducer)) / array.length);
}

console.log(average([9, 47, 23, 95, 16, 52]));