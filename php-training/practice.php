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
    </div>
  </body>
</html>
