function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~Task1~~~~~~~~~~~~~~~~~~~~~~~~");
console.log();

let min = -100;
let max = 99;

let number = randomInteger(min, max);
console.log('number = ' + number);

if(number < 0){
    console.log('number is negative');
}
else{
    console.log('number is not negative');
}

if(number % 2 == 0){
    console.log('number is even');
}
else{
    console.log('number is odd');
}

console.log();

///////////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~Task2~~~~~~~~~~~~~~~~~~~~~~~~");
console.log();

let new_max = 1000;
number = randomInteger(min, new_max);
console.log('number = ' + number);

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

console.log();

//////////////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~Task3~~~~~~~~~~~~~~~~~~~~~~~~");
console.log();

let str = 'my name is';
console.log('str = ' + str);
console.log('length of str = ' + str.length);
console.log('last symbol = ' + str[str.length - 1]);

for(let i = str.length - 1; i >= 0; i--){
    console.log(str[i] + ' ');
}

console.log();

///////////////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~Task4~~~~~~~~~~~~~~~~~~~~~~~~");
console.log();
let str1 = 'first';
let str2 = 'second';
console.log('str1 = ' + str1);
console.log('str2 = ' + str2);
console.log(str1 + '&' + str2);

if(str1.length > str2.length){
    console.log(str1);
}
else{
    console.log(str2);
}
console.log();

//////////////////////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~Task5~~~~~~~~~~~~~~~~~~~~~~~~");
console.log();

let number1 = randomInteger(min, max);
let number2 = randomInteger(min, max);

number1 = 100;
number2 = 10;

console.log('number1 = ' + number1);
console.log('number2 = ' + number2);

if(String(number1)[0] == String(number2)[0] && String(number2)[0] == '-'){
    if(String(number1)[1] == String(number2)[1]){
        console.log('первые цифры совпадают');
    }
    else{
        console.log('первые цифры не совпадают');
    }
}
else if(String(number1)[0] == '-'){
    if(String(number1)[1] == String(number2)[0]){
        console.log('первые цифры совпадают');
    }
    else{
        console.log('первые цифры не совпадают');
    }
}
else if(String(number2)[0] == '-'){
    if(String(number1)[0] == String(number2)[1]){
        console.log('первые цифры совпадают');
    }
    else{
        console.log('первые цифры не совпадают');
    }
}
else{
    if(String(number1)[0] == String(number2)[0]){
        console.log('первые цифры совпадают');
    }
    else{
        console.log('первые цифры не совпадают');
    }
}


if(number1 % number2 == 0){
    console.log('первое число без остатка делится на второе');
}
else{
    console.log('первое число не делится без остатка на второе');
}

let max_number;
if(number1 > number2){
    max_number = number1;
}
else{
    max_number = number2;
}
console.log('max number = ' + max_number);

console.log();

//////////////////////////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~Task6~~~~~~~~~~~~~~~~~~~~~~~~");
console.log();
number1 = randomInteger(1, 100);
number2 = randomInteger(1, 100);
console.log('number1 = ' + number1);
console.log('number2 = ' + number2);

console.log('number1 % number2 = ' + (number1 % number2));
console.log('sum = ' + (number1 + number2));
console.log('prod = ' + (number1 * number2));

console.log();

//////////////////////////////////////////////////////////////////////////
console.log("~~~~~~~~~~~~~~~~~~~~~~~~Task7~~~~~~~~~~~~~~~~~~~~~~~~");
console.log();

number1 = randomInteger(1, 50);
number2 = randomInteger(1, 50);
let number3 = randomInteger(1, 50);
console.log('number1 = ' + number1);
console.log('number2 = ' + number2);
console.log('number3 = ' + number3);

console.log('среднее арифметическое = ' + (number1 + number2 + number3) / 3);
console.log('сумма квадратов = ' + (number1 ** 2 + number2 ** 2 + number3 ** 2));

max_number = number1;
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

console.log();