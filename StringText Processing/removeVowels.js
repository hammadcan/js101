function removeVowels(array) {
  let regex = /[aeiou]/gi;
  return array.map(word => word.replace(regex, ""));
}