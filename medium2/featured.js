function uniqueNum(num) {
  let unique = String(num).split("").sort();
  for (let i = 0; i < unique.length; i++) {
    if (unique[i] === unique[i + 1]) {
      return false;
    }
  }
  return true;
}

function oddOrMultiple(num) {
  return num % 7 === 0 && num % 2 === 1;
}

function featured(num) {
  if (num >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }
  let featuredNum;
  let i = 1;
  while (i < 9876543201) {
    featuredNum = i + num;
    if (oddOrMultiple(featuredNum) && uniqueNum(featuredNum)) {
      break;
    }
    i++;
  }
  return featuredNum;
}

console.log(featured(9876543202));