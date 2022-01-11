function swapName(name) {
  let nameArray = name.split(" ");
  let lastName = nameArray.pop();
  let restName = nameArray.join(" ");
  return `${lastName}, ${restName}`;
}

console.log(swapName('Karl Oskar Henriksson Ragvals'));