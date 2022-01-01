function multisum(number) {
  let total = 0;
  for (let int = 0; int <= number; int++) {
    if (int % 3 === 0 || int % 5 === 0) {
      total = int + total;
    }
  }
  return total;
}

console.log(multisum(10));