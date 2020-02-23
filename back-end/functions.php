<?php

//Testting the input...
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//Validation function
function validStrLen($str, $min, $max){
    $len = strlen($str);

    if($len < $min){
        return false;
    }
    elseif($len > $max){
        // in case we need a error div echo '<div class="alert alert-danger" role="alert">Field #' . $count . ' is too long</div>';
        return false;
    }else{
        return true;
    }
}
function validNum($num, $min, $max){

    if($num >= $min || $num <= $max){
        return true;
    }else{
        return false;
    }
}
























?>