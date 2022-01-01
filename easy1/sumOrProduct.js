let input = require('readline-sync')
const {question} = require("readline-sync");

function sumOrProduct() {
    let question = input.question('Please enter an integer greater than 0: ');
    let sumProduct = input.question('Enter "s" to compute the sum, or "p" to compute the product. ');
    switch (sumProduct) {
        case "s":
            console.log(sumTotal(question));
            break;
        case "p":
            console.log(productTotal(question));
            break;
    }
}

function sumTotal(number) {
    let sTotal = 0;
    for (let i = Number.parseInt(number); i > 0; i--) {
        sTotal = i + sTotal;
    }
    return `The sum of the integers between 1 and ${number} is ${sTotal}.`;
}
function productTotal(number) {
    let pTotal = 1;
    for (let p = Number.parseInt(number); p > 0; p--) {
        pTotal = p * pTotal;
    }
    return `The product of the integers between 1 and ${number} is ${pTotal}.`
}

sumOrProduct();
