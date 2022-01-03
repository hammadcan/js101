/*Let's do some "ASCII Art": a stone-age form of nerd artwork
from back in the days before computers had video screens.
For this practice
problem, write a program that outputs The Flintstones Rock!
10 times, with each line indented 1 space
to the right of the line above it.
The output should start out like this:*/

// let string = " The Flintstones Rock!";
// for (let id = 0; id < 10; id++) {
//   console.log(string.padStart(id + string.length));
// }

// Starting with the string:
// let munstersDescription = "The Munsters are creepy and spooky.";
//
// munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }
//
// console.log(factors(10));

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }
//
// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);

// let answer = 42;
//
// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }
//
// let newAnswer = messWithIt(answer);
//
// console.log(answer - 8);

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };
//
// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }
//
// console.log(munsters);

// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// function foo(param = "no") {
//   return "yes";
// }
//
// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }
// console.log(bar(foo()));