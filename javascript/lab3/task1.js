let min = -100;
let max = 99;

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let number = randomInteger(min, max);
console.log('numer = ' + number);

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