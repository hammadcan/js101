// let advice = "Few things in life are as important as house training."
//
// console.log(advice.replaceAll("important","urgent"));

// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = [];
// numbers.forEach(function reverse(element) {
//   reversedArray.push(element);
// });
// reversedArray.reverse();
// console.log(reversedArray); // [ 5, 4, 3, 2, 1 ]

// let numbers = [1, 2, 3, 4, 5];
// let sortedArray = [];
// numbers.forEach(function sort(element) {
//   sortedArray.push(element);
//   sortedArray.sort((num1, num2) => num2 - num1);
// });
//
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
//
// let number1 = 8;  // false
// let number2 = 95; // true
//
// console.log(numbers.includes(95));

// let famousWords = "seven years ago...";
// console.log("Four score and " + famousWords);
// let fourScore = "Four score and ";
// console.log(fourScore + famousWords);

// let array = [1, 2, 3, 4, 5];
// array.splice(2, 1);
//
// console.log(array);

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// console.log([].concat(...flintstones));

// eslint-disable-next-line max-len
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// eslint-disable-next-line max-len
// console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
//
// console.log(Array.isArray(table));

// let title = "Flintstone Family Members";
// let padding = Math.floor((40 - title.length) / 2);
// console.log(title.padStart(padding + title.length));

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";
// console.log(statement1.split('').filter(char => char === 't'));