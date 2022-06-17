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
    // update total price
    totalPrice();
    
}

// Total price calculation 
function getInputValue(product){
    const productInput = document.getElementById(product+'-input')
    const productNum = parseFloat(productInput.value)
    return productNum;
}
function totalPrice(){
    const phnTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59
    const subTotal = phnTotal + caseTotal
    const tax = subTotal / 10;
    const total = subTotal- tax
    // update sub-total
    document.getElementById('sub-total').innerText= subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total-price').innerText = total

    console.log(total);
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