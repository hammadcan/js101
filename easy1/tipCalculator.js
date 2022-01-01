let input = require('readline-sync');

function tip() {
    let bill = input.question('What is the bill? ');
    let tipPercentage = input.question('What is the tip percentage? ');
    let newTip = (tipPercentage/100) * bill;
    let finalBill = +newTip + +bill
    console.log(`The tip is $${newTip}\nThe total is $${finalBill}`)
}
tip()

