let cache = {};
function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else if (cache[num]) {
    return cache[num];
  } else {
    cache[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return cache[num];
  }
}
//
// function fibonacci(num) {
//   let firstNums = [0, 1];
//   if (num === 0) {
//     return 0;
//   }
//   for (let i = 1; i < num; i++) {
//     firstNums.push(firstNums[i - 1] + firstNums[i]);
//   }
//   return firstNums[firstNums.length - 1];
// }

console.log(fibonacci(4));