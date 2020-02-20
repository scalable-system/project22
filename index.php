<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Excel Demo</title>

    <!-- Css and Bootstrap -->
    <link rel="stylesheet" href="styles/style.css">
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
        <p>Whatever you enter here will be inserted in the excel</p>
        <input class="form-control" type="text" name="value" id="value" placeholder="enter something" oninput="onInput(this.id, this.id+'Output');">
        <input class="form-control" type="text" name="cell" id="value1" placeholder="enter the cell" oninput="onInput(this.id, this.id+'Output');">
        <input type="submit" class="btn btn-primary btn-lg btn-block" value="submit">
    </form>
    
    <h3 id="valueOutput"></h3>
    <h3 id="value1Output"></h3>

    <!-- Bootsrap and JQuery for bootstrap -->
    <script src="//code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="js/inserting.js" type="text/javascript"></script>
</body>
</html>

<?php 

include 'inserting.php';

//Declaring the variable
$value1 = "";

//Getting the input from the form
if(isset($_POST['value']) && isset($_POST['cell'])){

    //The inserted value
    $value = $_POST['value'];
    $cell = $_POST['cell'];

    echo "<script>alert('Inserted!');</script>";

     insert($value, $cell);

}else{
    echo "<script>alert('Not Working!');</script>";
}

?>