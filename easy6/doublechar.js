function repeater(string) {
  return string.split("").map(character => character + character).join("");
}

console.log(repeater(''));