function multiplyAllPairs(array1, array2) {
  let unsortedArray = [];
  for (let i = 0; i < array1.length; i++) {
    unsortedArray.push(array1[i] * array2);
    for (let f = 0; f < array2.length; f++) {
      unsortedArray.push(array1[i] * array2[f]);
    }
  }
  let sortedArray = unsortedArray.filter(element => !Number.isNaN(element));
  return sortedArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));