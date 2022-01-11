function reverseSentence(string) {
  return string.split(' ').reverse().join(" ");
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

function reverseWords(string) {
  return string.split(" ").map(word => (word.length > 4 ? word.split("").reverse().join("") : word)).join(" ");
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));