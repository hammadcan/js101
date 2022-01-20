function leadingSubstrings(string) {
  let substrings = [];
  for (let i = 1; i < string.length + 1; i++) {
    substrings.push(string.slice(0, i));
  }
  return substrings;
}

function substrings(string) {
  let substrings = [];
  for (let i = 0; i < string.length; i++) {
    substrings.push(leadingSubstrings(string.slice(i, string.length)));
  }
  return substrings;
}

console.log(substrings("abcde"));