<?php
    $arr = [];
    for($i = 0; $i < 10; $i++){
        $arr[] = mt_rand(-100,100);
    }

    $count = 0;
    echo PHP_EOL . 'arr:' . PHP_EOL;
    foreach($arr as $element){
        echo $element . " ";
        if($element < 0){
            $count++;
        }
    }

    echo PHP_EOL . "Count of negative numbers = $count" . PHP_EOL;