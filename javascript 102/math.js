const num = Math.ceil(-9.22); // تقريب لأكبر عدد صحيح
console.log(num);

const num2 = Math.round(8.11); // تقريب لأقرب عدد صحيح

console.log(num2);

const num3 = Math.floor(9.55); // تقريب لأصغر عدد صحيح
console.log(num3);

const num4 = Math.abs(-100); // القيمة المطلقة

console.log(num4);

let list = [1, 2 , 12 , -9 , 20];

console.log(Math.min(...list)); // أقل قيمة في القائمة
console.log(Math.max(...list)); // أكبر قيمة في القائمة

const str = '1.25'
const fnum = parseFloat(str) // تحويل السلسلة إلى عدد عشري

console.log(fnum + 1);

const str2 = '3020'
const inum = parseInt(str2) // تحويل السلسلة إلى عدد صحيح

console.log(inum + 1);

const nnum = Math.trunc(4.33) // ازالة الكسور

console.log(nnum);

const nnnum = 3.254

console.log(Number.isInteger(nnnum)); // التحقق مما إذا كان عدد صحيح

function square(number){
    if (isNaN(number)){ // التحقق مما إذا كان المدخل عدد
        return 'Invalid input';
    }
    return number * number;
}
console.log(square('10'));

const nnnnum = Math.pow(3, 4) // const number = 2**3 الاس 

console.log(nnnnum);

const num89 = Math.sqrt(81) // الجذر التربيعي

console.log(num89);

const num09 = Math.random(); // عدد عشوائي بين 0 و 1

console.log(num09);