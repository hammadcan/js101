function bubbleSort(array) {
  if (typeof array[0] === "string") {
    return array.sort((a, b) => {
      if (a.toUpperCase() > b.toUpperCase()) {
        return 1;
      } else if (b.toUpperCase() > a.toUpperCase()) {
        return -1;
      } else return 0;
    });
  }
  return array.sort((a, b) => a - b);
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]