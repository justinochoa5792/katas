<!-- Disemvowel Trolls -->
 <!-- Your task is to write a function that takes a string and return a new string with all vowels removed. -->

 <?php
  
function disemvowel(string $s): string  {
  $pattern = "/[aeiou]/i";
  return preg_replace($pattern, "", $s);
}
