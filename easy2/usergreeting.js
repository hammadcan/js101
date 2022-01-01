const input = require('readline-sync');

let userName = input.question('What is your name? ');
if (userName.endsWith('!')) {
  console.log(`HELLO ${userName.toUpperCase()} WHY ARE WE SCREAMING? `);
} else console.log(`Hello ${userName}`);