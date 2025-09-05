for(let i = 1; i <= 100; i++){
    console.log(i); // for loop
}
for(let x = 100; x >= 2; x-=2){
    console.log(x);
}

const colors = ['red' , 'green' , 'blue' , 'black' , 'white','purple'];

for(let color of colors){
    console.log(color);
}

const message = 'Welcome to Javascript';

for(let char of message){
    console.log(char);
}

const colorss = ['red' , 'green' , 'blue' , 'black' , 'white','purple'];

let color = 0;

while(color < colorss.length){ // while loop
    console.log(colorss[color]);
    color++;
}

const numbers = [1,2,3,4,0,5,6,7]

for(let i = 0 ;i < numbers.length; i++){
    if(numbers[i] == 0){
        break; // Stop the loop
    }
    console.log(numbers[i]);
}


const numberss = [1,2,3,4,0,5,6,7]

for(let i = 0 ;i < numberss.length; i++){
    if(numberss[i] == 0){
        continue; // Skip the current iteration
    }
    console.log(numberss[i]);
}