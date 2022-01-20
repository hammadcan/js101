let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, array) {
  let transactionsArray = [];

  for (let counter = 0; counter < array.length; counter++) {
    let currentObject = array[counter];
    let idNum = currentObject.id;

    if (idNum === id) {
      transactionsArray.push(currentObject);
    }
  }
  return transactionsArray;
}

function itemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce((sum, transaction) => {
    if (transaction.movement === "in") {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  },
  0
  );
  return quantity > 0;
}

console.log(itemAvailable(103, transactions));