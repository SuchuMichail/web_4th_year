function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

///////////////////////////////////////////////////////////////////////////////

console.log('~~~~~~~~~~~~~Task 1~~~~~~~~~~~~~');
let arr = ['Привет, ', 'мир', '!'];
let helloworld = '';

for(let element of arr){
    helloworld += element;
}

console.log(helloworld);
console.log();

////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 2~~~~~~~~~~~~~');
$arr = ['Привет, ', 'мир', '!'];

console.log('Было:');
console.log(arr);

console.log();

arr[0] = 'Пока, ';

console.log('Стало:');
console.log(arr);

console.log();

////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 3~~~~~~~~~~~~~');
let str = '023m0df0dfg0';

arr = [];

for(let i = 0; i < str.length; i++){
    if(str[i] == 0){
        arr.push(i);
    }
}

console.log(arr);
console.log();

////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 4~~~~~~~~~~~~~');
arr = [];
for(let i = 0; i < 10; i++){
    arr.push(randomInteger(0,1000000));
}

console.log('Исходный массив:');
console.log(arr);

let new_arr = [];
for(let element of arr){
    if(String(element).includes('5') != false){
        new_arr.push(element);
    }
}

console.log('Полученный массив:');
console.log(new_arr);
console.log();

/////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 5~~~~~~~~~~~~~');
let length = 3;
let permitted_chars = 'abcdefghijklmnopqrstuvwxyz';

let arr1 = [];
let arr2 = [];
let arr3 = [];

for(let i = 0; i < length; i++){
    arr1.push(randomInteger(0, 8));
    arr2.push(permitted_chars[randomInteger(0, 24)]);
    arr3.push(arr1[i]);
    arr3.push(arr2[i]);
}

console.log('Массив 1:');
console.log(arr1);

console.log('Массив 2:');
console.log(arr2);

console.log('Массив 3:');
console.log(arr3);

console.log();

///////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 6~~~~~~~~~~~~~');
arr = [];
for(let i = 0; i < 10; i++){
    arr.push(randomInteger(-1000, 1000));
}

console.log('Было:');
console.log(arr);

arr.sort((a, b) => b - a);

console.log('Стало:');
console.log(arr);
console.log();

////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 7~~~~~~~~~~~~~');
arr1 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
arr2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

arr1.sort();
arr2.sort();

console.log('arr1:');
console.log(arr1);
console.log();
console.log('arr2:');
console.log(arr2);
console.log();

///////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 8~~~~~~~~~~~~~');
arr =  ['orange', 'red', 'green', 'blue', 'pink'];

new_arr = arr.toSorted((a,b) => a.length - b.length);

console.log('arr:');
console.log(arr);

console.log('new_arr:');
console.log(new_arr);
console.log();

///////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 9~~~~~~~~~~~~~');
arr = [];
for(let i = 0; i < 8; i++){
    arr.push(randomInteger(0,49));
}

console.log('arr:');
console.log(arr);

let first = arr.slice(0, 4);
let second = arr.slice(4);

let first_sum = 0;
let second_sum = 0;

for(let element of first){
    first_sum += element;
}
for(let element of second){
    second_sum += element;
}

console.log("first sum = " + first_sum);
console.log("second sum = " + second_sum);
console.log("after dividing = " + first_sum / second_sum);
console.log();

////////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 10~~~~~~~~~~~~~');
arr = [];
for(let i = 0; i < 10; i++){
    arr.push(randomInteger(-100,99));
}

let count = 0;
console.log('arr:');
console.log(arr);
for(let element of arr){
    if(element < 0){
        count++;
    }
}

console.log("Count of negative numbers = " + count);
console.log();

//////////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 11~~~~~~~~~~~~~');
arr = [];
for(let i = 0; i < 10; i++){
    arr.push(randomInteger(-50,49));
}

console.log('arr:');
console.log(arr);

new_arr = [];
for(let element of arr){
    if(element > 0 && element % 2 == 0){
        new_arr.push(element);
    }
}

console.log('new_arr:');
console.log(new_arr);
console.log();

///////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 12~~~~~~~~~~~~~');
str = 'abcd4f6hij1';
//$str = 'dfbdfvbsfvfdv';
//$str = '0p';

let numbers = ['0','1','2','3','4','5','6','7','8','9'];

let first_pos = -1;
let last_pos = -1;
let flag_is_first = true;

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < numbers.length; j++){
        if(str[i] === numbers[j]){
            if(flag_is_first === true){
                first_pos = i;
                flag_is_first = false;
            }
            last_pos = i;
            break;
        }
    }
}

if(last_pos === -1){
    first_pos = 'null';
    last_pos = 'null';
}
else{
    first_pos++;
    last_pos++;
}
console.log("str = " + str);
console.log("first_position = " + first_pos);
console.log("last_position = " + last_pos);
console.log();