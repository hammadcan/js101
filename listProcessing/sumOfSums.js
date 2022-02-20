function sumOfSums(array) {
  let finalTotal = 0;
  let currentTotal = 0;
  for (let i = 0; i < array.length; i++) {
    currentTotal += array[i];
    finalTotal += currentTotal;
  }
  return finalTotal;
}

console.log(sumOfSums([1,2,3,4,5]));