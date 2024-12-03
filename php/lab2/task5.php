<?php
    $length = 3;
    $permitted_chars = 'abcdefghijklmnopqrstuvwxyz';

    $arr1 = [];
    $arr2 = [];
    $arr3 = [];

    for($i = 0; $i < $length; $i++){
        $arr1[] = mt_rand(0,9);
        $arr2[] = $permitted_chars[mt_rand(0,25)];
        $arr3[] = $arr1[$i];
        $arr3[] = $arr2[$i];
    }

    echo 'Массив 1:' . PHP_EOL;

    foreach($arr1 as $element){
        echo $element . " ";
    }

    echo PHP_EOL . 'Массив 2:' . PHP_EOL;

    foreach($arr2 as $element){
        echo $element . " ";
    }

    echo PHP_EOL . 'Массив 3:' . PHP_EOL;

    foreach($arr3 as $element){
        echo $element . " ";
    }

    echo PHP_EOL;