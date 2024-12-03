<?php
    $arr = ['Привет, ', 'мир', '!'];
    
    echo 'Было:' . PHP_EOL;

    foreach($arr as $element){
        echo $element;
    }

    echo PHP_EOL;

    $arr[0] = 'Пока, ';

    echo 'Стало:' . PHP_EOL;
/*
    foreach($arr as $element){
        echo $element;
    }*/
    var_dump($arr);

    echo PHP_EOL;