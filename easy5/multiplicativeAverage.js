function multiplicativeAverage(array) {
  let reducer = (previousValue, currentValue) => (previousValue * currentValue);
  let total = array.reduce(reducer) / array.length;
  return Number(total.toString()).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));