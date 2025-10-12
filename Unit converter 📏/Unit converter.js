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
  outputField.value = result.toFixed(2);
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
    else if (from === 'Mile' && to === 'Meter') {
        return value * 1609.34;
    }
    else if (from === 'Meter' && to === 'Mile') {
        return value / 1609.34;
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
    lengthOutput.value = result.toFixed(2);
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
  weightOutput.value = result.toFixed(2);
}

fromWeightUnit.addEventListener('change', UpdateWeightResult);
toWeightUnit.addEventListener('change', UpdateWeightResult);
weightInput.addEventListener('input', UpdateWeightResult);

//-------------------------------Time converter---------------------------------//
const fromTimeUnit = document.getElementById('fromUnitTime');
const toTimeUnit = document.getElementById('toUnitTime');
const timeInput = document.getElementById('timeInput');
const timeOutput = document.getElementById('timeOutput');

function ConvertTime(value, from, to) {
    value = parseFloat(value);
    if (from === 'Second' && to === 'Minute') {
        return value / 60;
    }
    else if (from === 'Minute' && to === 'Second') {
        return value * 60;
    }
    else if (from === 'Hour' && to === 'Minute') {
        return value * 60;
    }
    else if (from === 'Minute' && to === 'Hour') {
        return value / 60;
    }
    else if (from === 'Second' && to === 'Hour') {
        return value / 3600;
    }
    else if (from === 'Hour' && to === 'Second') {
        return value * 3600;
    }
    else if (from === 'Day' && to === 'Hour') {
        return value * 24;
    }
    else if (from === 'Hour' && to === 'Day') {
        return value / 24;
    }
    else if (from === 'Week' && to === 'Day') {
        return value * 7;
    }
    else if (from === 'Day' && to === 'Week') {
        return value / 7;
    }
    else if (from === 'Week' && to === 'Hour') {
        return value * 168;
    }
    else if (from === 'Hour' && to === 'Week') {
        return value / 168;
    }
    else if (from === 'Second' && to === 'Day') {
        return value / 86400;
    }
    else if (from === 'Day' && to === 'Second') {
        return value * 86400;
    }
    else if (from === 'Week' && to === 'Month') {
        return value / 4;
    }
    else if (from === 'Month' && to === 'Week') {
        return value * 4;
    }
    else if (from === 'Day' && to === 'Month') {
        return value / 30;
    }
    else if (from === 'Month' && to === 'Day') {
        return value * 30;
    }
    else if (from ==='Minute' && to === 'Month'){
        return value / 43200;
    }
    else if (from ==='Month' && to === 'Minute'){
        return value * 43200;
    }
    else if (from ==='Second' && to === 'Week'){
        return value / 604800;
    }
    else if (from ==='Week' && to === 'Second'){
        return value * 604800;
    }
    else if (from ==='Second' && to === 'Month'){
        return value / 2592000;
    }
    else if (from ==='Month' && to === 'Second'){
        return value * 2592000;
    }
    else if( from ==='Minute' && to === 'Day'){
        return value / 1440;
    }
    else if( from ==='Day' && to === 'Minute'){
        return value * 1440;
    }
    else if (from ==='Minute' && to === 'Week'){
        return value / 10080;
    }
    else if (from ==='Week' && to === 'Minute'){
        return value * 10080;
    }
    else if (from ==='Hour' && to === 'Month'){
        return value / 730;
    }
    else if (from ==='Month' && to === 'Hour'){
        return value * 730;
    }
    else {
        return value;
    }
}

function UpdateTimeResult() {
    const value = parseFloat(timeInput.value);
    const from = fromUnitTime.value;
    const to = toUnitTime.value;

    const result = ConvertTime(value, from, to);
    timeOutput.value = result.toFixed(2);
}

fromTimeUnit.addEventListener('change', UpdateTimeResult);
toTimeUnit.addEventListener('change', UpdateTimeResult);
timeInput.addEventListener('input', UpdateTimeResult);

//-------------------------------Volume converter---------------------------------//
const fromVolumeUnit = document.getElementById('fromUnitVolume');
const toVolumeUnit = document.getElementById('toUnitVolume');
const volumeInput = document.getElementById('VolumeInput');
const volumeOutput = document.getElementById('VolumeOutput');

function ConvertVolume(value, from, to) {
    value = parseFloat(value);
    if (from === 'Liter' && to === 'Milli L') {
        return value * 1000;
    }
    else if (from === 'Milli L' && to === 'Liter') {
        return value / 1000;
    }
    else if (from === 'Liter' && to === 'Cubic M') {
        return value / 1000;
    }
    else if (from === 'Cubic M' && to === 'Liter') {
        return value * 1000;
    }
    else if (from === 'Liter' && to === 'Cubic Cm') {
        return value * 1000000;
    }
    else if (from === 'Cubic Cm' && to === 'Liter') {
        return value / 1000000;
    }
    else if (from === 'Milli L' && to === 'Cubic M') {
        return value / 1000000;
    }
    else if (from === 'Cubic M' && to === 'Milli L') {
        return value * 1000000;
    }
    else if (from === 'Milli L' && to === 'Cubic Cm') {
        return value * 1000;
    }
    else if (from === 'Cubic Cm' && to === 'Milli L') {
        return value / 1000;
    }
    else if (from === 'Milli L' && to === 'Cubic Cm') {
        return value * 1000;
    }
    else if (from === 'Cubic Cm' && to === 'Milli L') {
        return value / 1000;
    }
    else if (from === 'Milli L' && to === 'Gallon') {
        return value / 3785.41;
    }
    else if (from === 'Gallon' && to === 'Milli L') {
        return value * 3785.41;
    }
    else if (from === 'Liter' && to === 'Gallon') {
        return value / 3.78541;
    }
    else if (from === 'Gallon' && to === 'Liter') {
        return value * 3.78541;
    }
    else if (from === 'Cubic M' && to === 'Cubic Cm') {
        return value * 1000000;
    }
    else if (from === 'Cubic Cm' && to === 'Cubic M') {
        return value / 1000000;
    }
    else if (from ==='Cubic M' && to === 'Gallon'){
        return value * 264.172;
    }
    else if (from ==='Gallon' && to === 'Cubic M'){
        return value / 264.172;
    }
    else if (from === 'Cubic Cm' && to === 'Gallon'){
        return value / 3785.41;
    }
    else if (from === 'Gallon' && to === 'Cubic Cm'){
        return value * 3785.41;
    }
    else {
        return value;
    }
}

function UpdateVolumeResult() {
    const value = parseFloat(volumeInput.value);
    const from = fromUnitVolume.value;
    const to = toUnitVolume.value;

    const result = ConvertVolume(value, from, to);
    volumeOutput.value = result.toFixed(2);
}

fromVolumeUnit.addEventListener('change', UpdateVolumeResult);
toVolumeUnit.addEventListener('change', UpdateVolumeResult);
volumeInput.addEventListener('input', UpdateVolumeResult);


