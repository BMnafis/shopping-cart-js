// Click handler function for 4 (+, -) button
function updateProductQuantity(product, price, isIncrease){
 const inputValue = document.getElementById(product+'-input');
 let inputNumber = parseInt(inputValue.value);
 
//  Applying condition for increasing & decreasing
if(isIncrease == true){
    inputNumber = inputNumber + 1;
}else if(inputNumber > 0){
    inputNumber = inputNumber - 1;
}
inputValue.value = inputNumber;

//  Product total calculate
const productPrice = document.getElementById(product+'-total');

const productTotalPrice = inputNumber * price;
productPrice.innerText = productTotalPrice;

// call the function of calculate
calculateTotalValue()
}

// Get the input value for total
function getInputValue(product){
    const productInput = document.getElementById(product+'-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// Calculate Total for all product
function calculateTotalValue(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal / 10;
     const totalPrice = subTotal + tax;

    //  set the inner text of the total area
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}