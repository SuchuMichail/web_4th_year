<?php
   /*echo "Введите строку\n";
   $str = readline();

   echo "Вы ввели: $str\n";*/

   $str = 'hello';
   
   $leng = mb_strlen ($str);
   echo "Длина строки = $leng \n";

   $last_sym = $str[$leng - 1];
   echo "Последний символ = " . $last_sym . "\n";

   echo "Вывод всех символов по очереди с конца строки:\n";
   for($i = $leng - 1; $i >= 0; $i--){
      echo $str[$i] . " ";
   }
?>