const table_length = 5;
let winX = 0, winO = 0, counter = 0, round = 1;

function startGame(){
    document.body.innerHTML = '';

    let div_table = document.createElement("div");
    div_table.id = "div_table";

    let div_winners = document.createElement("div");
    div_winners.id = "div_winners";
    div_winners.innerHTML = "Раунд " + round + ".  Побед Х = " + winX + ".   Побед О = " + winO + ".";

    let div_now_winner = document.createElement("div");
    div_now_winner.id = "div_now_winner";
    div_now_winner.classList.add('hide');

    let button = document.createElement("button");
    button.id = "button";
    button.textContent = "Заново";
    button.classList.add('hide');
    button.addEventListener("click", clearTable);

    let table = document.createElement("table");
    table.id = "table";
    table.classList.add("table_center");
    for(let i = 0; i < table_length; i++){
        let tr = document.createElement("tr");
        for(let j = 0; j < table_length; j++){
            let td = document.createElement("td");
            td.id = i * table_length + j;
            td.classList.add("nobody");
            tr.append(td);
        }
        table.append(tr);
    }
    div_table.append(div_winners);
    div_table.append(table);
    div_table.append(div_now_winner);
    div_table.append(button);
    document.body.append(div_table);
}


function clearTable(){
    for(let i = 0; i < table_length * table_length; i++){
        document.getElementById(i).remove();
    }

    let div_now_winner = document.getElementById("div_now_winner");
    div_now_winner.classList.add('hide');

    let button = document.getElementById("button");
    button.classList.add('hide');

    let table = document.getElementById("table");
    for(let i = 0; i < table_length; i++){
        let tr = document.createElement("tr");
        for(let j = 0; j < table_length; j++){
            let td = document.createElement("td");
            td.id = i * table_length + j;
            td.classList.add("nobody");
            tr.append(td);
        }
        table.append(tr);
    }
    counter = 0;
}

function makeClick(event){
    let td = event.target;

    console.log(td.classList)
    if(td.classList.contains('nobody') && !td.classList.contains('noclickable')){
        let img = document.createElement("img");
        if(counter % 2 === 0){
            img.src = "hutao.jpg";
            td.classList.add('hutao');
            td.classList.remove('nobody');
        }
        else{
            img.src = "yae.jpg";
            td.classList.add('yae');
            td.classList.remove('nobody');
        }
        td.append(img);
        counter++;
        tryToFinish();
    }
}


function rawAnalyz(){
    let oneMarkHuTao = 0;
    let oneMarkYae = 0;

    for(let i = 0; i < table_length && oneMarkHuTao < 3 && oneMarkYae < 3; i++){
        oneMarkHuTao = 0;
        oneMarkYae = 0;
        for(let j = 0; j < table_length; j++){
            let td = document.getElementById(table_length * i + j);
            if(td.classList.contains("hutao")){
                oneMarkHuTao++;
                oneMarkYae = 0;

                if(oneMarkHuTao === 3){
                    break;
                }
            }
            else if(td.classList.contains("yae")){
                oneMarkYae++;
                oneMarkHuTao = 0;

                if(oneMarkYae === 3){
                    break;
                }
            }
        }
    }

    console.log("raw    " + oneMarkHuTao + " " + oneMarkYae);

    return [oneMarkHuTao, oneMarkYae];
}

function columnAnalyz(){
    let oneMarkHuTao = 0;
    let oneMarkYae = 0;

    for(let j = 0; j < table_length && oneMarkHuTao < 3 && oneMarkYae < 3; j++){
        oneMarkHuTao = 0;
        oneMarkYae = 0;
        for(let i = 0; i < table_length; i++){
            let td = document.getElementById(table_length * i + j);
            if(td.classList.contains("hutao")){
                oneMarkHuTao++;
                oneMarkYae = 0;

                if(oneMarkHuTao === 3){
                    break;
                }
            }
            else if(td.classList.contains("yae")){
                oneMarkYae++;
                oneMarkHuTao = 0;

                if(oneMarkYae === 3){
                    break;
                }
            }
        }
    }

    console.log("column    " + oneMarkHuTao + " " + oneMarkYae);

    return [oneMarkHuTao, oneMarkYae];
}

function diagonalAnalyz_Main_Top(){
    let oneMarkHuTao = 0;
    let oneMarkYae = 0;
    let diag = 0;

    for(let i = 0; i < table_length - 2 && oneMarkHuTao < 3 && oneMarkYae < 3; i++){
        diag = i;
        oneMarkHuTao = 0;
        oneMarkYae = 0;

        while(diag < table_length * table_length - i * table_length){
            let td = document.getElementById(diag);

            if(td.classList.contains("hutao")){
                oneMarkHuTao++;
                oneMarkYae = 0;

                if(oneMarkHuTao === 3){
                    break;
                }
            }
            else if(td.classList.contains("yae")){
                oneMarkYae++;
                oneMarkHuTao = 0;

                if(oneMarkYae === 3){
                    break;
                }
            }
            
            diag += table_length + 1;            
        }
    }

    console.log("diagonal    " + oneMarkHuTao + " " + oneMarkYae);

    return [oneMarkHuTao, oneMarkYae];
}

