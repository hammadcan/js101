function dms(number) {
  let degree = Math.floor(number);
  let minutes = Math.floor((number - degree) * 60);
  let seconds = Math.floor((((number - degree) * 60) - minutes) * 60);
  return console.log(`${degree}˚${(minutes)}'${seconds}"`);
}


