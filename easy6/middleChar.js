function centerOf(string) {
  let array = string.split("");
  if (array.length % 2 === 1) {
    let oddLength = array[(array.length - 1) / 2];
    return oddLength;
  } else return array[(array.length / 2) - 1] + array[array.length / 2];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"