<?php
    $arr = [];
    for($i = 0; $i < 10; $i++){
        $arr[] = mt_rand(-50,50);
    }

    echo PHP_EOL . 'arr:' . PHP_EOL;
    foreach($arr as $element){
        echo $element . " ";
    }

    $new_arr = [];
    foreach($arr as $element){
        if($element > 0 or $element % 2 == 0){
            $new_arr[] = $element;
        }
    }

    echo PHP_EOL . 'new_arr:' . PHP_EOL;
    foreach($new_arr as $element){
        echo $element . " ";
    }