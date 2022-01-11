function multiplyLists(array1, array2) {
  let finalArray = [];
  for (let i = 0; i < array1.length; i++) {
    let total = array1[i] * array2[i];
    finalArray.push(total);
  }
  return finalArray;
}

console.log(multiplyLists([3, 5, 7], [9, 10, 11]));