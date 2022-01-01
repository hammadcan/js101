const input = require('readline-sync');

let arrow = '==>';
let firstNumber = Number(input.question(`${arrow} Enter the first number:\n`));
let secondNumber = Number(input.question(`${arrow} Enter the second number:\n`));
let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiply = firstNumber * secondNumber;
let divide = firstNumber / secondNumber;
let remainder = firstNumber % secondNumber;
let exponent = firstNumber ** secondNumber;

console.log(`${arrow} ${addition}`);
console.log(`${arrow} ${subtraction}`);
console.log(`${arrow} ${multiply}`);
console.log(`${arrow} ${divide}`);
console.log(`${arrow} ${remainder}`);
console.log(`${arrow} ${exponent}`);
