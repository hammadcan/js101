function staggeredCase(string) {
  let counter = 0;
  return string.split("").map(letter => {
    if (/[a-z]/i.test(letter)) {
      counter += 1;
      return counter % 2 === 1 ? letter.toUpperCase() : letter.toLowerCase();
    } else {
      return letter;
    }
  }).join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);