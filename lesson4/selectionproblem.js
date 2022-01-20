// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };
//
// function selectFruit(produceList) {
//   let produceKeys = Object.keys(produceList);
//   let fruits = {};
//
//   for (let counter = 0; counter < produceKeys.length; counter++) {
//     let currentKey = produceKeys[counter];
//     let currentValue = produceList[currentKey];
//
//     if (currentValue === 'Fruit') {
//       fruits[currentKey] = currentValue;
//     }
//   }
//   return fruits;
// }
//
// console.log(selectFruit(produce));

let myNumbers = [1, 4, 3, 7, 2, 6];

function multipliedNums(numbers, multiplier) {
  let multipliedNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNum = numbers[counter];
    multipliedNums.push(currentNum * multiplier);
  }

  return multipliedNums;
}

console.log(multipliedNums(myNumbers, 10));

