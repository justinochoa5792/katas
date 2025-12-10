<!-- Sum of positive -->
 <!-- You get an array of numbers, return the sum of all of the positives ones. -->

 <?php

function positive_sum(array $arr) : int|float {
  // Your code here
     $total =  array_filter($arr, function($num) {return $num  > 0;});
    return array_reduce($total, function($carry, $item) {
    return $carry + $item;
}, 0);
}