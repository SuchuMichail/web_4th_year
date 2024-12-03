<?php
    $arr = [];
    for($i = 0; $i < 10; $i++){
        $arr[] = mt_rand();
    }

    echo 'Исходный массив:' . PHP_EOL;

    foreach($arr as $element){
        echo $element . " ";
    }

    $new_arr = [];
    foreach($arr as $element){
        if(strpos((string)$element,'5') !== false){
            $new_arr[] = $element;
        }
    }

    echo PHP_EOL . 'Полученный массив:' . PHP_EOL;

    foreach($new_arr as $element){
        echo $element . " ";
    }

    echo PHP_EOL;