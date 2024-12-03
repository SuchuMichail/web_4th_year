<?php
    $number = mt_rand();

    echo "Число $number \n";

    $str_number = (string)$number;
    $first_c = $str_number[0];
    $last_c = $str_number[strlen($str_number) - 1];

    echo "Первая цифра = " . $first_c . "\n";
    echo "Последняя цифра = " . $last_c . "\n";
    echo "Сумма первой и последней цифры = " . $first_c + $last_c . "\n";
    echo "Количество цифр = " . strlen($str_number) . "\n";