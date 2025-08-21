let age = 14;

if(age < 15){ // التحقق من العمر
    console.log("sorry, you are too young"); 
}else{ // إذا كان العمر 15 أو أكثر
    console.log("welcome to the adult world");
}
let number = 0;

if (number < 0){
    console.log('negative');
}else if (number === 0){ // elif 
    console.log('zero');
}else{
    console.log('positive');
}

const colors = ['red' , 'green' , 'blue'];
let colorNumber = 3;

switch(colorNumber){
    case 1:
        console.log(colors[0]);
        break;
    case 2:
        console.log(colors[1]);
        break;
    case 3:
        console.log(colors[2]);
        break;
    default:
        console.log('unknown color');
}