function stringy(num) {
  let oneZero = "1" + "0";
  let repeat = oneZero.repeat(num / 2);
  if (num % 2 !== 0) {
    console.log(`${repeat}1`);
  } else console.log(`${repeat}`);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"