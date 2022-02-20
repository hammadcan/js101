function buyFruit(array) {
  let groceryList = [];

  array.forEach(keyValue => {
    let [key, value] = keyValue;

    while (value > 0) {
      groceryList.push(key);
      value--;
    }
  });

  return groceryList;
}

console.log(buyFruit(([['apple', 3], ['orange', 1], ['banana', 2]])));