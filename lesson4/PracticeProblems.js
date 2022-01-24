// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
//
// function objectify(array) {
//   let object = {};
//
//   array.forEach((name, index) => {
//     object[name] = index;
//   });
//   return object;
// }
//
// console.log(objectify(flintstones));

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let totalAge = 0;
// Object.values(ages).forEach(age => totalAge += age);
// console.log(totalAge);

// let lowestAge = Object.values(ages);
// console.log(Math.min(...lowestAge));

// let statement = "The Flintstones Rock";
// let splitStatement = statement.split("").filter(char => char !== " ");
// let frequency = {};
//
// splitStatement.forEach(char => {
//   if (Object.keys(frequency).includes(char)) {
//     frequency[char] += 1;
//   } else {
//     frequency[char] = 1;
//   }
// });
//
// console.log(frequency);

let result = ['a', 'b', 'c'].forEach(function(item) {
  console.log(item);
});

result; // []