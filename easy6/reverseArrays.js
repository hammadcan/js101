function reverse(array) {
  let newArray = [];

  while (array.length > 0) {
    newArray.push(array.pop());
  }

  while (newArray.length > 0) {
    array.push(newArray.shift());
  }
  return array;
}
