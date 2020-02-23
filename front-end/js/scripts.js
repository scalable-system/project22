function filter() {
    
    var product = document.getElementById('product-title-1').value;
    var quantity = document.getElementById('quantity-1').value;

    proSize = product.length;
    quantitySize = quantity.length;
    
    if(proSize < 10 || proSize > 200 || quantitySize <0 || quantitySize > 20 )
        alert("bad");
    else
        alert("good");
        var product_title_1_js = product;
        var product_title_1_js = quantity;
}