function wordToDigit(string) {
  let nums = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };

  for (let num in nums) {
    string = string.replaceAll(nums[num], num);
  }
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));