function logInBox(string) {
  let boxWidth = "-";
  let box = boxWidth.repeat(string.length + 1);
  let emptyString = " ";
  let body = emptyString.repeat(string.length + 1);
  console.log(`+${box}+`);
  console.log(`|${body}|`);
  console.log(`|${string} |`);
  console.log(`|${body}|`);
  console.log(`+${box}+`);
}

logInBox('HELLO');