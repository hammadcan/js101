function twice(int) {
  let string = int.toString();
  let firstHalf = string.slice(0, string.length / 2);
  let secondHalf = string.slice(string.length / 2, string.length);
  if (firstHalf === secondHalf) {
    console.log(int);
  } else console.log(int * 2);
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676