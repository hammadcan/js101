function sequence(count, num) {
  let answer = [];
  let currentValue = 0;
  for (let i = 0; i < count; i++) {
    currentValue += num;
    answer.push(currentValue);
  }
  return answer;
}

console.log(sequence(0,10000));