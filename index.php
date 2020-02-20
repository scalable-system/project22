<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Excel Demo</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>

    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST">
        <p>Whatever you enter here will be inserted in the excel</p>
        <input type="text" name="value" id="" placeholder="enter something">
        <input type="text" name="cell" id="" placeholder="enter the cell">
        <input type="submit" value="submit">
    </form>
    
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