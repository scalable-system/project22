function onInput(input, output) {
    var x = document.getElementById(input).value;
    document.getElementById(output).innerHTML = x;
}

function validation(index, id, divId, type, min, max, name){
    var myInput = document.getElementById(id);
    var letter = document.getElementById(divId);

    // When the user starts to type something inside the password field
    myInput.oninput = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
        letter.classList.remove("alert-warning");
        letter.classList.remove("alert-danger");
        letter.classList.add("alert-success");
        letter.classList.add("valid");
        letter.classList.remove("invalid");
    } else {
        letter.classList.remove("valid");
        letter.classList.remove("alert-warning");
        letter.classList.remove("alert-success");
        letter.classList.add("alert-danger");
        letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
        letter.classList.remove("alert-warning");
        letter.classList.remove("alert-danger");
        letter.classList.add("alert-success");
        letter.classList.add("valid");
        letter.classList.remove("invalid");
    } else {
        letter.classList.remove("valid");
        letter.classList.remove("alert-warning");
        letter.classList.remove("alert-success");
        letter.classList.add("alert-danger");
        letter.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
        letter.classList.remove("alert-warning");
        letter.classList.remove("alert-danger");
        letter.classList.add("alert-success");
        letter.classList.add("valid");
        letter.classList.remove("invalid");
    } else {
        letter.classList.remove("valid");
        letter.classList.remove("alert-warning");
        letter.classList.remove("alert-success");
        letter.classList.add("alert-danger");
        letter.classList.add("invalid");
    }
    
    // Validate length
    if(type == 1){
        if(myInput.value.length >= min && myInput.value.length <= max) {
            letter.classList.remove("alert-warning");
            letter.classList.remove("alert-danger");
            letter.classList.add("alert-success");
            letter.classList.add("valid");
            letter.classList.remove("invalid");
        } else {
            letter.classList.remove("valid");
            letter.classList.remove("alert-warning");
            letter.classList.remove("alert-success");
            letter.classList.add("alert-danger");
            letter.classList.add("invalid");
        }
    }else if(type == 2){
        if(myInput.value >= min && myInput.value <= max) {
            letter.classList.remove("alert-warning");
            letter.classList.remove("alert-danger");
            letter.classList.add("alert-success");
            letter.classList.add("valid");
            letter.classList.remove("invalid");
        } else {
            letter.classList.remove("valid");
            letter.classList.remove("alert-warning");
            letter.classList.remove("alert-success");
            letter.classList.add("alert-danger");
            letter.classList.add("invalid");
        }
    }

    }

    
}

//All the inputs can go here
//type = 1 = text
//type = 2 = number
// validation(index, id, divId, type, min, max, name)
/* 
    please follow these rules
    ===========================
    index = index before + 1
    id = input id
    divId = text under id
    type = see above
    min = minimum amount fo characters
    max = maximum amount of characters
    name = excel field name 
    =======================*/

validation(1, 'product-title-1', 'product-title-1-Div', 1, 150, 200, 'Product Title');
validation(2, 'quantity-1', 'quantity-1-Div', 2, 15, 20, 'Quantity');
validation(3, 'bullet-point-1', 'bullet-point-1-Div', 1, 50, 500, '1st Bullet Point');
validation(4, 'bullet-point-2', 'bullet-point-2-Div', 1, 50, 500, '2nd Bullet Point');
