function wordSizes(string) {
  let size = {};
  let word = string.replace(/[^a-z\s]/gi, '');
  let singleWords = word.split(" ").map(word => word.length.toString());
  singleWords.forEach(num => size[num] = size[num] + 1 || 1);
  return console.log(size);
}

wordSizes('Four score and seven.');
wordSizes('Hey diddle diddle, the cat and the fiddle!');
wordSizes("What's up doc?");
wordSizes('');