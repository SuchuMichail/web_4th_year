<?php
    $first_number = mt_rand(1, 100);
    $second_number = mt_rand(1, 100);

    echo "first_number = $first_number\n";
    echo "second_number = $second_number\n";

    echo "Остаток от деления первого числа на второе = " . 
        $first_number % $second_number . "\n";
    echo "Сумма чисел = " . $first_number + $second_number . "\n";
    echo "Произведение чисел = " . $first_number * $second_number . "\n";