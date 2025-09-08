const color = ['red','green','blue']

color.forEach(function(currentV,index,array){ // تنفذ الاوامر على كل عنصر في المصفوفة 
    console.log(array,index,currentV);
})

const ages = [15 , 20 , 30 , 10 , 11 , 25]

const hasAdult = ages.some(function(element){ // تتحقق مما اذا كان عنصر واحد في المصفوفة يحقق الشرط ويطبع true
    return element >= 40
})

console.log(hasAdult);

const agess = [20,30,22,17,51]

const areAdults = agess.every(function(element){ // يتحقق مما اذا كانت كل العناصر تحقق الشرط الموجود ويطبع true
    return element >= 18
})

console.log(areAdults);

const colors = ['brown','gray','blue']

const isexist = colors.includes('gray')

console.log(isexist)

const colors2 = ['red','green','blue','black']
const index = colors2.indexOf("black") // تبحث عن رقم العنصر من بداية المصفوفة 
console.log(index)

const eindex = colors2.lastIndexOf("green") //  تبحث عن رقم العنصر من نهاية المصفوفة 
console.log(eindex)

const ages2 = [15,12,18,19,30]

const index2 = ages2.findIndex((element) => element >= 18)// تبحث عن رقم العنصر الذي يحقق الشرط 
console.log(index2)

const el = ages2.find(function(element){ // يبحث عن العنصر الذي يطبق الشرط المعين 
    return element %3 === 0 
})
console.log(el);

const evenum = ages2.filter(function(currentV){ // يصنع مصفوفة جديدة على حسب الشرط
    return currentV %2 === 0 
})
console.log(evenum)

const color5 = ['red','black','green','yellow']
const color6 = ['dark','bright','white','gray']

const colors4 = color5.concat(color6) // دمج مصفيفتين في واحدة
console.log(colors4)

const niggerss = ['black','red','green','blue','white']
const rgb = niggerss.slice(1 , 4) // تصنع مصفوفة جديدة بناء على نقطة البداية والنهاية التي وضعتها 

console.log(rgb)

const clors = ['black','red','green','blue','white']
clors.splice(2, 2 , 'gray','yellow') // حذف واستبدال واضافة عناصر في المصفوفة 

console.log(clors)