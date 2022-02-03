function rotateRightmostDigits(number, counter) {
  let numString = number.toString();
  let firstNum = numString.slice(0, numString.length - counter);
  let secondNum = numString.slice(numString.length - counter, numString.length);
  let rotatedNum = firstNum + secondNum.slice(1, numString.length) + secondNum.slice(0, 1);
  return Number(rotatedNum);
}

console.log(rotateRightmostDigits(735291, 6));