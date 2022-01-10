const input = require('readline-sync');

let date = Number(new Date().getFullYear());
let age = Number(input.question('What is your age? '));
let retireAge = Number(input.question('What age would you like to retire? '));

console.log(`It's ${date}. You will retire in ${retireAge - age + date}.
You only have ${retireAge - age} years to go!`);
