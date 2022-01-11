function halvsies(array) {
  let firstArray = [];
  let secondArray = [];
  if (array.length % 2 === 0) {
    firstArray.push(array.slice(0,array.length / 2));
    secondArray.push(array.slice(array.length / 2, array.length));
  } else {
    firstArray.push(array.slice(0, (array.length / 2) + 1));
    secondArray.push(array.slice((array.length / 2) + 1, array.length));
  }
  return firstArray.concat(secondArray);
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));