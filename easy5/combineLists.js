function interleave(array1, array2) {
  let finalArray = [];
  for (i = 0; i < array1.length; i++) {
    finalArray.push(array1[i]);
    finalArray.push(array2[i]);
  }
  return finalArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));