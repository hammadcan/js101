function countOccurrences(array) {
  let total = {};
  for (let i = 0; i < array.length; i++) {
    if (total.hasOwnProperty(array[i])) {
      total[array[i]] += 1;
    } else total[array[i]] = 1;
  }
  console.log(total);
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

(countOccurrences(vehicles));