function swap(string) {
  let array = string.split(" ");
  return array.map(el => {
    if (el.length === 1) {
      return el;
    }
    let first = el.charAt(0);
    let last = el.charAt(el.length - 1);
    return last + el.substring(1, el.length - 1) + first;
  });
}

console.log(swap('Oh what a wonderful day it is'));