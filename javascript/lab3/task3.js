let str = 'my name is';
console.log('str = ' + str);
console.log('length of str = ' + str.length);
console.log('last symbol = ' + str[str.length - 1]);

for(let i = str.length - 1; i >= 0; i--){
    console.log(str[i] + ' ');
}