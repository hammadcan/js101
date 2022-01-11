function reverseNumber(int) {
  return parseInt((int.toString().split("").reverse().join("")), 10);
}

console.log(reverseNumber(12345));