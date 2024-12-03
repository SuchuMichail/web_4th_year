<?php
    $arr = [];
    for($i = 0; $i < 10; $i++){
        $arr[] = mt_rand();
    }

    echo 'Было:' . PHP_EOL;
    foreach($arr as $element){
        echo $element . " ";
    }

    rsort($arr);

    echo PHP_EOL . 'Стало:' . PHP_EOL;
    foreach($arr as $element){
        echo $element . " ";
    }
    echo PHP_EOL;