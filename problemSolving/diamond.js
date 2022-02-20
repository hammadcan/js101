function diamond(num) {
  if (num === 1) {
    console.log('*');
  }
  let asterisk = 0;
  while (asterisk < num - 1) {
    for (let count = Math.ceil(num / 2); count > 0; count--) {
      console.log('*'.padStart(count) + '*'.repeat(asterisk));
      asterisk += 2;
    }
  }
  asterisk = num - 3;
  while (asterisk >= 0) {
    for (let count = 2; count <= Math.ceil(num / 2); count++) {
      console.log('*'.padStart(count) + '*'.repeat(asterisk));
      asterisk -= 2;
    }
  }
}

diamond(5);