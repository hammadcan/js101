function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum += 1) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    let lastRow = rows[rows.length - 1];
    startInteger = lastRow[lastRow.length - 1] + 2;
  }

  let finalRow = rows.pop();
  let finalRowSum = finalRow.reduce((a ,b) => a + b);
  return finalRowSum;
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

console.log(sumEvenNumberRow(1));
console.log(sumEvenNumberRow(2));
console.log(sumEvenNumberRow(4));

console.log(createRow(2,1));
console.log(createRow(4,2));
console.log(createRow(8,3));