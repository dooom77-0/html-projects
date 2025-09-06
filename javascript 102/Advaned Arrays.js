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