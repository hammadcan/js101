function leadingSubstrings(string) {
  let substrings = [];
  for (let i = 1; i < string.length + 1; i++) {
    substrings.push(string.slice(0, i));
  }
  return substrings;
}

console.log(leadingSubstrings("a"));