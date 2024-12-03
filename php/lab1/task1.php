<?php
    $number = mt_rand(-100, 100);

    echo "Число $number \n";

    if ($number < 0) {
        echo "Отрицательное\n";
    }
    else{
        echo "Положительное\n";
    }

    if ($number % 2 == 0){
        echo "Чётное\n";
    }
    else{
        echo "Нечётное\n";
    }