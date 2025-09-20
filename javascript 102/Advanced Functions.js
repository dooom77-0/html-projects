let user1 = {
    firstName : 'Ahmed',
    lastName : 'Omar'
}
let printFullName = function(){
    console.log('Hello,'+this.firstName+' '+this.lastName);
}
printFullName.call(user1) // call method


let user2 = {
    firstName : 'Son',
    lastName : 'Goku'
}
printName = function(age){
    console.log('Hello,'+this.firstName+' '+this.lastName+ '.your age is :'+age);
}
printName.apply(user2,[25]) // apply method

let add = (num1 , num2) => num1 + num2 // Arrow functions =>
console.log(add(5,3))

let obj = {
    title : 'How to write a function in an object',

    function1 : function(){
        return console.log('this is function1')
    },

    function2 : () => {
        return console.log('this is function2')
    },

    function3(){
        return console.log('this is function3')
    }
}
obj.function1()
obj.function2()
obj.function3()


function areas(w,l=10){
    let area = w * l;
    return area;

}
let area = areas(5,6);
console.log(area)


let studentsnames = (name1,name2,...names) => console.log(name1,name2,names) //*Rest parameters//

studentsnames('Khalid','Salim','Mohammed','Hassoun','Ali')


let StudentsNames = (name1,name2,name3,name4) => console.log(name1,name2,name3,name4)

names = ['Ali','Mohamed','Salih','Mousa']
StudentsNames(...names) //*Spread Operator//