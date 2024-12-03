<?php
    $first_number = mt_rand(1, 50);
    $second_number = mt_rand(1, 50);
    $third_number = mt_rand(1, 50);

    echo "first_number = $first_number\n";
    echo "second_number = $second_number\n";
    echo "third_number = $third_number\n";

    $sum = $first_number + $second_number + $third_number;

    echo "Среднее арифметическое = " . $sum / 3 . "\n";

    echo "Сумма квадратов = " . $first_number ** 2 + 
        $second_number ** 2 + $third_number ** 2 . "\n";

    $max_number = $first_number;
    if($second_number > $max_number){
        $max_number = $second_number;
    }
    if($third_number > $max_number){
        $max_number = $third_number;
    }

    echo "Наибольшее число = $max_number \n";

    $min_number = $first_number;
    if($second_number < $min_number){
        $min_number = $second_number;
    }
    if($third_number < $min_number){
        $min_number = $third_number;
    }

    echo "Наименьшее число = $min_number \n";