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