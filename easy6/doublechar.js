let doubleConsonants = str => {
  let regex = /[^aeiou0-9\W]/;
  return str.split('').map(char => {
    return char.match(regex) ? char + char : char;
  }).join('');
};

console.log(doubleConsonants('July 4th'));