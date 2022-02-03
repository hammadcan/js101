function sumSquareDifference(num) {
  let sumSquare = 0;
  let squaredSum = [];
  let reducer = (previous, current) => previous + current;
  for (let i = 1; i <= num; i++) {
    squaredSum.push(i);
  }
  for (let i = 0; i < squaredSum.length; i++) {
    sumSquare += squaredSum[i] ** 2;
  }
  return (squaredSum.reduce(reducer) ** 2) - sumSquare;
}

console.log(sumSquareDifference(100));