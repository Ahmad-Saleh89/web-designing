<?php
  $x = 80;
  $y = 60;
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>More php</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>More Php</h1>
    <div class="wrapper">
      <h2>If/ elseif/ else statements:</h2>
      <?php
        if($x < $y){
          echo "Yup! $x is certainly less than $y.";
        }elseif ($x > $y) {
          echo "Nope! $x is not less than $y";
        }else {
          echo "$x is equal to $y";
        }
       ?>
       <hr>
    </div>

    <div class="wrapper">
      <h2>String Operators:</h2>
      <ul>
        <li>The <span>"."</span> operator combines teh value of the right
        argument with the left argument, like this: <br>
        <?php
          $a = "Hello";
          $b = " My name is Ahmad, '@see the code@'";
          $c = $a . $b;
          echo $c;
         ?>
        </li><br>

        <li>The <span>". ="</span> operator appends the value in the right
        with the value in the left, like this:<br>
        <?php
          $a = "Hello";
          $a .= " My name is Ahmad, '@see the code@'";
          echo $a;
         ?>
        </li><br>
      </ul>
      <hr>
    </div>

    <div class="wrapper">
      <h2>Php Loops:</h2>
      <h3>While loop:</h3>
      <p>
        <?php
          $initialNum = 10;
          while ($initialNum <= 20) {
            echo $initialNum . " , ";
            $initialNum++;
          }
         ?>
      </p>

      <h3>for loop:</h3>
      <div>
        <?php
          for ($i=0; $i <=10 ; $i++) {
            echo "Number: $i <br> ";
          }
         ?>
      </div>

      <h3>foreach loop</h3>
      <div>
        <?php
          $states = array("Nebraska", "Iowa", "California", "Florida");
          foreach ($states as $state) {
            echo "$state is a state. <br>";
          }
         ?>
      </div>

      <h3>do while loop:</h3>
      <div>
        <?php
          $n = 1;
          do {
            echo "Number: $n. <br>";
            $n++;
          } while ($n <= 10);
         ?>
      </div>
    </div>
    <hr>

    <h2>Php functions:</h2>
    <div class="wrapper">
      <h3>1- Built in functions:</h3>
      <h4>* sort() function</h4>
      <?php
        $foodArr = array("Beef", "Tomato", "Beans", "Rice");
        sort($foodArr);
        foreach ($foodArr as $ingredient) {
          echo "$ingredient <br>";
        }
       ?>

       <h4>* rsort() function:</h4>
       <?php
          rsort($foodArr);
          foreach ($foodArr as $ingredient){
            echo "$ingredient <br>";
          }
        ?>

        <h4>* strtolower() function:</h4>
        <?php
          $text = "Ahmad IS an AweSome Guy!";
          echo strtolower($text);
        ?>

        <h4>* sha1() function:</h4>
        <?php
          $password = "MyPassword";
          echo "Before: $password <br>";
          $password = sha1($password);
          echo "Encrypted password: $password";
        ?>
        <hr>
    </div>

    <div class="wrapper">
      <h3>2- Custom Functions:</h3>
      <h4>I- Custom function with no argument:</h4>
      <?php
        function countToTen(){
          for ($i=1; $i <=10 ; $i++) {
            echo $i . " - ";
          }
        }
        $countToTen = true;
        if($countToTen){
          countToTen();
        }else {
          echo "I'm not in the mood today!";
        }
       ?>

       <h4>II- Custom function with one argumentt:</h4>
       <?php
        function locate($location){
          echo "Locations I have visited in USA: $location. <br>";
        }
        locate("Chicago");
        locate("San Diego");
        locate("Colorado");
        ?>

        <h4>III- Custom function with multiple arguments:</h4>
        <?php
          function sumIt($val1, $val2){
            $sum = $val1 + $val2;
            echo "The sum of $val1 and $val2 is $sum";
          }
          sumIt(44, 50);
         ?>
    </div>


  </body>
</html>
