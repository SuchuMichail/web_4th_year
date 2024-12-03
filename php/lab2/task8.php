<?php
    $arr =  ['orange', 'red', 'green', 'blue'];

    $new_arr = [];

    for($i = 0; $i < count($arr); $i++){
        $new_arr[$arr[$i]] = strlen($arr[$i]);
    }

    asort($new_arr);

    echo PHP_EOL . 'arr:' . PHP_EOL;
    foreach($arr as $element){
        echo $element . " ";
    }

    echo PHP_EOL . 'new_arr:' . PHP_EOL;
    foreach(array_keys($new_arr) as $element){
        echo $element . " ";
    }
    echo PHP_EOL;
