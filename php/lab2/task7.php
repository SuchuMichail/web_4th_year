<?php
    $arr1 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    $arr2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    sort($arr1);
    sort($arr2);

    echo 'arr1:' . PHP_EOL;
    foreach($arr1 as $element){
        echo $element . " ";
    }

    echo PHP_EOL . 'arr2:' . PHP_EOL;
    foreach($arr2 as $element){
        echo $element . " ";
    }
    echo PHP_EOL;