function isPalindromicNumber(number) {
  let string = number.toString();
  let str = string.split("").reverse().join("");
  return console.log(str === string);
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
