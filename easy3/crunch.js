let double = [];

function crunch(string) {
  let array = string.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      double.push(array[i]);
    }
  }
  console.log(double.join(""));
  double = [];
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""