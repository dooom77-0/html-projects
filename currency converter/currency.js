const from = document.getElementById("currency-from");
const to = document.getElementById("currency-to");
const amount = document.getElementById("amount");
const convert = document.getElementById("convert"); // تصحيح اسم المتغير من covert إلى convert
const result = document.getElementById("result");

convert.addEventListener("click", () => {
    const fromCurrency = from.value;
    const toCurrency = to.value;
    const amountValue = amount.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const convertedAmount = (amountValue * exchangeRate).toFixed(2);
            result.innerText = `${amountValue} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            result.className = `text-2xl text-slate-900 font-bold mt-4 font-monospace`;
        })
        .catch(error => console.log(error));
    if(amountValue === '') {
        alert('Please enter an amount.');
        return;
    }
    else if (isNaN(amountValue) || amountValue <= 0) {
        alert('Please enter a valid positive number for the amount.');
        return;
    }
    else if (fromCurrency === toCurrency) {
        alert('Please select different currencies to convert.');
        return;
    }
    
});