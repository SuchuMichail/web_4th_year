let min = -100;
let max = 99;

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let number = randomInteger(min, max);
console.log('numer = ' + number);

let string_number = String(number);
let first_digit, last_digit, count_of_digits;

if(string_number[0] == '-' || string_number[0] == '+'){
    first_digit = string_number[1];
    count_of_digits = -1;
}
else{
    first_digit = string_number[0];
    count_of_digits = 0;
}
console.log('first digit of number = ' + first_digit);

last_digit = string_number[string_number.length - 1];
console.log('last digit of number = ' + last_digit);

console.log('sum of first and last digits = ' + (Number(first_digit) + Number(last_digit)));

count_of_digits += string_number.length;
console.log('count of digits = ' + count_of_digits);
