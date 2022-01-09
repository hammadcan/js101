function cleanUp(string) {
  const regex = /\W+|[0-9]+|_+/g;
  string = string.replace(regex," ");
  return console.log(string);
}

cleanUp("---what's my +*& line?");