let min = -100;
let max = 99;

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let number1 = randomInteger(min, max);
let number2 = randomInteger(min, max);
console.log('number1 = ' + number1);
console.log('number2 = ' + number2);

console.log('number1 % number2 = ' + (number1 % number2));
console.log('sum = ' + (number1 + number2));
console.log('prod = ' + (number1 * number2));