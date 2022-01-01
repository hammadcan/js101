const input = require('readline-sync');

const MESSAGES = require('./mortgage_calculator.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return isNaN(number) || Number.parseFloat(number) <= 0;
}

prompt(MESSAGES.welcome);

prompt(MESSAGES.loan);

let loanAmount = input.question("$");

while (invalidNumber(Number.parseFloat(loanAmount))) {
  prompt(MESSAGES.wrongNumber);
  loanAmount = input.question("$");
}

prompt(MESSAGES.duration);

let lengthOfLoan = input.question();

while (invalidNumber(lengthOfLoan)) {
  prompt(MESSAGES.wrongNumber);
  lengthOfLoan = input.question();
}

prompt(MESSAGES.interestRate);

let interestRate = input.question();

while (invalidNumber(interestRate)) {
  prompt(MESSAGES.wrongNumber);
  interestRate = input.question();
}

let monthlyInterest = Number.parseFloat(interestRate) / 1200;
let loanInMonths = Number.parseFloat(lengthOfLoan) * 12;
let fraction = (1 - Math.pow((1 + monthlyInterest), (-loanInMonths)));
let monthlyPayment = loanAmount * (monthlyInterest / fraction);
let finalNumber = Number(monthlyPayment).toFixed(2);

prompt(MESSAGES.monthlyPayment);

console.log(`$${finalNumber}`);
