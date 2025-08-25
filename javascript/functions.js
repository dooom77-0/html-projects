function printnum(uu){
    for(let i = 1; i <= uu; i++){
        console.log(i)
    }

}
printnum(21);
printnum(10);

function num2(fnum , snum){
    result = fnum + snum;
    return result;
}
let value = num2(9 , 6) - num2(10 , 2);
console.log(value);