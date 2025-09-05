
let colors = ['red' , 'green' , 'blue' , 'purple']; // مصفوفة الألوان Array
console.log(colors[0]);// indexing

colors[1] = 'yellow'; // تغيير قيمة العنصر الثاني
console.log(colors);

console.log(colors.length); // عدد العناصر في المصفوفة

console.log(colors.includes('purple')); // التحقق من وجود العنصر

const colorss = ['red' , 'white' , 'yellow'];
colorss.unshift('green'); // إضافة عنصر في بداية المصفوفة
console.log(colorss);

colorss.shift(); // إزالة العنصر الأول
console.log(colorss);

colorss.push('blue'); // إضافة عنصر في نهاية المصفوفة
console.log(colorss);

colorss.pop(); // إزالة العنصر الأخير
console.log(colorss);

let nigga = 'black';
let niggas = ['black man' , 'so dark man' , 'nigga man']

console.log(Array.isArray(niggas)); // هل هي مصفوفة ام لا؟

const values = [[1 ,2 , 3] , [4 , 5 , 6] , [7 , 8 , 9]] // مصفوفة ثنائية الأبعاد
console.log(values[1][0])

let Message = 'Welcome to JavaScript';
let result2 = Message.split(' '); // تقسيم الجملة إلى كلمات
console.log(result2);

let Message2 = ['Welcome' , 'to' , 'JavaScript'];
let result3 = Message2.join(' '); // دمج الكلمات إلى جملة
console.log(result3);