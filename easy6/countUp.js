function sequence(num) {
  let nums = [];
  for (let i = 1; i <= num; i++) {
    nums.push(i);
  }
  return nums;
}

console.log(sequence(5));