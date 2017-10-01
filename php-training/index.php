<?php
    // define a Constant
  define("TITLE", "Variables and Constants");

  // Variables
  $my_name = "Ahmad Saleh";
  $my_car = "Alero 2000";
  $birth_year = 1989;

  // Date method:
  date_default_timezone_set('America/Chicago');

  $today = date('F j, Y');
  $this_year = date('Y');

  // Calculate my age dynamically:
  $my_age = ($this_year - $birth_year);
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Php Practice: <?php echo TITLE; ?></title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Php practice</h1>
    <h2>1- Constants and Variables:</h2>
    <hr>
    <div class="wrapper">
      <h3>Today's Date:</h3>
      <p><?php echo $today; ?></p>
      <hr>

      <h3>My name is:</h3>
      <p><?php echo $my_name; ?></p>
      <hr>

      <h3>Model of my Car:</h3>
      <p><?php echo $my_car; ?></p>
      <hr>

      <h3>My age:</h3>
      <p><?php echo $my_age; print(" years old"); ?></p>
      <hr>
    </div>
  </body>
</html>
