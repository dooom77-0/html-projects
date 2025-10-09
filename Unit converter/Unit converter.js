const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const tempInput = document.getElementById('tempInput');
const outputField = document.getElementById('tempOutput');

function ConvertTemperature(value, from, to) { //* قيم التحويل
    value = Number(value);
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
//-------------------------------Length converter---------------------------------//

const fromLengthUnit = document.getElementById('fromUnitLength');
const toLengthUnit = document.getElementById('toUnitLength');
const lengthInput = document.getElementById('lengthInput');
const lengthOutput = document.getElementById('lengthOutput');  
function ConvertLength(value, from, to) { //* قيم التحويل
    value = parseFloat(value);
    if (from === 'Meter' && to === 'Kilometer') {
        return value / 1000;
    }
    else if (from === 'Kilometer' && to === 'Meter') {
        return value * 1000;
    }
    else if (from === 'Centimeter' && to === 'Meter') {
        return value / 100;
    }
    else if(from === 'Meter' && to === 'Centimeter'){
        return value * 100;
    }
    else if(from === 'Centimeter' && to === 'Kilometer'){
        return value / 100000;
    }
    else if(from === 'Kilometer' && to === 'Centimeter'){
        return value * 100000;
    }
    else if(from === 'Centimeter' && to === 'Millimeter'){
        return value * 10;
    }
    else if(from === 'Millimeter' && to === 'Centimeter'){
        return value / 10;
    }
    else if (from === 'Millimeter' && to === 'Meter') {
        return value / 1000;
    }
    else if (from === 'Meter' && to === 'Millimeter') {
        return value * 1000;
    }
    else if (from === 'Mile' && to === 'Kilometer') {
        return value * 1.60934;
    }
    else if (from === 'Kilometer' && to === 'Mile') {
        return value / 1.60934;
    }
    else {
        return value;
    }
}
function UpdateLengthResult() { //*تحديث الناتج
  const value = parseFloat(lengthInput.value);
  const from = fromLengthUnit.value;
  const to = toLengthUnit.value;

  const result = ConvertLength(value, from, to);
    lengthOutput.value = result.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

fromLengthUnit.addEventListener('change', UpdateLengthResult);
toLengthUnit.addEventListener('change', UpdateLengthResult);
lengthInput.addEventListener('input', UpdateLengthResult);

//-------------------------------Weight converter---------------------------------//
const fromWeightUnit = document.getElementById('fromUnitWeight');
const toWeightUnit = document.getElementById('toUnitWeight');
const weightInput = document.getElementById('weightInput');
const weightOutput = document.getElementById('weightOutput');

function ConvertWeight(value, from, to) { //* قيم التحويل
    value = parseFloat(value);
    if (from === 'Gram' && to === 'Kilogram') {
        return value / 1000;
    }
    else if (from === 'Kilogram' && to === 'Gram') {
        return value * 1000;
    }
    else if (from === 'Milligram' && to === 'Gram') {
        return value / 1000;
    }
    else if (from === 'Gram' && to === 'Milligram') {
        return value * 1000;
    }
    else if (from === 'Pound' && to === 'Kilogram') {
        return value * 0.453592;
    }
    else if (from === 'Kilogram' && to === 'Pound') {
        return value / 0.453592;
    }
    else if (from === 'Ounce' && to === 'Gram') {
        return value * 28.3495;
    }
    else if (from === 'Gram' && to === 'Ounce') {
        return value / 28.3495;
    }
    else if (from === 'Gram' && to === 'Pound') {
        return value / 453.592;
    }
    else if (from === 'Pound' && to === 'Gram') {
        return value * 453.592;
    }
    else if (from === 'Milligram' && to === 'Kilogram') {
        return value / 1e+6;
    }
    else if (from === 'Kilogram' && to === 'Milligram') {
        return value * 1e+6;
    }
    else if(from === 'Milligram' && to === 'Pound'){
        return value / 453592;
    }
    else if(from === 'Pound' && to === 'Milligram'){
        return value * 453592;
    }
    else if (from ==='Ounce' && to === 'Pound'){
        return value / 16;
    }
    else if (from ==='Pound' && to === 'Ounce'){
        return value * 16;
    }
    else if (from ==='Ounce' && to === 'Kilogram'){
        return value / 35.274;
    }
    else if (from ==='Kilogram' && to === 'Ounce'){
        return value * 35.274;
    }
    else if (from ==='Ounce' && to === 'Milligram'){
        return value * 28349.5;
    }
    else if (from ==='Milligram' && to === 'Ounce'){
        return value / 28349.5;
    }
    else {
        return value;
    }
}

function UpdateWeightResult() { //*تحديث الناتج
  const value = parseFloat(weightInput.value);
  const from = fromWeightUnit.value;
  const to = toWeightUnit.value;

  const result = ConvertWeight(value, from, to);
  weightOutput.value = result.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

fromWeightUnit.addEventListener('change', UpdateWeightResult);
toWeightUnit.addEventListener('change', UpdateWeightResult);
weightInput.addEventListener('input', UpdateWeightResult);