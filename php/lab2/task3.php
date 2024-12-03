<?php
    $str = '023m0df0dfg0';

    $arr = [];

    for($i = 0; $i < strlen($str); $i++){
        if($str[$i] == 0){
            $arr[] = $i;
        }
    }

    var_dump($arr);

    echo PHP_EOL;