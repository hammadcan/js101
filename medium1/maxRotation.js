function rotateRightmostDigits(number, counter) {
  let numString = number.toString();
  let firstNum = numString.slice(0, numString.length - counter);
  let secondNum = numString.slice(numString.length - counter, numString.length);
  let rotatedNum = firstNum + secondNum.slice(1, numString.length) + secondNum.slice(0, 1);
  return Number(rotatedNum);
}

function maxRotation(number) {
  let numLength = String(number).length;
  for (let i = numLength; i >= 2; i--) {
    number = rotateRightmostDigits(number, i);
  }
  return number;
}

console.log(maxRotation(735291));