function union(array1, array2) {
  let twoArray = array1.concat(array2);
  let finalArray = [...new Set(twoArray)];
  return console.log(finalArray);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]