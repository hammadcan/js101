function shortLongShort(stringOne, stringTwo) {
  if (stringOne.length > stringTwo.length) {
    console.log(`${stringTwo}${stringOne}${stringTwo}`);
  } else {
    console.log(`${stringOne}${stringTwo}${stringOne}`);
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"