function runningTotal(num) {
  let arr = [];
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i];
    arr.push(total);
  }
  console.log(arr);
}

runningTotal([2, 5, 13]);
runningTotal([14, 11, 7, 15, 20]);
runningTotal([3]);
runningTotal([]);