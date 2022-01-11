function digitList(integers) {
  return integers.toString().split("").map(x => parseInt(x));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));