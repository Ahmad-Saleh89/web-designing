<?php
    // define a Constant
  define("TITLE", "Variables and Constants");

  // Variables
  $my_name = "Ahmad Saleh";
  $my_car = "Alero 2000";
  $birth_year = 1989;

  // Creating an Array:
  $statesArr = array("Nebraska", "Nevada", "Iowa", "Kansas");

  // Associative Array:
  $friendArr = array(
                      name => "John",
                      job => "teacher",
                      age => 30,
                      hobby => "swimming"
                    );

  $countriesArr = array(
                    array(
                      countryName => "Syria",
                      capitalCity => "Damascus",
                      attraction => "Palmyra"
                    ),
                    array(
                      countryName => "Egypt",
                      capitalCity => "Cairo",
                      attraction => "The Pyramids"
                    ),
                    array(
                      countryName => "Jordan",
                      capitalCity => "Amman",
                      attraction => "The dead sea"
                    ),
                  );
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

    <h2>2- Php Arrays</h2>
    <hr>
    <div class="wrapper">
      <h3>Regular Array:</h3>
        <ul>Some states:
          <li><?php echo $statesArr[0] ?></li>
          <li><?php echo $statesArr[1] ?></li>
          <li><?php echo $statesArr[2] ?></li>
          <li><?php echo $statesArr[3] ?></li>
        </ul>
      <hr>
      <h3>Associative Array:</h3>
        <h4>About John:</h4>
        <p><strong><?php echo $friendArr[name]; ?></strong>
        is a <strong><?php echo $friendArr[job]; ?></strong>,
        and he is <strong><?php echo $friendArr[age]; ?></strong> years old,
        and <strong><?php echo $friendArr[hobby]; ?></strong> is his hobby.</p>
      <hr>
      <h3>Multidimensional Array:</h3>
        <h4><?php echo $countriesArr[0][countryName]; ?></h4>
        <p>The capital city is <strong><?php echo $countriesArr[0][capitalCity]; ?></strong>
        , and you have to visit <strong><?php echo $countriesArr[0][attraction]; ?></strong>.</p>

        <h4><?php echo $countriesArr[1][countryName]; ?></h4>
        <p>The capital city is <strong><?php echo $countriesArr[1][capitalCity]; ?></strong>
        , and you have to visit <strong><?php echo $countriesArr[1][attraction]; ?></strong>.</p>

        <h4><?php echo $countriesArr[2][countryName]; ?></h4>
        <p>The capital city is <strong><?php echo $countriesArr[2][capitalCity]; ?></strong>
        , and you have to visit <strong><?php echo $countriesArr[2][attraction]; ?></strong>.</p>
      <hr>  
    </div>
  </body>
</html>
