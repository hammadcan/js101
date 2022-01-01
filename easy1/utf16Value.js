function utf16Value(string) {
  let total = 0;
  for (let id = 0; id < string.length; id++) {
    total = string.charCodeAt(id) + total;
  }
  return total;
}

console.log(utf16Value('\u03A9'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
