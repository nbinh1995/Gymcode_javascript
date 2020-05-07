function changeCurrency(){
    let cash;
    cash = document.getElementById('amount').value;
    let result = cash/23000;
    document.getElementById('result').innerHTML = result.toFixed(0);
}