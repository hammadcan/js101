function negative(int) {
  let num = int.toString().split("");
  if (num[0] === "-") {
    return num.join("");
  } else {
    num.unshift('-');
    return num.join("");
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0