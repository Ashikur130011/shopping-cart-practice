// product quantity
function phnInputCount(product, price, isIncrease){
    const productInputText = document.getElementById(product+'-input');
    const productInput = productInputText.value;
    if(isIncrease == true){
        productQuantity = parseInt(productInput) + 1; 
    }
    else if(isIncrease == false && productInput> 0 ){
        productQuantity = parseFloat(productInput) - 1; 
    }
    productInputText.value = productQuantity
    
    // update Product Total
    const productTotal = document.getElementById(product+'-price')
    productTotal.innerText = productQuantity * price
    console.log(price);
}


// phone & case quantity increasing
document.getElementById('phone-plus').addEventListener('click', function(){
    phnInputCount('phone',1219,true)

})
document.getElementById('case-plus').addEventListener('click', function(){
    phnInputCount('case',59, true)
})
// phone and case decreasing
document.getElementById('phone-minus').addEventListener('click', function(){
    phnInputCount('phone',1219, false)

})
document.getElementById('case-minus').addEventListener('click', function(){
    phnInputCount('case',59, false)
})