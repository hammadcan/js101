function findFibonacciIndexByLength(length) {
  let nums = [1n, 1n];
  let idx = 2;

  do {
    nums = [nums[1], nums[0] + nums[1]];
    idx += 1;
  } while (String(nums[1]).length < length);

  console.log(idx);
}