function diagonalAnalyz_Main_Bot(){
    let oneMarkHuTao = 0;
    let oneMarkYae = 0;
    let diag = 0;

    for(let i = 0; i < table_length * table_length - 2 * table_length && oneMarkHuTao < 3 && oneMarkYae < 3; i += table_length){
        diag = i;
        oneMarkHuTao = 0;
        oneMarkYae = 0;

        while(diag < table_length * table_length){
            let td = document.getElementById(diag);

            if(td.classList.contains("hutao")){
                oneMarkHuTao++;
                oneMarkYae = 0;

                if(oneMarkHuTao === 3){
                    break;
                }
            }
            else if(td.classList.contains("yae")){
                oneMarkYae++;
                oneMarkHuTao = 0;

                if(oneMarkYae === 3){
                    break;
                }
            }

            diag += table_length + 1;
        }
    }

    console.log("diagonal    " + oneMarkHuTao + " " + oneMarkYae);

    return [oneMarkHuTao, oneMarkYae];
}

function diagonalAnalyz_NotMain_Top(){
    let oneMarkHuTao = 0;
    let oneMarkYae = 0;
    let diag = 0;

    for(let i = table_length - 1; i > 1 && oneMarkHuTao < 3 && oneMarkYae < 3; i--){
        diag = i;
        oneMarkHuTao = 0;
        oneMarkYae = 0;

        while(diag <= i * table_length){
            let td = document.getElementById(diag);

            if(td.classList.contains("hutao")){
                oneMarkHuTao++;
                oneMarkYae = 0;

                if(oneMarkHuTao === 3){
                    break;
                }
            }
            else if(td.classList.contains("yae")){
                oneMarkYae++;
                oneMarkHuTao = 0;

                if(oneMarkYae === 3){
                    break;
                }
            }
            
            diag += table_length - 1;            
        }
    }

    console.log("diagonal    " + oneMarkHuTao + " " + oneMarkYae);

    return [oneMarkHuTao, oneMarkYae];
}

function diagonalAnalyz_NotMain_Bot(){
    let oneMarkHuTao = 0;
    let oneMarkYae = 0;
    let diag = 0;

    for(let i = 2 * table_length - 1; i < table_length * table_length && oneMarkHuTao < 3 && oneMarkYae < 3; i += table_length){
        diag = i;
        oneMarkHuTao = 0;
        oneMarkYae = 0;

        while(diag < table_length * table_length){
            let td = document.getElementById(diag);

            if(td.classList.contains("hutao")){
                oneMarkHuTao++;
                oneMarkYae = 0;

                if(oneMarkHuTao === 3){
                    break;
                }
            }
            else if(td.classList.contains("yae")){
                oneMarkYae++;
                oneMarkHuTao = 0;

                if(oneMarkYae === 3){
                    break;
                }
            }

            diag += table_length - 1;
        }
    }

    console.log("diagonal    " + oneMarkHuTao + " " + oneMarkYae);

    return [oneMarkHuTao, oneMarkYae];
}


function tryToFinish(){
    let arrayRow = rawAnalyz();
    let arrayColumn = columnAnalyz();
    let arrayDiagonal_Main_Top = diagonalAnalyz_Main_Top();
    let arrayDiagonal_Main_Bot = diagonalAnalyz_Main_Bot();
    let arrayDiagonal_NotMain_Top = diagonalAnalyz_NotMain_Top();
    let arrayDiagonal_NotMain_Bot = diagonalAnalyz_NotMain_Bot();

    if(arrayRow[0] === 3 || arrayRow[1] === 3 ||
        arrayColumn[0] === 3 || arrayColumn[1] === 3 ||
        arrayDiagonal_Main_Top[0] === 3 || arrayDiagonal_Main_Top[1] === 3 ||
        arrayDiagonal_Main_Bot[0] === 3 || arrayDiagonal_Main_Bot[1] === 3 ||
        arrayDiagonal_NotMain_Top[0] === 3 || arrayDiagonal_NotMain_Top[1] === 3 ||
        arrayDiagonal_NotMain_Bot[0] === 3 || arrayDiagonal_NotMain_Bot[1] === 3
    ){
        let div_now_winner = document.getElementById("div_now_winner");
        let div_winners = document.getElementById("div_winners");
        let button = document.getElementById("button");

        for(let i = 0; i < table_length; i++){
            for(let j = 0; j < table_length; j++){
                let td = document.getElementById(table_length * i + j);
                td. classList.add('noclickable');
            }
        }
    
        if(arrayRow[0] === 3 || arrayColumn[0] === 3 || 
            arrayDiagonal_Main_Top[0] === 3 || arrayDiagonal_Main_Bot[0] === 3 ||
            arrayDiagonal_NotMain_Top[0] === 3 || arrayDiagonal_NotMain_Bot[0] === 3
        ){
            div_now_winner.textContent = "X won!";
            winX++;
        }
        else if(arrayRow[1] === 3 || arrayColumn[1] === 3 || 
            arrayDiagonal_Main_Top[1] === 3 || arrayDiagonal_Main_Bot[1] === 3 ||
            arrayDiagonal_NotMain_Top[1] === 3 || arrayDiagonal_NotMain_Bot[1] === 3
        ){
            div_now_winner.textContent = "O won!";
            winO++;
        }

        div_now_winner.classList.remove('hide');
        round++;
        div_winners.innerHTML = "Раунд " + round + ".  Побед Х = " + winX + ".   Побед О = " + winO + ".";
        button.classList.remove('hide');
        
    }
    else if(counter === table_length * table_length){
        let div_now_winner = document.getElementById("div_now_winner");
        let button = document.getElementById("button");

        div_now_winner.classList.remove('hide');
        div_now_winner.textContent = "Ничья!";
        round++;
        div_winners.innerHTML = "Раунд " + round + ".  Побед Х = " + winX + ".   Побед О = " + winO + ".";
        button.classList.remove('hide');
    }
}

document.addEventListener("click", makeClick);


startGame();