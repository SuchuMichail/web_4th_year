<?php
    $arr = [];
    for($i = 0; $i < 8; $i++){
        $arr[] = mt_rand(0,50);
    }

    echo PHP_EOL . 'arr:' . PHP_EOL;
    foreach($arr as $element){
        echo $element . " ";
    }

    $first = array_slice($arr, 0, 4);
    $second = array_slice($arr, 4, 4);

    $first_sum = array_sum($first);
    $second_sum = array_sum($second);

    echo PHP_EOL . "first sum = $first_sum" . PHP_EOL;
    echo "second sum = $second_sum" . PHP_EOL;
    echo "after dividing = " . $first_sum / $second_sum . PHP_EOL;
