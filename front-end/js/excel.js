//Getting the infromation from the form

document.getElementById('theForm').onsubmit = function() { 

    var inputArray = [];

    function inputArr(id, inputId, inputTitle, value, numOfChar){

        let arrLeng = inputArray.length;
        let newCol = arrLeng++;

        inputArray[newCol] = [];

        inputArray[newCol][0] = id;
        inputArray[newCol][1] = inputId;
        inputArray[newCol][2] = inputTitle;
        inputArray[newCol][3] = value;
        inputArray[newCol][4] = numOfChar;

    }

    inputArr('0', 'product-title-1', "Product Title", document.getElementById("product-title-1").value, document.getElementById("product-title-1").value.length);
    inputArr('1', 'quantity-1', "Quantity", document.getElementById("quantity-1").value, document.getElementById("quantity-1").value.length);
    inputArr('2', 'bullet-point-1', "Bullet Point 1", document.getElementById("bullet-point-1").value, document.getElementById("bullet-point-1").value.length);
    inputArr('3', 'bullet-point-2', "Bullet Point 2", document.getElementById("bullet-point-2").value, document.getElementById("bullet-point-2").value.length);
    inputArr('4', 'bullet-point-3', "Bullet Point 3", document.getElementById("bullet-point-3").value, document.getElementById("bullet-point-3").value.length);
    inputArr('5', 'bullet-point-4', "Bullet Point 4", document.getElementById("bullet-point-4").value, document.getElementById("bullet-point-4").value.length);
    inputArr('6', 'bullet-point-5', "Bullet Point 5", document.getElementById("bullet-point-5").value, document.getElementById("bullet-point-5").value.length);

    console.log(inputArray);
    
    var data = inputArray;

    if(typeof console !== 'undefined') console.log(new Date());
    var wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(data);
    
    XLSX.utils.book_append_sheet(wb, ws, ws_name);
    if(typeof console !== 'undefined') console.log(new Date());
    XLSX.writeFile(wb, filename);
    if(typeof console !== 'undefined') console.log(new Date());

    return false;
}
