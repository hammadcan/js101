function swapCase(string) {
  return string.split("").map(letter => {
    if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    } else if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    }
  }).join("");
}

console.log(swapCase("Tonight on XYZ-TV"));