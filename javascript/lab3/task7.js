let min = -100;
let max = 99;

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let number1 = randomInteger(min, max);
let number2 = randomInteger(min, max);
let number3 = randomInteger(min, max);
console.log('number1 = ' + number1);
console.log('number2 = ' + number2);
console.log('number3 = ' + number3);

console.log('среднее арифметическое = ' + (number1 + number2 + number3) / 3);
console.log('сумма квадратов = ' + (number1 ** 2 + number2 ** 2 + number3 ** 2));

let max_number = number1;
let min_number = number1;
if(number2 > max_number){
    max_number = number2;
}
if(number3 > max_number){
    max_number = number3;
}

if(number2 < min_number){
    min_number = number2;
}
if(number3 < min_number){
    min_number = number3;
}

console.log('max = ' + max_number);
console.log('min = ' + min_number);