function rotateArray(array) {
  let newArray = [];
  if (!Array.isArray(array)) {
    return newArray = undefined;
  } else if (array.length === 1) {
    return newArray = array;
  } else if (array.length === 0) {
    return [];
  }
  newArray.push(array.slice(1, array.length - 1));
  newArray.push(array[array.length - 1]);
  newArray.push(array[0]);
  return newArray.flat();
}

console.log(rotateArray([1, 'a', 3, 'c']));