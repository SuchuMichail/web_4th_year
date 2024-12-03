function randomInteger() {
    // let rand = min + Math.random() * (max + 1 - min);
    // return Math.floor(rand);
    let digits = new Set();
    while (digits.size < 4) {
        digits.add(Math.floor(Math.random() * 9) + 1);
    }
    let secretNumber = Array.from(digits).join('');
    return secretNumber;
}

const rules = `
Правила игры "Быки и коровы:
1. Компьютер загадывает четырёхзначное число без повторяющихся цифр.
2. Ваша задача - угадать это число.
3. После каждой попытки вы получаете информацию о количестве "быков" и "коров":
* "Бык" означает, что цифра есть в загаданном числе и стоит на правильном месте.
* "Корова" означает, что цифра есть в загаданном числе, но стоит на неправильном месте.
4. Игра продолжается до тех пор, пока вы не угадаете число.
`;

let number;

let button_check = document.getElementById("b_check");
let button_rules = document.getElementById("b_rules");
let button_restart = document.getElementById("b_restart");

button_check.textContent = "Check";
button_rules.textContent = "Rules";
button_restart.textContent = "Restart";

restart();

function restart(){
    let history = document.getElementById("history");
    history.innerText = '';

    let input = document.getElementById("input");
    input.value = '';

    number = randomInteger();

    let debug = document.getElementById("debug");
    debug.innerText = number;
}

function showRules(){
    alert(rules);
}

function check(){
    let input = document.getElementById("input");
    //let result = '';
    let woo_cow = 0, man_cow = 0;
        
    console.log("input.value = " + input.value)

    if(input.value.length != 4) return;

    //let count = 0;
/*
    for(let i = 0; i < 4; i++){
        console.log(input.value[i] + "   " + number[i])
        if(input.value[i] == number[i]){
            result += 'Б';
            count++;
        }
        else if(number.includes(input.value[i])){
            result += 'К';
        }
        else{
            result += '*';
        }
    }    */

    for(let i = 0; i < 4; i++){
        if(input.value[i] == number[i]){
            man_cow++;
        }
        else if(number.includes(input.value[i])){
            woo_cow++;
        }
    }  

    let history = document.getElementById("history");
    history.innerText = "\n" + input.value + ". Быков: " + man_cow + ". Коров: " + woo_cow + "." + history.innerText;

    if(man_cow == 4){
        alert("You win!")
        input.disabled = true;
    }
}

