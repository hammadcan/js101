function xor(value1, value2) {
  return (value1 && !value2) || (value2 && !value1);
}
console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));

