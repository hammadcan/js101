function findDup(array) {
  let num;
  array.sort();
  for (let i = 0; i < array.length; i++) {
    num = array[i];
    if (num === array[i + 1]) {
      return num;
    }
  }
}

console.log(findDup([1, 5, 3, 1]));