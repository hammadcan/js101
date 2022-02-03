function longestSentence(str) {
  let sentenceArr = [];
  let temp = [];
  let wordNumber = 0;
  let wordsArr = str.split(' ');

  wordsArr.forEach(word => {
    temp.push(word);
    if (word.endsWith('!') || word.endsWith('?') || word.endsWith('.')) {
      if (temp.length > sentenceArr.length) sentenceArr = temp;
      if (sentenceArr.length > wordNumber) wordNumber = sentenceArr.length;
      temp = [];
    }
  });
  console.log(sentenceArr.join(' '));
  console.log(`The longest sentence has ${wordNumber} words`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

console.log(longestSentence(longText));