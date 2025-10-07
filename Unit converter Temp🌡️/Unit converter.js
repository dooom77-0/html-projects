const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const tempInput = document.getElementById('tempInput');
const outputField = document.getElementById('tempOutput');

function ConvertTemperature(value, from, to) { //* قيم التحويل
    value = parseFloat(value);
    if (from === 'Celsius' && to === 'Kelvin') {
        return value + 273.15;
    }
    if (from === 'Kelvin' && to === 'Celsius') {
        return value - 273.15;
    }
    else if (from === 'Celsius' && to === 'Fahrenheit') {
        return (value * 9/5) + 32;
    }
    else if (from === 'Fahrenheit' && to === 'Celsius') {
        return (value - 32) * 5/9;
    }
    else if (from === 'Kelvin' && to === 'Fahrenheit') {
        return (value * 9/5) - 459.67;
    }
    else if (from === 'Fahrenheit' && to === 'Kelvin') {
        return ((value - 32) * 5/9) + 459.67;
    }
    else {
        return value; //*نفس القيمة
    }
}

function UpdateResult() { //*تحديث الناتج
  const value = parseFloat(tempInput.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  const result = ConvertTemperature(value, from, to); //*استدعاء الدالة الام
  outputField.value = result.toLocaleString("en-US", { maximumFractionDigits: 2 });
}


fromUnit.addEventListener('change', UpdateResult);
toUnit.addEventListener('change', UpdateResult);
tempInput.addEventListener('input', UpdateResult);
