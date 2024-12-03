<?php
    echo PHP_EOL . '~~~~~~~~~~~~~Task 1~~~~~~~~~~~~~' . PHP_EOL;
    $arr = ['Привет, ', 'мир', '!'];

    foreach($arr as $element){
        echo $element;
    }

    echo PHP_EOL;

////////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 2~~~~~~~~~~~~~' . PHP_EOL;
    $arr = ['Привет, ', 'мир', '!'];
    
    echo 'Было:' . PHP_EOL;
/*
    foreach($arr as $element){
        echo $element;
    }*/
    print_r($arr);

    echo PHP_EOL;

    $arr[0] = 'Пока, ';

    echo 'Стало:' . PHP_EOL;
/*
    foreach($arr as $element){
        echo $element;
    }*/
    print_r($arr);

    echo PHP_EOL;

////////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 3~~~~~~~~~~~~~' . PHP_EOL;
    $str = '023m0df0dfg0';

    $arr = [];

    for($i = 0; $i < strlen($str); $i++){
        if($str[$i] == 0){
            $arr[] = $i;
        }
    }

    print_r($arr);

    echo PHP_EOL;

////////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 4~~~~~~~~~~~~~' . PHP_EOL;
    $arr = [];
    for($i = 0; $i < 10; $i++){
        $arr[] = mt_rand();
    }

    echo 'Исходный массив:' . PHP_EOL;

    /*foreach($arr as $element){
        echo $element . " ";
    }*/

    print_r($arr);

    $new_arr = [];
    foreach($arr as $element){
        if(strpos((string)$element,'5') !== false){
            $new_arr[] = $element;
        }
    }

    echo PHP_EOL . 'Полученный массив:' . PHP_EOL;
/*
    foreach($new_arr as $element){
        echo $element . " ";
    }*/
    print_r($new_arr);

    echo PHP_EOL;

/////////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 5~~~~~~~~~~~~~' . PHP_EOL;
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
/*
    foreach($arr1 as $element){
        echo $element . " ";
    }*/
    print_r($arr1);

    echo PHP_EOL . 'Массив 2:' . PHP_EOL;
/*
    foreach($arr2 as $element){
        echo $element . " ";
    }*/
    print_r($arr2);

    echo PHP_EOL . 'Массив 3:' . PHP_EOL;
/*
    foreach($arr3 as $element){
        echo $element . " ";
    }*/
    print_r($arr3);

    echo PHP_EOL;

///////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 6~~~~~~~~~~~~~' . PHP_EOL;
    $arr = [];
    for($i = 0; $i < 10; $i++){
        $arr[] = mt_rand();
    }

    echo 'Было:' . PHP_EOL;
    /*foreach($arr as $element){
        echo $element . " ";
    }*/
    print_r($arr);

    rsort($arr);

    echo PHP_EOL . 'Стало:' . PHP_EOL;
    /*foreach($arr as $element){
        echo $element . " ";
    }*/
    print_r($arr);
    echo PHP_EOL;

////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 7~~~~~~~~~~~~~' . PHP_EOL;
    $arr1 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    $arr2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    sort($arr1);
    sort($arr2);

    echo 'arr1:' . PHP_EOL;
    /*foreach($arr1 as $element){
        echo $element . " ";
    }*/
    print_r($arr1);

    echo PHP_EOL . 'arr2:' . PHP_EOL;
    /*foreach($arr2 as $element){
        echo $element . " ";
    }*/
    print_r($arr2);
    echo PHP_EOL;

///////////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 8~~~~~~~~~~~~~' . PHP_EOL;
    $arr =  ['orange', 'red', 'green', 'blue'];

    $new_arr = [];

    for($i = 0; $i < count($arr); $i++){
        $new_arr[$arr[$i]] = strlen($arr[$i]);
    }

    asort($new_arr);

    echo PHP_EOL . 'arr:' . PHP_EOL;
    /*foreach($arr as $element){
        echo $element . " ";
    }*/
    print_r($arr);

    echo PHP_EOL . 'new_arr:' . PHP_EOL;
    /*foreach(array_keys($new_arr) as $element){
        echo $element . " ";
    }*/
    print_r(array_keys($new_arr));
    echo PHP_EOL;

///////////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 9~~~~~~~~~~~~~' . PHP_EOL;
    $arr = [];
    for($i = 0; $i < 8; $i++){
        $arr[] = mt_rand(0,50);
    }

    echo PHP_EOL . 'arr:' . PHP_EOL;
    /*foreach($arr as $element){
        echo $element . " ";
    }*/
    print_r($arr);

    $first = array_slice($arr, 0, 4);
    $second = array_slice($arr, 4, 4);

    $first_sum = array_sum($first);
    $second_sum = array_sum($second);

    echo PHP_EOL . "first sum = $first_sum" . PHP_EOL;
    echo "second sum = $second_sum" . PHP_EOL;
    echo "after dividing = " . $second_sum / $first_sum . PHP_EOL;

////////////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 10~~~~~~~~~~~~~' . PHP_EOL;
    $arr = [];
    for($i = 0; $i < 10; $i++){
        $arr[] = mt_rand(-100,100);
    }

    $count = 0;
    echo PHP_EOL . 'arr:' . PHP_EOL;
    print_r($arr);
    foreach($arr as $element){
        //echo $element . " ";
        if($element < 0){
            $count++;
        }
    }

    echo PHP_EOL . "Count of negative numbers = $count" . PHP_EOL;

//////////////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 11~~~~~~~~~~~~~' . PHP_EOL;
    $arr = [];
    for($i = 0; $i < 10; $i++){
        $arr[] = mt_rand(-50,50);
    }

    echo PHP_EOL . 'arr:' . PHP_EOL;
    /*foreach($arr as $element){
        echo $element . " ";
    }*/
    print_r($arr);

    $new_arr = [];
    foreach($arr as $element){
        if($element > 0 and $element % 2 == 0){
            $new_arr[] = $element;
        }
    }

    echo PHP_EOL . 'new_arr:' . PHP_EOL;
    /*foreach($new_arr as $element){
        echo $element . " ";
    }*/
    print_r($new_arr);
    echo PHP_EOL;

///////////////////////////////////////////////////////////////////////////
    echo PHP_EOL . '~~~~~~~~~~~~~Task 12~~~~~~~~~~~~~' . PHP_EOL;
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
    else{
        $first_pos++;
        $last_pos++;
    }
    echo "str = $str" . PHP_EOL;
    echo "first_position = $first_pos" . PHP_EOL;
    echo "last_position = $last_pos" . PHP_EOL;