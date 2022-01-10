const input = require('readline-sync');

function search101() {
  let numOne = Number(input.question("Enter the first number "));
  let numTwo = Number(input.question("Enter the second number "));
  let numThree = Number(input.question("Enter the third number "));
  let numFour = Number(input.question("Enter the fourth number "));
  let numFive = Number(input.question("Enter the fifth number "));
  let numFinal = Number(input.question("Enter the last number "));

  switch (numFinal) {
    case numOne:
    case numTwo:
    case numThree:
    case numFour:
    case numFive:
      console.log(`The number ${numFinal} appears in ${numOne},${numTwo},${numThree},${numFour},${numFive}.`);
      break;
    default:
      console.log(`The number ${numFinal} doesn't appear in ${numOne},${numTwo},${numThree},${numFour},${numFive}.`);
  }
}

search101();