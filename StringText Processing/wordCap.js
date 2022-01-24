function wordCap(string) {
  return string.split(" ").map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

console.log(wordCap('this is a "quoted" word'));