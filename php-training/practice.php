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
  </body>
</html>
