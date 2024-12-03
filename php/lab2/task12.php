<?php
    $str = 'abcd4f6hij1';
    //$str = 'dfbdfvbsfvfdv';
    //$str = '0p';

    $numbers = ['0','1','2','3','4','5','6','7','8','9'];

    $first_pos = -1;
    $last_pos = -1;
    $flag_is_first = true;

    for($i = 0; $i < mb_strlen($str); $i++){
        for($j = 0; $j < count($numbers); $j++){
            if($str[$i] === $numbers[$j]){
                if($flag_is_first === true){
                    $first_pos = $i;
                    $flag_is_first = false;
                }
                $last_pos = $i;
                break;
            }
        }
    }

    if($last_pos === -1){
        $first_pos = 'null';
        $last_pos = 'null';
    }

    echo "str = $str" . PHP_EOL;
    echo "first_position = $first_pos" . PHP_EOL;
    echo "last_position = $last_pos" . PHP_EOL;