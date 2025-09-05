function sum(firstNum , secondNum){
    return firstNum + secondNum
}

function sub(firstNum , secondNum){
    return firstNum - secondNum
}

function mul(firstNum , secondNum){
    return firstNum * secondNum
}

function operation(firstNum , secondNum , opCallpack){ // 
    return `result = (${opCallpack(firstNum , secondNum)})`
}

console.log(operation(5 , 2 , sum))
console.log(operation(5 , 2 , sub))
console.log(operation(5 , 2 , mul))

const suml= (first , second) => first + second

console.log(5 , 6)

function format(message , formatCallback){
    return formatCallback(message)
}

function htmlformat(message){
    return `<h1> ${message} </h1>`
}

function jsonformat(message){
    return `{"message":"${message}"}`
}

console.log(format('welcome to javascript', htmlformat))
console.log(format('welcome to javascript', jsonformat))
