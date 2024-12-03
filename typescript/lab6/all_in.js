function randomInteger(min, max) {
    // случайное число от min до (max+1)
    var rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
///////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 1~~~~~~~~~~~~~');
var str_arr = ['Привет, ', 'мир', '!'];
var helloworld = '';
for (var _i = 0, str_arr_1 = str_arr; _i < str_arr_1.length; _i++) {
    var element = str_arr_1[_i];
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
var str = '023m0df0dfg0';
var num_arr = [];
for (var i = 0; i < str.length; i++) {
    if (str[i] == '0') {
        num_arr.push(i);
    }
}
console.log(num_arr);
console.log();
////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 4~~~~~~~~~~~~~');
num_arr = [];
for (var i = 0; i < 10; i++) {
    num_arr.push(randomInteger(0, 1000000));
}
console.log('Исходный массив:');
console.log(num_arr);
var new_arr = [];
for (var _a = 0, num_arr_1 = num_arr; _a < num_arr_1.length; _a++) {
    var element = num_arr_1[_a];
    if (String(element).indexOf('5') != -1 || String(element).indexOf('0') != -1) {
        new_arr.push(element);
    }
}
console.log('Полученный массив:');
console.log(new_arr);
console.log();
/////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 5~~~~~~~~~~~~~');
var str_length = 3;
var permitted_chars = 'abcdefghijklmnopqrstuvwxyz';
var arr_1 = [];
var arr2 = [];
var arr3 = [];
for (var i = 0; i < str_length; i++) {
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
for (var i = 0; i < 10; i++) {
    num_arr.push(randomInteger(-1000, 1000));
}
console.log('Было:');
console.log(num_arr);
num_arr.sort(function (a, b) { return b - a; });
console.log('Стало:');
console.log(num_arr);
console.log();
////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 7~~~~~~~~~~~~~');
var arr1 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
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
str_arr = ['orange', 'red', 'green', 'blue'];
var cloned_arr = str_arr.slice();
cloned_arr.sort(function (a, b) { return a.length - b.length; });
console.log('arr:');
console.log(str_arr);
console.log('new_arr:');
console.log(cloned_arr);
console.log();
///////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 9~~~~~~~~~~~~~');
num_arr = [];
for (var i = 0; i < 8; i++) {
    num_arr.push(randomInteger(0, 50));
}
console.log('arr:');
console.log(num_arr);
var first = num_arr.slice(0, 4);
var second = num_arr.slice(4);
var first_sum = 0;
var second_sum = 0;
for (var _b = 0, first_1 = first; _b < first_1.length; _b++) {
    var element = first_1[_b];
    first_sum += element;
}
for (var _c = 0, second_1 = second; _c < second_1.length; _c++) {
    var element = second_1[_c];
    second_sum += element;
}
console.log("first sum = " + first_sum);
console.log("second sum = " + second_sum);
console.log("after dividing = " + first_sum / second_sum);
console.log();
////////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 10~~~~~~~~~~~~~');
num_arr = [];
for (var i = 0; i < 10; i++) {
    num_arr.push(randomInteger(-100, 100));
}
var count = 0;
console.log('arr:');
console.log(num_arr);
for (var _d = 0, num_arr_2 = num_arr; _d < num_arr_2.length; _d++) {
    var element = num_arr_2[_d];
    if (element < 0) {
        count++;
    }
}
console.log("Count of negative numbers = " + count);
console.log();
//////////////////////////////////////////////////////////////////////////////////
console.log('~~~~~~~~~~~~~Task 11~~~~~~~~~~~~~');
num_arr = [];
for (var i = 0; i < 10; i++) {
    num_arr.push(randomInteger(-50, 50));
}
console.log('arr:');
console.log(num_arr);
new_arr = [];
for (var _e = 0, num_arr_3 = num_arr; _e < num_arr_3.length; _e++) {
    var element = num_arr_3[_e];
    if (element > 0 && element % 2 == 0) {
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
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var first_pos = -1;
var last_pos = -1;
var flag_is_first = true;
for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
        if (str[i] === numbers[j]) {
            if (flag_is_first === true) {
                first_pos = i;
                flag_is_first = false;
            }
            last_pos = i;
            break;
        }
    }
}
console.log("str = " + str);
if (last_pos !== -1) {
    first_pos++;
    last_pos++;
    console.log("first_position = " + first_pos);
    console.log("last_position = " + last_pos);
}
else {
    console.log("first_position = " + null);
    console.log("last_position = " + null);
}
console.log();
