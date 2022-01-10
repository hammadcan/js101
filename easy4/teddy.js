function teddyAge() {
  let age = Math.floor(Math.random() * 120);
  if (age > 20) {
    console.log(`Teddy is ${age} years old!`);
  } else teddyAge();
}

teddyAge();