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