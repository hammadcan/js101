function isPalindrome(string) {
  let str = string.split("").reverse().join("");
  return str === string;
}

isPalindrome('madam');
isPalindrome('Madam');
isPalindrome("madam i'm adam");
isPalindrome('356653');

function isRealPalindrome(string) {
  let regex = /\W|_/g;
  let str = string.toLowerCase().replaceAll(regex, "").split("").reverse().join("");

  return console.log(str === string.toLowerCase().replaceAll(regex, ""));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false