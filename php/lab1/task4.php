<?php
    /*echo "Введите строку1\n";
    $str1 = readline();

    echo "Введите строку2\n";
    $str2 = readline();*/

    $str1 = 'string frst';
    $str2 = 'string second';

    echo "str1&str2 = " . $str1 . '&' . $str2 . "\n";
    if (mb_strlen($str1) > mb_strlen($str2)){
        echo "Строка $str1 длиннее\n";
    } 
    elseif (mb_strlen($str2) > mb_strlen($str1)){
        echo "Строка $str2 длиннее\n";
    }
    else{
        echo "Длины строк равны\n";
    }