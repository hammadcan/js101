function penultimate(string) {
  let newString = string.split(" ");
  return (newString[newString.length - 2]);
}

console.log(penultimate("last word")); // logs true
console.log(penultimate("Launch School is great!")); // logs true