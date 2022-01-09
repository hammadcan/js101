const input = require('readline-sync');

let noun = input.question(`Enter a noun: `);
let verb = input.question(`Enter a verb: `);
let adjective = input.question(`Enter an adjective: `);
let adverb = input.question(`Enter an adverb: `);

let story = `Do you ${verb} your ${adjective} ${noun} quickly? That's hilarious!
The ${adjective} ${noun} walks quickly over the lazy dog.
The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`;

console.log(story);
