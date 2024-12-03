<?php
    //$first_number = mt_rand(1, 100);
    //$second_number = mt_rand(1, 100);

    $first_number = 200;
    $second_number = 2;

    echo "first_number = $first_number\n";
    echo "second_number = $second_number\n";

    if(((string)$first_number)[0] == ((string)$second_number)[0]){
        echo "Первые цифры чисел совпадают\n";
    }
    else{
        echo "Первые цифры чисел не совпадают\n";
    }

    if($first_number % $second_number == 0){
        echo "Первое число без остатка делится на второе\n";
    }
    else{
        echo "Первое число не делится на второе без остатка\n";
    }

    echo "Наибольшее число = ";
    if($first_number > $second_number){
        echo $first_number . "\n";
    }
    else{
        echo $second_number . "\n";
    }