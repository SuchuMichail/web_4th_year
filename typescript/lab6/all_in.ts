function randomInteger(min : number, max : number) : number {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

///////////////////////////////////////////////////////////////////////////////

console.log('~~~~~~~~~~~~~Task 1~~~~~~~~~~~~~');
let str_arr : string[] = ['Привет, ', 'мир', '!'];
let helloworld : string = '';

for(let element of str_arr){
    helloworld += element;
}

console.log(helloworld);
console.log();

////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 2~~~~~~~~~~~~~');
str_arr = ['Привет, ', 'мир', '!'];

console.log('Было:');
console.log(str_arr);

console.log();

str_arr[0] = 'Пока, ';

console.log('Стало:');
console.log(str_arr);

console.log();

////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 3~~~~~~~~~~~~~');
let str : string = '023m0df0dfg0';

let num_arr : number[] = [];

for(let i : number = 0; i < str.length; i++){
    if(str[i] == '0'){
        num_arr.push(i);
    }
}

console.log(num_arr);
console.log();

////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 4~~~~~~~~~~~~~');
num_arr = [];
for(let i : number = 0; i < 10; i++){
    num_arr.push(randomInteger(0,1000000));
}

console.log('Исходный массив:');
console.log(num_arr);

let new_arr : number[] = [];
for(let element of num_arr){
    if(String(element).indexOf('5') != -1 || String(element).indexOf('0') != -1){
        new_arr.push(element);
    }
}

console.log('Полученный массив:');
console.log(new_arr);
console.log();

/////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 5~~~~~~~~~~~~~');
let str_length : number = 3;
let permitted_chars : string = 'abcdefghijklmnopqrstuvwxyz';

let arr_1 : number[] = [];
let arr2 : string[] = [];
let arr3 : string[] = [];

for(let i : number = 0; i < str_length; i++){
    arr_1.push(randomInteger(0, 9));
    arr2.push(permitted_chars[randomInteger(0, 24)]);
    arr3.push(String(arr_1[i]));
    arr3.push(arr2[i]);
}

console.log('Массив 1:');
console.log(arr_1);

console.log('Массив 2:');
console.log(arr2);

console.log('Массив 3:');
console.log(arr3);

console.log();

///////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 6~~~~~~~~~~~~~');
num_arr = [];
for(let i : number = 0; i < 10; i++){
    num_arr.push(randomInteger(-1000, 1000));
}

console.log('Было:');
console.log(num_arr);

num_arr.sort((a, b) => b - a);

console.log('Стало:');
console.log(num_arr);
console.log();

////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 7~~~~~~~~~~~~~');
let arr1 : string[] = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
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
str_arr =  ['orange', 'red', 'green', 'blue'];

let cloned_arr : string[] = str_arr.slice();
cloned_arr.sort((a,b) => a.length - b.length);

console.log('arr:');
console.log(str_arr);

console.log('new_arr:');
console.log(cloned_arr);
console.log();

///////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 9~~~~~~~~~~~~~');
num_arr = [];
for(let i : number = 0; i < 8; i++){
    num_arr.push(randomInteger(0,50));
}

console.log('arr:');
console.log(num_arr);

let first : number[] = num_arr.slice(0, 4);
let second : number[] = num_arr.slice(4);

let first_sum : number = 0;
let second_sum : number = 0;

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
num_arr = [];
for(let i : number = 0; i < 10; i++){
    num_arr.push(randomInteger(-100,100));
}

let count : number = 0;
console.log('arr:');
console.log(num_arr);
for(let element of num_arr){
    if(element < 0){
        count++;
    }
}

console.log("Count of negative numbers = " + count);
console.log();

//////////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 11~~~~~~~~~~~~~');
num_arr = [];
for(let i : number = 0; i < 10; i++){
    num_arr.push(randomInteger(-50,50));
}

console.log('arr:');
console.log(num_arr);

new_arr = [];
for(let element of num_arr){
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

let numbers : string[] = ['0','1','2','3','4','5','6','7','8','9'];

let first_pos : number = -1;
let last_pos : number = -1;
let flag_is_first : boolean = true;

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

console.log("str = " + str);

if(last_pos !== -1){
    first_pos++;
    last_pos++;
    console.log("first_position = " + first_pos);
    console.log("last_position = " + last_pos);
}
else{
    console.log("first_position = " + null);
    console.log("last_position = " + null);
}

console.log();