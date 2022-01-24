function letterCaseCount(string) {
  let caseCount = {lowercase: 0, uppercase: 0, neither: 0};
  string.split("").forEach(letter => {
    if (letter.toUpperCase() === letter.toLowerCase()) {
      caseCount.neither++;
    } else if (letter === letter.toUpperCase()) {
      caseCount.uppercase++;
    } else if (letter === letter.toLowerCase()) {
      caseCount.lowercase++;
    }
  });
  return caseCount;
}

console.log(letterCaseCount('abCdef 123'));

