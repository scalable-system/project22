<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">


    <title>Product insert</title>

    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <script src="js/scripts.js"></script>
    
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
        <p>Whatever you enter here will be inserted in the excel</p>
        <input class="form-control" type="text" name="value" id="product-title-1" placeholder="Product Title" oninput="onInput(this.id, this.id+'Output');">
        <input class="form-control" type="text" name="cell" id="quantity-1" placeholder="Quantity" oninput="onInput(this.id, this.id+'Output');">
        <input type="submit" class="btn btn-primary btn-lg btn-block" value="submit">
    </form>
    
    <h3 id="product-title-1Output"></h3>
    <h3 id="quantity-1Output"></h3>

    <!-- Bootsrap and JQuery for bootstrap -->
    <script src="//code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="js/inserting.js" type="text/javascript"></script>

  </body>
</html>